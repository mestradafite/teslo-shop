import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  }
}

export default function({ params }: Props) {
  
  const { id } = params;
  const products = seedProducts.filter( product => product.gender === id);
  
  const labels: Record<Category, string> = {
    'men': 'Men',
    'women': 'Women',
    'kid': 'Kids',
    'unisex': 'All the products'
  }

  /*if ( id === 'kids' ) {
    notFound();
  }*/

  return (
    <>
      <Title 
        title={`${ (labels as any)[id] }`}
        subtitle="All the products"
        className="mb-2"
      />

      <ProductGrid 
        products={ products }
      />
    </>
  );
}