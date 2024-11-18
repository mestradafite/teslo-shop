"use client";

import { getStockBySlug } from "@/actions";
import { titleFont } from "@/config/fonts";
import clsx from "clsx";
import { useEffect, useState } from "react";

interface Props {
  slug: string;
}

export const StockLabel = ({ slug }: Props) => {
  const [stock, setStock] = useState(0);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getStock();
  }, []);

  const getStock = async () => {
    // Call server action
    const stock = await getStockBySlug(slug);
    setStock(stock);
    setLoading(false);
  };

  return (
    <>
      <h1 className={
        clsx(
            `${titleFont.className} antialiased font-bold text-lg`,
            {
                "hidden": isLoading
            }
        )
      }>
        Stock: {stock}
      </h1>

      {isLoading && (
        <h1
          className="animate-pulse bg-gray-200"
        >
          &nbsp;
        </h1>
      )}
    </>
  );
};
