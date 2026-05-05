import { supabase } from '../../lib/supabase'

export default async function AdminPage() {
  const { data: orders } = await supabase
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false })

  const { data: products } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })

  const totalRevenue =
    orders
      ?.filter((order) => order.status === 'pago' || order.status === 'paid')
      .reduce((total, order) => total + Number(order.total), 0) || 0

  return (
    <main className="min-h-screen bg-zinc-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-black mb-10">
          Painel Admin
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <p className="text-zinc-500 font-bold">
              Pedidos
            </p>

            <h2 className="text-4xl font-black mt-3">
              {orders?.length || 0}
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <p className="text-zinc-500 font-bold">
              Produtos
            </p>

            <h2 className="text-4xl font-black mt-3">
              {products?.length || 0}
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <p className="text-zinc-500 font-bold">
              Faturamento Pago
            </p>

            <h2 className="text-4xl font-black mt-3 text-green-600">
              R$ {totalRevenue}
            </h2>
          </div>

        </div>

        <section className="bg-white rounded-3xl shadow-2xl p-8 mb-12">

          <h2 className="text-3xl font-black mb-6">
            Pedidos Recentes
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead>
                <tr className="border-b">
                  <th className="py-4">ID</th>
                  <th className="py-4">Cliente</th>
                  <th className="py-4">Email</th>
                  <th className="py-4">Total</th>
                  <th className="py-4">Status</th>
                </tr>
              </thead>

              <tbody>
                {orders?.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b"
                  >
                    <td className="py-4">
                      #{order.id}
                    </td>

                    <td className="py-4">
                      {order.customer_name}
                    </td>

                    <td className="py-4">
                      {order.customer_email}
                    </td>

                    <td className="py-4 font-bold">
                      R$ {order.total}
                    </td>

                    <td className="py-4">
                      <span
                        className={`px-4 py-2 rounded-full font-bold text-sm ${
                          order.status === 'pago' ||
                          order.status === 'paid'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>

        </section>

        <section className="bg-white rounded-3xl shadow-2xl p-8">

          <h2 className="text-3xl font-black mb-6">
            Produtos Cadastrados
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {products?.map((product) => (
              <div
                key={product.id}
                className="border rounded-3xl overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5">

                  <h3 className="text-2xl font-black">
                    {product.title}
                  </h3>

                  <p className="text-green-600 text-2xl font-black mt-3">
                    R$ {product.price}
                  </p>

                  <p className="text-zinc-500 mt-2">
                    Estoque: {product.stock}
                  </p>

                </div>
              </div>
            ))}

          </div>

        </section>

      </div>

    </main>
  )
}