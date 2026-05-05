'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">

      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />

      <img
        src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2070"
        alt="Hero Banner"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-4xl px-6"
      >

        <p className="uppercase tracking-[8px] text-green-400 mb-6">
          Tecnologia Premium
        </p>

        <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">
          O Futuro
          <br />
          Está Aqui
        </h1>

        <p className="text-zinc-300 text-xl md:text-2xl mb-10">
          Produtos virais e premium para transformar sua rotina.
        </p>

        <div className="flex flex-col md:flex-row gap-5 justify-center">

          <button className="bg-green-400 text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition">
            Comprar Agora
          </button>

          <button className="border border-white/30 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-black transition">
            Ver Produtos
          </button>

        </div>

      </motion.div>

    </section>
  )
}