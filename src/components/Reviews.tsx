export default function Reviews() {
  return (
    <section className="bg-gray-100 py-20 px-10">
      <h2 className="text-4xl font-bold text-center mb-10">
        Avaliações
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          <p>⭐⭐⭐⭐⭐</p>

          <p className="mt-4">
            Produto excelente. Qualidade incrível.
          </p>

          <strong className="block mt-4">
            Carlos
          </strong>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p>⭐⭐⭐⭐⭐</p>

          <p className="mt-4">
            Entrega rápida e ótimo atendimento.
          </p>

          <strong className="block mt-4">
            Fernanda
          </strong>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p>⭐⭐⭐⭐⭐</p>

          <p className="mt-4">
            Melhor compra que já fiz online.
          </p>

          <strong className="block mt-4">
            Lucas
          </strong>
        </div>

      </div>
    </section>
  )
}