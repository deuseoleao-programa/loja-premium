'use client'

import { useCartStore } from '../../store/cart'

export default function CheckoutPage() {
  const {
    cart,
    totalPrice,
  } = useCartStore()

  async function handleCheckout() {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cart,
      }),
    })

    const data = await response.json()

    if (data.url) {
      window.location.href = data.url
    }
  }

  return (
    <main className="min-h-screen bg-zinc-100 py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

        <div className="bg-white rounded-3xl shadow-2xl p-10">
          <h1 className="text-5xl font-black mb-10">
            Checkout
          </h1>

          <div className="grid gap-6">
            <input
              type="text"
              placeholder="Nome completo"
              className="border rounded-2xl p-5 text-lg"
            />

            <input
              type="email"
              placeholder="E-mail"
              className="border rounded-2xl p-5 text-lg"
            />

            <input
              type="text"
              placeholder="Endereço"
              className="border rounded-2xl p-5 text-lg"
            />

            <input
              type="text"
              placeholder="Cidade"
              className="border rounded-2xl p-5 text-lg"
            />

            <input
              type="text"
              placeholder="País"
              className="border rounded-2xl p-5 text-lg"
            />
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-10 h-fit">
          <h2 className="text-4xl font-black mb-10">
            Resumo do Pedido
          </h2>

          <div className="flex flex-col gap-6 mb-10">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4"
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

                  <p className="text-zinc-500">
                    Quantidade: {item.quantity}
                  </p>
                </div>

                <p className="font-black text-xl">
                  R$ {item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t pt-8 flex justify-between text-3xl font-black mb-10">
            <span>Total</span>

            <span>
              R$ {totalPrice()}
            </span>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-green-400 text-black py-5 rounded-2xl font-black text-xl hover:scale-105 transition"
          >
            Finalizar Pagamento
          </button>
        </div>

      </div>
    </main>
  )
}