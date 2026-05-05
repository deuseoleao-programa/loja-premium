'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, X } from 'lucide-react'

const products = [
  { id: '1', title: 'Smartwatch Ultra' },
  { id: '2', title: 'Headphone Premium' },
  { id: '3', title: 'Mini Projetor 4K' },
]

export default function SearchBar() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  const results = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open search"
        title="Search"
        className="text-white hover:text-green-400 transition"
      >
        <Search size={24} />
      </button>

      {open && (
        <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-xl flex items-start justify-center px-6 pt-32">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-6">
            <div className="flex items-center gap-4 mb-6">
              <Search className="text-zinc-500" />

              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 text-xl outline-none"
              />

              <button
                onClick={() => setOpen(false)}
                aria-label="Close search"
                title="Close search"
              >
                <X />
              </button>
            </div>

            <div className="space-y-3">
              {query.length === 0 ? (
                <p className="text-zinc-500">
                  Type to search products.
                </p>
              ) : results.length > 0 ? (
                results.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    onClick={() => setOpen(false)}
                    className="block bg-zinc-100 hover:bg-green-100 rounded-2xl p-5 font-black transition"
                  >
                    {product.title}
                  </Link>
                ))
              ) : (
                <p className="text-zinc-500">
                  No products found.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}