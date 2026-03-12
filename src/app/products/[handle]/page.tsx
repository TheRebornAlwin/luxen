import { products } from "@/lib/data";
import { ProductPageClient } from "./product-page-client";

export function generateStaticParams() {
  return products.map((product) => ({
    handle: product.handle,
  }));
}

export default function ProductPage() {
  return <ProductPageClient />;
}
