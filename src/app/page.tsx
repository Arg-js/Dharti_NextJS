import { Button } from '@/components/ui/button';
import { Footer } from '../components/footer/Footer';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center text-2xl'>
      Happy Coding 🙌
      <Button>Button</Button>
      <Footer />
    </main>
  );
}
