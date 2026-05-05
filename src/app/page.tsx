import Header from '../components/Header'
import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <ProductGrid />
      <Reviews />
      <Footer />
    </main>
  )
}