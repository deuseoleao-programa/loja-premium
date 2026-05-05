'use client'

import { ShoppingCart, Search } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <h1 className="text-3xl font-black text-white tracking-wide">
          VELTRIX
        </h1>

        <nav className="hidden md:flex gap-10 text-white font-medium">
          <a href="#">Home</a>
          <a href="#">Produtos</a>
          <a href="#">Ofertas</a>
          <a href="#">Contato</a>
        </nav>

        <div className="flex items-center gap-5 text-white">
          <Search className="cursor-pointer" />
          <ShoppingCart className="cursor-pointer" />
        </div>
      </div>
    </header>
  )
}