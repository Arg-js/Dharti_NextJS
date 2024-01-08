import { Button } from '@/components/ui/button';
import { Footer } from '../components/footer/Footer';
import { Testimonial } from '../components/testimonial/Testimonial';
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center text-2xl'>
      <Testimonial />
      <Footer />
    </main>
  );
}
