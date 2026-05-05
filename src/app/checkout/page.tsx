'use client'

import Link from 'next/link'
import { Lock, ShieldCheck, Truck, CreditCard, ArrowLeft } from 'lucide-react'
import { useCartStore } from '../../store/cart'

export default function CheckoutPage() {
  const { cart, totalPrice } = useCartStore()

  async function handleCheckout() {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cart }),
    })

    const data = await response.json()

    if (data.url) {
      window.location.href = data.url
    }
  }

  return (
    <main className="min-h-screen bg-zinc-100 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/cart"
          className="inline-flex items-center gap-2 text-zinc-600 font-bold mb-8 hover:text-black"
        >
          <ArrowLeft size={20} />
          Back to cart
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          <section className="bg-white rounded-3xl shadow-2xl p-10">
            <p className="text-green-600 font-black uppercase tracking-[4px] mb-4">
              Secure Checkout
            </p>

            <h1 className="text-5xl font-black mb-6">
              Complete Your Order
            </h1>

            <p className="text-zinc-500 text-lg mb-10">
              Fast delivery, secure payment, and premium support.
            </p>

            <div className="grid gap-5">
              <input
                type="text"
                placeholder="Full name"
                className="border border-zinc-300 rounded-2xl p-5 text-lg focus:outline-none focus:border-green-400"
              />

              <input
                type="email"
                placeholder="Email address"
                className="border border-zinc-300 rounded-2xl p-5 text-lg focus:outline-none focus:border-green-400"
              />

              <input
                type="text"
                placeholder="Shipping address"
                className="border border-zinc-300 rounded-2xl p-5 text-lg focus:outline-none focus:border-green-400"
              />

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="City"
                  className="border border-zinc-300 rounded-2xl p-5 text-lg focus:outline-none focus:border-green-400"
                />

                <input
                  type="text"
                  placeholder="State"
                  className="border border-zinc-300 rounded-2xl p-5 text-lg focus:outline-none focus:border-green-400"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="ZIP code"
                  className="border border-zinc-300 rounded-2xl p-5 text-lg focus:outline-none focus:border-green-400"
                />

                <input
                  type="text"
                  placeholder="Country"
                  defaultValue="United States"
                  className="border border-zinc-300 rounded-2xl p-5 text-lg focus:outline-none focus:border-green-400"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-10">
              <div className="bg-zinc-100 rounded-2xl p-5">
                <Lock className="mb-3 text-green-600" />
                <p className="font-black">Secure Payment</p>
              </div>

              <div className="bg-zinc-100 rounded-2xl p-5">
                <Truck className="mb-3 text-green-600" />
                <p className="font-black">Fast Shipping</p>
              </div>

              <div className="bg-zinc-100 rounded-2xl p-5">
                <ShieldCheck className="mb-3 text-green-600" />
                <p className="font-black">Buyer Protection</p>
              </div>
            </div>
          </section>

          <aside className="bg-black text-white rounded-3xl shadow-2xl p-10 h-fit sticky top-28">
            <h2 className="text-4xl font-black mb-8">
              Order Summary
            </h2>

            <div className="flex flex-col gap-6 mb-10">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 border-b border-white/10 pb-6"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 rounded-2xl object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="font-black text-xl">
                      {item.title}
                    </h3>

                    <p className="text-zinc-400">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="font-black text-xl">
                    $ {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-lg">
                <span className="text-zinc-400">Subtotal</span>
                <strong>$ {totalPrice().toFixed(2)}</strong>
              </div>

              <div className="flex justify-between text-lg">
                <span className="text-zinc-400">Shipping</span>
                <strong className="text-green-400">Free</strong>
              </div>

              <div className="flex justify-between text-lg">
                <span className="text-zinc-400">Currency</span>
                <strong>USD</strong>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 flex justify-between text-3xl font-black mb-8">
              <span>Total</span>
              <span>$ {totalPrice().toFixed(2)}</span>
            </div>

            <button
              onClick={handleCheckout}
              disabled={cart.length === 0}
              className="w-full bg-green-400 text-black py-5 rounded-2xl font-black text-xl hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              <CreditCard size={24} />
              Pay Securely
            </button>

            <p className="text-zinc-500 text-sm text-center mt-6">
              Payments are encrypted and processed securely by Stripe.
            </p>
          </aside>
        </div>
      </div>
    </main>
  )
}