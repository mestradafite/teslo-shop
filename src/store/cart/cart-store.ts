import type { CartProduct } from '@/interfaces';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  cart: CartProduct[];

  getTotalItems: () => number;

  getSummaryInformation: () => {
    subTotal: number;
    tax: number;
    total: number;
    itemsInCart: number;
  };

  summary: () => {
    subTotal: number;
    tax: number;
    total: number;
    itemsInCart: number;
  };

  addProductToCart: (product: CartProduct) => void;
  updateProductQuantity: (product: CartProduct, quantity: number) => void;
  removeProduct: (product: CartProduct) => void;
  clearCart: () => void;
}

export const useCartStore = create<State>()(
  // Persist -> Save store to localStorage
  persist(
    (set, get) => ({
      cart: [],

      getTotalItems: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.quantity, 0);
      },

      getSummaryInformation: () => {
        const { cart, getTotalItems } = get();

        const subTotal = cart.reduce(
          (subTotal, product) => product.quantity * product.price + subTotal,
          0
        );

        const tax = subTotal * 0.15;
        const total = subTotal + tax;
        const itemsInCart = getTotalItems();

        return {
          subTotal,
          tax,
          total,
          itemsInCart,
        };
      },

      summary: () => {
        return get().getSummaryInformation();
      },

      // Methods
      addProductToCart: (product: CartProduct) => {
        const { cart } = get();

        // 1. Check if the product exists in cart with the selected size
        const productInCart = cart.some(
          (item) => item.id === product.id && item.size === product.size
        );

        if (!productInCart) {
          set({ cart: [...cart, product] });
          return;
        }

        // 2. The product exists by size, i have to increase quantity
        const updatedCartProducts = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return { ...item, quantity: item.quantity + product.quantity };
          }

          return item;
        });

        set({ cart: updatedCartProducts });
      },

      updateProductQuantity(product, quantity) {
        const { cart } = get();

        const updatedCartProducts = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return { ...item, quantity: quantity };
          }
          return item;
        });

        set({ cart: updatedCartProducts });
      },

      removeProduct: (product: CartProduct) => {
        const { cart } = get();

        const updatedCartProducts = cart.filter(
          (item) => item.id !== product.id || item.size !== product.size
        );

        set({ cart: updatedCartProducts });
      },
      clearCart: () => {
        set({ cart: [] });
      },
    }),
    {
      name: 'shopping-cart',
    }
  )
);
