export const revalidate = 60; // 60 segundos

import { getPaginatedProductsWithImages } from '@/actions';
import { Pagination, ProductGrid, Title } from '@/components';

import { Gender } from '@prisma/client';
import { redirect } from 'next/navigation';

interface Props {
  params: Promise<{ gender: string }>;
  searchParams: Promise<{ page?: string }>;
}

export default async function GenderByPage({ params, searchParams }: Props) {
  const { gender } = await params;
  const page: number = Number((await searchParams).page) ?? 1;

  const { products, totalPages } = await getPaginatedProductsWithImages({
    page,
    gender: gender as Gender,
  });

  if (products.length === 0) {
    redirect(`/gender/${gender}`);
  }

  const labels: Record<string, string> = {
    men: 'Men',
    women: 'Women',
    kid: 'Kids',
    unisex: 'All',
  };

  // if ( id === 'kids' ) {
  //   notFound();
  // }

  return (
    <>
      <Title
        title={`${labels[gender]}`}
        subtitle="Best Sellers"
        className="mb-2"
      />

      <ProductGrid products={products} />

      <Pagination totalPages={totalPages} />
    </>
  );
}
