import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

export default function Home() {

  const products = initialData.products;

  return (
    <>
      <Title 
        title="Shop"
        subtitle="All the products"
        className="mb-2"
      />

      <ProductGrid 
        products={ products }
      />
    </>
  )
}
