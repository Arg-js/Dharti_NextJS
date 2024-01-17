import { Footer } from '../components/footer/Footer';
import { Testimonial } from '@/components/testimonial/Testimonial';
import Endorsed from '@/components/endorsed/Endorsed';
import ProductLine from '@/components/productLine/productLine';
import Achievements from '@/components/achievements/Achievements';
import About from '@/components/about/About';
import { Header } from '@/components/header/Header';
// todo: make home page different component
export default function Home() {
  return (
    // ask
    // <main className='flex min-h-screen flex-col items-center justify-center text-2xl'>
    <main>
      <Header />
      {/* note: (206(64+142 ie. height of card/2)) */}
      {/* note: my-20 (80 + 206(64+142)) = 286 ~= 288 === 72*4 */}
      <div className='md:mb-28 xl:mt-72'>
        <About />
      </div>
      <Achievements />
      <ProductLine />
      <Endorsed />
      <Testimonial />
    </main>
  );
}
