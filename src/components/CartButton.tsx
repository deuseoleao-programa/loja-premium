'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { useCartStore } from '../store/cart'

export default function CartButton() {
  const totalItems = useCartStore((state) => state.totalItems())

  return (
    <Link
      href="/cart"
      className="relative flex items-center gap-3 bg-black text-white px-5 py-3 rounded-full font-bold hover:scale-105 transition shadow-xl"
    >
      <ShoppingCart size={22} />

      <span className="hidden md:block">
        Carrinho
      </span>

      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-green-400 text-black text-xs font-black w-7 h-7 rounded-full flex items-center justify-center shadow-lg">
          {totalItems}
        </span>
      )}
    </Link>
  )
}