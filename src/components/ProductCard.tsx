'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Check } from 'lucide-react'
import { useCartStore } from '../store/cart'

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
  const [added, setAdded] = useState(false)

  const addToCart = useCartStore((state) => state.addToCart)

  function handleAddToCart() {
    addToCart({
      id,
      title,
      image,
      price,
      quantity: 1,
    })

    setAdded(true)

    setTimeout(() => {
      setAdded(false)
    }, 1800)
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-zinc-100"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-80 object-cover hover:scale-110 transition duration-500"
        />

        <div className="absolute top-4 left-4 bg-green-400 text-black px-4 py-2 rounded-full font-black text-sm">
          BEST SELLER
        </div>

        <div className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-full font-black text-sm">
          USA
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-black mb-3">
          {title}
        </h2>

        <div className="flex items-center gap-2 mb-4">
          <span>⭐⭐⭐⭐⭐</span>

          <span className="text-zinc-500 text-sm">
            (2,341 reviews)
          </span>
        </div>

        <div className="mb-6">
          <p className="text-zinc-400 line-through text-lg">
            $ {(price * 1.35).toFixed(2)}
          </p>

          <p className="text-4xl font-black text-green-600">
            $ {price.toFixed(2)}
          </p>
        </div>

        <button
          onClick={handleAddToCart}
          className={`w-full py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition ${
            added
              ? 'bg-green-400 text-black'
              : 'bg-black text-white hover:bg-zinc-800'
          }`}
        >
          {added ? (
            <>
              <Check size={22} />
              Added to cart
            </>
          ) : (
            <>
              <ShoppingCart size={22} />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </motion.div>
  )
}