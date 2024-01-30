import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { getFaq } from './faq-service-api';
import HeroSection from '@/components/hero/HeroSection';
import { heroSectionTractorBg } from '@/assets/svg';

const FAQ = async () => {
  const faqs = await getFaq();
  return (
    <>
      <HeroSection title='FAQ' image={heroSectionTractorBg} />
      <main className='my-20 flex min-h-[30vh] flex-col items-center lg:mx-10 xl:mx-96'>
        <Accordion type='single' collapsible className='container'>
          {faqs?.map(({ id, question, answer }) => {
            return (
              <AccordionItem value={id.toString()} key={id}>
                <AccordionTrigger className='text-lg font-bold'>
                  {question}
                </AccordionTrigger>
                <AccordionContent className='normal16 text-gray_500'>
                  {answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </main>
    </>
  );
};

export default FAQ;
