export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="bg-white text-black rounded-3xl shadow-2xl p-12 max-w-xl text-center">
        <h1 className="text-5xl font-black mb-6">
          Pagamento aprovado!
        </h1>

        <p className="text-xl text-zinc-600 mb-8">
          Obrigado pela sua compra. Seu pedido foi recebido com sucesso.
        </p>

        <a href="/">
          <button className="bg-green-400 text-black px-10 py-5 rounded-2xl font-black text-xl">
            Voltar para loja
          </button>
        </a>
      </div>
    </main>
  )
}