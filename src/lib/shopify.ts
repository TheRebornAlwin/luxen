// Shopify store config
const SHOPIFY_DOMAIN = "luxen-9735.myshopify.com";

// Map local product IDs to Shopify variant IDs
const VARIANT_MAP: Record<string, string> = {
  "nebula-astronaut-projector": "53385013002453",
};

/**
 * Build a Shopify checkout URL from cart items.
 * Format: https://store.myshopify.com/cart/VARIANT_ID:QTY,VARIANT_ID:QTY
 */
export function buildCheckoutUrl(
  items: { id: string; quantity: number }[]
): string {
  const lineItems = items
    .map((item) => {
      const variantId = VARIANT_MAP[item.id];
      if (!variantId) return null;
      return `${variantId}:${item.quantity}`;
    })
    .filter(Boolean)
    .join(",");

  return `https://${SHOPIFY_DOMAIN}/cart/${lineItems}`;
}
