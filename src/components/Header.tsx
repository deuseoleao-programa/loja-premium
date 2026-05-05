import Link from 'next/link'
import CartButton from './CartButton'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black text-white">
          VETRIX<span className="text-green-400">STORE</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-white font-bold">
          <Link href="/" className="hover:text-green-400 transition">
            Home
          </Link>

          <Link href="/#products" className="hover:text-green-400 transition">
            Produtos
          </Link>

          <Link href="/admin" className="hover:text-green-400 transition">
            Admin
          </Link>
        </nav>

        <CartButton />
      </div>
    </header>
  )
}