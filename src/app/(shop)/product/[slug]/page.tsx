export const revalidate = 10080; // 7 days

import { getProductBySlug } from "@/actions";
import { ProductMobileSlideShow, ProductSlideShow, QuantitySelector, SizeSelector, StockLabel } from "@/components";
import { titleFont } from "@/config/fonts";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { AddToCart } from "./ui/AddToCart";

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = (await params).slug
 
  // fetch data
  const product = await getProductBySlug(slug);
 
  // optionally access and extend (rather than replace) parent metadata
  //const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: product?.title ?? 'Product not found',
    description: product?.description ?? '',
    openGraph: {
      //images: [], // https://mysite.com/products/image.png
      images: [`/products/${product?.images[1]}`],
    },
  }
}

export default async function ProoductBySllugPage({ params }: Props) {

  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if ( !product ) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">
      
      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2">
        {/* Mobile Slideshow */}
        <ProductMobileSlideShow 
          title={ product.title }
          images={ product.images }
          className="block md:hidden"
        />

        {/* Desktop Slideshow */}
        <ProductSlideShow
          title={ product.title }
          images={ product.images }
          className="hidden md:block"
        />
      </div>

      {/* Details */}
      <div className="col-span-1 px-5 ">
        <StockLabel slug={ slug } />

        <h1 className={`${ titleFont.className } antialiased font-bold text-xl`}>
          { product.title }
        </h1>
        <p className="text-lg mb-5">{ product.price }</p>

        <AddToCart product={ product } />

        {/* Description */}
        <h3 className="font-bold text-sm">Description</h3>
        <p className="font-light">
          { product.description }
        </p>
      </div>
    </div>
);
}