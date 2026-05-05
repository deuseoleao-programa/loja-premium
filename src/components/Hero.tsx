'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />

      <img
        src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2070"
        alt="Premium technology"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-4xl px-6"
      >
        <p className="uppercase tracking-[8px] text-green-400 mb-6">
          Premium Tech Store
        </p>

        <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">
          The Future
          <br />
          Is Here
        </h1>

        <p className="text-zinc-300 text-xl md:text-2xl mb-10">
          Viral and premium products delivered fast.
        </p>

        <div className="flex flex-col md:flex-row gap-5 justify-center">
          <Link
            href="/#products"
            className="bg-green-400 text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition"
          >
            Shop Now
          </Link>

          <Link
            href="/#products"
            className="border border-white/30 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-black transition"
          >
            View Products
          </Link>
        </div>
      </motion.div>
    </section>
  )
}