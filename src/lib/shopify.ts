// Shopify Storefront API config
const SHOPIFY_DOMAIN = "luxen-9735.myshopify.com";
const STOREFRONT_ACCESS_TOKEN = "50eaebf1f8883fabe49de3ea02caa12b";
const API_VERSION = "2026-01";

// Map local product IDs to Shopify variant GIDs
const VARIANT_MAP: Record<string, string> = {
  "nebula-astronaut-projector":
    "gid://shopify/ProductVariant/53385013002453",
};

/**
 * Create a Shopify cart via the Storefront API and return the checkout URL.
 * The checkout URL will be on the Shopify domain; the Cloudflare Worker
 * proxies /checkouts/* so the customer sees luxenlights.com.
 */
export async function createCheckout(
  items: { id: string; quantity: number }[]
): Promise<string> {
  const lines = items
    .map((item) => {
      const variantGid = VARIANT_MAP[item.id];
      if (!variantGid) return null;
      return { merchandiseId: variantGid, quantity: item.quantity };
    })
    .filter(Boolean);

  if (lines.length === 0) {
    throw new Error("No valid items for checkout");
  }

  const response = await fetch(
    `https://${SHOPIFY_DOMAIN}/api/${API_VERSION}/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        query: `
          mutation cartCreate($input: CartInput!) {
            cartCreate(input: $input) {
              cart {
                checkoutUrl
              }
              userErrors {
                field
                message
              }
            }
          }
        `,
        variables: {
          input: {
            lines,
          },
        },
      }),
    }
  );

  const json = await response.json();

  const errors = json.data?.cartCreate?.userErrors;
  if (errors && errors.length > 0) {
    throw new Error(errors.map((e: { message: string }) => e.message).join(", "));
  }

  const checkoutUrl: string = json.data?.cartCreate?.cart?.checkoutUrl;
  if (!checkoutUrl) {
    throw new Error("Failed to create checkout");
  }

  return checkoutUrl;
}

// Keep the old sync function as a fallback
export function buildCheckoutUrl(
  items: { id: string; quantity: number }[]
): string {
  const lineItems = items
    .map((item) => {
      const numericId = VARIANT_MAP[item.id]?.split("/").pop();
      if (!numericId) return null;
      return `${numericId}:${item.quantity}`;
    })
    .filter(Boolean)
    .join(",");

  return `https://${SHOPIFY_DOMAIN}/cart/${lineItems}`;
}
