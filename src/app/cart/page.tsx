'use client'

import Link from 'next/link'
import { ShoppingBag, Trash2, Minus, Plus, ArrowLeft } from 'lucide-react'
import { useCartStore } from '../../store/cart'

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    clearCart,
  } = useCartStore()

  return (
    <main className="min-h-screen bg-zinc-100 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-600 font-bold mb-8 hover:text-black"
        >
          <ArrowLeft size={20} />
          Continue shopping
        </Link>

        <h1 className="text-5xl font-black mb-10">
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            <ShoppingBag className="mx-auto mb-6" size={60} />

            <h2 className="text-3xl font-black mb-4">
              Your cart is empty
            </h2>

            <p className="text-zinc-500 mb-8">
              Add some premium products to continue.
            </p>

            <Link
              href="/#products"
              className="inline-block bg-green-400 text-black px-10 py-5 rounded-2xl font-black hover:scale-105 transition"
            >
              View Products
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">

            <section className="lg:col-span-2 flex flex-col gap-6">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl shadow-xl p-6 flex flex-col md:flex-row gap-6 items-center"
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-40 h-40 object-cover rounded-2xl"
                  />

                  <div className="flex-1 w-full">

                    <h2 className="text-2xl font-black mb-2">
                      {item.title}
                    </h2>

                    <p className="text-green-600 text-3xl font-black mb-5">
                      $ {item.price.toFixed(2)}
                    </p>

                    <div className="flex items-center gap-4">

                      {/* BOTÃO - */}
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        aria-label={`Decrease quantity of ${item.title}`}
                        title={`Decrease quantity of ${item.title}`}
                        className="w-11 h-11 rounded-full bg-zinc-200 flex items-center justify-center hover:bg-zinc-300 transition"
                      >
                        <Minus size={18} />
                      </button>

                      <span className="text-2xl font-black min-w-8 text-center">
                        {item.quantity}
                      </span>

                      {/* BOTÃO + */}
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        aria-label={`Increase quantity of ${item.title}`}
                        title={`Increase quantity of ${item.title}`}
                        className="w-11 h-11 rounded-full bg-zinc-200 flex items-center justify-center hover:bg-zinc-300 transition"
                      >
                        <Plus size={18} />
                      </button>

                    </div>
                  </div>

                  {/* BOTÃO REMOVER */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-5 py-3 rounded-2xl font-black flex items-center gap-2 hover:bg-red-600 transition"
                  >
                    <Trash2 size={18} />
                    Remove
                  </button>

                </div>
              ))}

            </section>

            <aside className="bg-white rounded-3xl shadow-2xl p-8 h-fit sticky top-28">

              <h2 className="text-3xl font-black mb-8">
                Order Summary
              </h2>

              <div className="flex justify-between text-lg mb-4">
                <span>Subtotal</span>
                <strong>$ {totalPrice().toFixed(2)}</strong>
              </div>

              <div className="flex justify-between text-lg mb-4">
                <span>Shipping</span>
                <strong className="text-green-600">Free</strong>
              </div>

              <div className="flex justify-between text-lg mb-8">
                <span>Estimated taxes</span>
                <strong>Calculated at checkout</strong>
              </div>

              <div className="border-t pt-6 flex justify-between text-3xl font-black mb-8">
                <span>Total</span>
                <span>$ {totalPrice().toFixed(2)}</span>
              </div>

              <Link href="/checkout">
                <button className="w-full bg-green-400 text-black py-5 rounded-2xl font-black text-xl hover:scale-105 transition">
                  Checkout Now
                </button>
              </Link>

              <button
                onClick={clearCart}
                className="w-full mt-4 border border-zinc-300 text-zinc-600 py-4 rounded-2xl font-bold hover:bg-zinc-100 transition"
              >
                Clear Cart
              </button>

              <p className="text-zinc-400 text-sm text-center mt-6">
                Secure payment powered by Stripe.
              </p>

            </aside>

          </div>
        )}

      </div>
    </main>
  )
}