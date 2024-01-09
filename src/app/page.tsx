import { Footer } from '../components/footer/Footer';
import { Testimonial } from '@/components/testimonial/Testimonial';
import Endorsed from '@/components/endorsed/Endorsed';
import ProductLine from '@/components/productLine/productLine';
import Achievements from '@/components/achievements/Achievements';
import About from '@/components/about/About';
import { Header } from '@/components/header/Header';
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center text-2xl'>
      <div className='bg-primary_background'>
        <Header />
      </div>
      <About />
      <Achievements />
      <ProductLine />
      <Endorsed />
      <Testimonial />
      <Footer />
    </main>
  );
}
