import { client } from "@/sanity/lib/client";
import StoreFront from "./StoreFront";

export const revalidate = 10; // Revalidate at most every 10 seconds

export default async function Home() {
  // Pedimos a Sanity todos los documentos de tipo 'product' ordenados por fecha de creación
  const query = `*[_type == "product"] | order(_createdAt desc)`;
  const products = await client.fetch(query);

  return <StoreFront products={products} />;
}
