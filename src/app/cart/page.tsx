'use client'

import { useCartStore } from '../../store/cart'

export default function CartPage() {

  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCartStore()

  return (
    <main className="min-h-screen bg-zinc-100 py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-black mb-12">
          Seu Carrinho
        </h1>

        {cart.length === 0 ? (

          <div className="bg-white p-10 rounded-3xl shadow-xl">
            <p className="text-2xl font-semibold">
              Seu carrinho está vazio.
            </p>
          </div>

        ) : (

          <div className="grid lg:grid-cols-3 gap-10">

            <div className="lg:col-span-2 flex flex-col gap-6">

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

                  <div className="flex-1">

                    <h2 className="text-3xl font-black mb-3">
                      {item.title}
                    </h2>

                    <p className="text-2xl text-green-600 font-bold mb-5">
                      R$ {item.price}
                    </p>

                    <div className="flex items-center gap-4">

                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                        className="bg-zinc-200 w-10 h-10 rounded-full text-xl"
                      >
                        -
                      </button>

                      <span className="text-2xl font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                        className="bg-zinc-200 w-10 h-10 rounded-full text-xl"
                      >
                        +
                      </button>

                    </div>

                  </div>

                  <button
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                    className="bg-red-500 text-white px-6 py-3 rounded-2xl font-bold hover:bg-red-600 transition"
                  >
                    Remover
                  </button>

                </div>

              ))}

            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 h-fit">

              <h2 className="text-3xl font-black mb-8">
                Resumo
              </h2>

              <div className="flex justify-between text-xl mb-4">

                <span>Subtotal</span>

                <span>
                  R$ {totalPrice()}
                </span>

              </div>

              <div className="flex justify-between text-xl mb-8">

                <span>Frete</span>

                <span className="text-green-600 font-bold">
                  Grátis
                </span>

              </div>

              <div className="border-t pt-6 flex justify-between text-3xl font-black mb-10">

                <span>Total</span>

                <span>
                  R$ {totalPrice()}
                </span>

              </div>

              <a href="/checkout">

                <button className="w-full bg-green-400 text-black py-5 rounded-2xl font-black text-xl hover:scale-105 transition">
                  Finalizar Compra
                </button>

              </a>

            </div>

          </div>

        )}

      </div>

    </main>
  )
}