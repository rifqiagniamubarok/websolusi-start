import BasicLayout from '@/components/layouts/BasicLayout';
import { Accordion, AccordionItem, Card } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

const Pertanyaan = () => {
  return (
    <BasicLayout>
      <section className="h-screen w-screen bg-secondary pt-20">
        <div className="container mx-auto ">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex justify-center items-center">
              <div>
                <p className="text-4xl font-semibold">Perlu bantuan ?</p>
                <p className="text-xl">Jangan khawatir cari dan temukan pertanyaanmu disini</p>
              </div>
            </div>
            <div className="relative ">
              <Image src={'faq.svg'} width={300} height={300} className="" />
            </div>
          </div>
          <Card className="bg-white p-4">
            <Accordion>
              <AccordionItem key="1" aria-label="Accordion 2" title="Accordion 2">
                Helloo
              </AccordionItem>
              <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                dsfkljsadlkfj
              </AccordionItem>
              <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                dsfkljsadlkfj
              </AccordionItem>
            </Accordion>
          </Card>
        </div>
      </section>
    </BasicLayout>
  );
};

export default Pertanyaan;
