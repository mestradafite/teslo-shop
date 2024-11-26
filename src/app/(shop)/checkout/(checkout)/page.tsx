import { Title } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import { ProductsInCart } from './ui/ProductsInCart';

export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verify order" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Cart */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Edit cart</span>
            <Link href="/" className="underline mb-5">
              Go back to store
            </Link>

            {/* Items */}
            <ProductsInCart />
          </div>

          {/* Summary */}
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl font-bold">Delivery Address</h2>
            <div className="mb-10">
              <p className="text-xl">Miki Estrada</p>
              <p>Av 1111</p>
              <p>Sabadell</p>
              <p>Barcelona</p>
              <p>CP 11212</p>
              <p>123.123.123.</p>
            </div>

            {/* Divider */}
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

            <h2 className="text-2xl mb-2 font-bold">Order Summary</h2>

            <div className="grid grid-cols-2">
              <span>Products number</span>
              <span className="text-right">3 articles</span>

              <span>Subtotal</span>
              <span className="text-right">$ 100</span>

              <span>Taxes (15%)</span>
              <span className="text-right">$ 100</span>

              <span className="mt-5 text-2xl">Total</span>
              <span className="mt-5 text-2xl text-right">$ 100</span>
            </div>

            <div className="mt-5 mb-2 w-full">
              <p className="mb-5">
                {/* Disclamer */}
                <span className="text-xs">
                  Al hacer click en &quotColocar orden&quot, aceptas nuestros{' '}
                  <a href="" className="underline">
                    términos y condiciones
                  </a>{' '}
                  y{' '}
                  <a href="" className="underline">
                    política de privacidad
                  </a>
                </span>
              </p>

              <Link
                href="/orders/123"
                className="flex btn-primary justify-center"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
