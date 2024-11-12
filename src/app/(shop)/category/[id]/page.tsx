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
  
  const labels: Record<Category, {title: string, subtitle: string}> = {
    'men': {title: 'Men', subtitle: 'Products for Men'},
    'women': {title: 'Women', subtitle: 'Products for Women'},
    'kid': {title: 'Kids', subtitle: 'Products for Kids'},
    'unisex': {title: 'All', subtitle: 'All the products'},
  }

  /*if ( id === 'kids' ) {
    notFound();
  }*/

  return (
    <>
      <Title 
        title={`${ (labels as any)[id].title }`}
        subtitle={`${ (labels as any)[id].subtitle }`}
        className="mb-2"
      />

      <ProductGrid 
        products={ products }
      />
    </>
  );
}