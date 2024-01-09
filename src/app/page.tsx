import { Footer } from '../components/footer/Footer';
import { Testimonial } from '@/components/testimonial/Testimonial';
import Endorsed from '@/components/endorsed/Endorsed';
import ProductLine from '@/components/productLine/productLine';
import Achievements from '@/components/achievements/Achievements';
import About from '@/components/about/About';
import { Header } from '@/components/header/Header';
import { Navbar } from '@/components/navbar/Navbar';
export default function Home() {
  return (
    // <main className='flex min-h-screen flex-col items-center justify-center text-2xl'>
    <main>
      <Header />
      {/* todo: (206(64+142 ie. height of card/2)) */}
      {/* todo: my-20 (80 + 206(64+142)) = 286 === 288 === 72*/}
      <div className='md:mb-28 md:mt-72'>
        <About />
      </div>
      <Achievements />
      <ProductLine />
      <Endorsed />
      <Testimonial />
    </main>
  );
}
