import ProductCard from './ProductCard'

const products = [
  {
    id: '1',
    title: 'Smartwatch Ultra',
    image:
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964',
    price: 97, // preço em dólar (melhor pra EUA)
  },
  {
    id: '2',
    title: 'Headphone Premium',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070',
    price: 79,
  },
  {
    id: '3',
    title: 'Mini Projetor 4K',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070',
    price: 149,
  },
]

export default function ProductGrid() {
  return (
    <section
      id="products"
      className="bg-gradient-to-b from-white to-zinc-100 py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-green-500 font-bold uppercase tracking-[5px] mb-4">
            Produtos Premium
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-black">
            Best Sellers
          </h2>

          <p className="text-zinc-500 mt-4 text-lg">
            Produtos virais que estão bombando nos EUA 🇺🇸
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>

      </div>
    </section>
  )
}