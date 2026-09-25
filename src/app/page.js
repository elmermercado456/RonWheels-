import { sanityFetch } from "@/sanity/lib/live";
import StoreFront from "./StoreFront";

export const dynamic = 'force-dynamic';

export default async function Home() {
  // Pedimos a Sanity todos los documentos de tipo 'product' ordenados por fecha de creación
  const query = `*[_type == "product"] | order(_createdAt desc)`;
  const { data: products } = await sanityFetch({ query });

  return <StoreFront products={products} />;
}
