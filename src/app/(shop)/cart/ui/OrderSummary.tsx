"use client";

import { useCartStore } from "@/store";
import { useEffect, useState } from "react";

export const OrderSummary = () => {

    const [loaded, setLoaded] = useState(false);

    const itemsInCart = useCartStore((state) => state.summary().itemsInCart);
    const subTotal = useCartStore((state) => state.summary().subTotal);
    const tax = useCartStore((state) => state.summary().tax);
    const total = useCartStore((state) => state.summary().total);


    useEffect(() => {
        setLoaded(true);
    }, [])

    if (!loaded) return <p>Loading...</p>
    

  return (
    <div className="grid grid-cols-2">
      <span>Products number</span>
      <span className="text-right">{ itemsInCart === 1 ? '1 article' : `${ itemsInCart } articles`}</span>

      <span>Subtotal</span>
      <span className="text-right">{ subTotal }</span>

      <span>Taxes (15%)</span>
      <span className="text-right">{ tax }</span>

      <span className="mt-5 text-2xl">Total</span>
      <span className="mt-5 text-2xl text-right">{ total }</span>
    </div>
  );
};
