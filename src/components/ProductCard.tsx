'use client'

import { motion } from 'framer-motion'
import { useCartStore } from '../store/cart'
import { useRouter } from 'next/navigation'

interface ProductProps {
  id: string
  title: string
  image: string
  price: number
}

export default function ProductCard({
  id,
  title,
  image,
  price,
}: ProductProps) {

  const router = useRouter()

  const addToCart = useCartStore(
    (state) => state.addToCart
  )

  function handleAddToCart() {

    addToCart({
      id,
      title,
      image,
      price,
      quantity: 1,
    })

    router.push('/cart')
  }

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl overflow-hidden shadow-2xl"
    >

      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={title}
          className="w-full h-80 object-cover hover:scale-110 transition duration-500"
        />

        <div className="absolute top-4 left-4 bg-green-400 text-black px-4 py-2 rounded-full font-bold text-sm">
          MAIS VENDIDO
        </div>

      </div>

      <div className="p-6">

        <h2 className="text-2xl font-bold mb-3">
          {title}
        </h2>

        <div className="flex items-center gap-2 mb-4">
          ⭐⭐⭐⭐⭐

          <span className="text-zinc-500 text-sm">
            (2.341 avaliações)
          </span>
        </div>

        <p className="text-4xl font-black text-green-600 mb-6">
          R$ {price}
        </p>

        <button
          onClick={handleAddToCart}
          className="w-full bg-black text-white py-4 rounded-2xl font-bold hover:bg-zinc-800 transition"
        >
          Comprar Agora
        </button>

      </div>

    </motion.div>
  )
}