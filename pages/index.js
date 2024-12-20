import { Button, Card, Input, Tooltip } from '@nextui-org/react';
import Image from 'next/image';
import { FaCheckCircle, FaQuestionCircle } from 'react-icons/fa';
import { AiTwotoneQuestionCircle } from 'react-icons/ai';
import { useState } from 'react';
import BasicLayout from '@/components/layouts/BasicLayout';

export default function Home() {
  const packages = [
    {
      name: 'SMALL',
      original_price: '50.000',
      price: '30.000',
      services: [
        {
          name: 'Layanan awal',
          list: [
            {
              name: 'Free domain',
              q: 'Gratis domain 1 tahun',
            },
            {
              name: 'Free one time setup',
              q: '',
            },
            {
              name: 'Modern website',
              q: 'Beri kami contoh website yang anda inginkan dan akan kami buatkan',
            },
            {
              name: '5 pages',
              q: '',
            },
            {
              name: 'Google Index',
              q: 'Kami bantu website kamu ke index mesin pencarian google',
            },
            {
              name: 'SEO',
              q: 'Kami bantu riset dan rekomendasi meta title, meta description dan keyword sesuai website kamu',
            },
            {
              name: '1-2 hari pengerjaan',
              q: 'Pengerjaan tergantung tingkat kesulitan design website',
            },
            {
              name: '1 Email',
              q: 'Free 1 email dengan @ nama domain kamu',
            },
          ],
        },
        {
          name: 'Maintence',
          list: [
            {
              name: 'Free 1 update/edit page',
              q: 'Layanan free edit halaman perbulan',
            },
            {
              name: 'Tambahan update/edit page Rp. 25.000',
              q: 'Layanan edit per page (diluar layanan free edit)',
            },
            {
              name: 'Buat halaman baru Rp 40.000',
              q: 'Harga layanan design perhalaman baru',
            },
          ],
        },
        {
          name: 'Features',
          list: [
            {
              name: 'SSL Security',
              q: 'Gratis layanan SSL',
            },
            {
              name: 'Unlimited pages',
              q: 'Jumlah total halaman website',
            },
          ],
        },
      ],
    },
    {
      name: 'BIG',
      original_price: '300.000',
      price: '220.000',
      services: [
        {
          name: 'Layanan awal',
          list: [
            {
              name: 'Free domain',
              q: 'Gratis domain 1 tahun',
            },
            {
              name: 'Free one time setup',
              q: '',
            },
            {
              name: 'Modern website',
              q: 'Beri kami contoh website yang anda inginkan dan akan kami buatkan',
            },
            {
              name: 'Website dinamis',
              q: 'Website dinamis dengan mengikuti perubahan data',
            },
            {
              name: 'Modern teknologi (Laravel, NodeJS)',
              q: 'Kami sediakan webiste dengan teknologi terbaru untuk segala kebutuhan',
            },
            {
              name: '20 pages',
              q: '',
            },
            {
              name: 'Google Index',
              q: 'Kami bantu website kamu ke index mesin pencarian google',
            },
            {
              name: 'SEO',
              q: 'Kami bantu riset dan rekomendasi meta title, meta description dan keyword sesuai website kamu',
            },
            {
              name: '5-14 hari pengerjaan',
              q: 'Pengerjaan tergantung tingkat kesulitan design website',
            },
            {
              name: 'Unlimited Email',
              q: 'Unlimited email dengan @ nama domain kamu',
            },
          ],
        },
        {
          name: 'Maintence',
          list: [
            {
              name: 'Free 1 update/edit page',
              q: 'Layanan free edit halaman perbulan',
            },
            {
              name: 'Tambahan update/edit page Rp. 50.000',
              q: 'Layanan edit per page (diluar layanan free edit)',
            },
            {
              name: 'Buat halaman baru Rp 100.000',
              q: 'Harga layanan design perhalaman baru',
            },
          ],
        },
        {
          name: 'Features',
          list: [
            {
              name: 'SSL Security',
              q: 'Gratis layanan SSL',
            },
            {
              name: 'Unlimited pages',
              q: 'Jumlah total halaman website',
            },
          ],
        },
      ],
    },
  ];

  const [isDetail, setIsDetail] = useState(false);
  return (
    <BasicLayout>
      <section className="w-screen h-screen bg-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-12">
            <div className="h-screen flex flex-col justify-center gap-4">
              <div className="h-16 relative ">
                <Image src={'logo-name.svg'} fill className=" " />
              </div>
              <p className="text-4xl font-semibold">
                Kami Buatkan <br />
                <span className="text-primary">Website Profesional Termurah</span>
                <br /> untuk bisnis anda
              </p>
              <p className="text-xl">Dapatkan kemudahan membuat website yang kamu inginkan. Website langsung siap pakai</p>
              <div className="flex gap-4 items-center bg-tertiary p-10 rounded-lg">
                <Input size="lg" variant="faded" color="df" placeholder="Nama Domain Kamu" className="grow" />
                <Button color="primary" className="grow-0" size="lg">
                  CARI DOMAIN
                </Button>
              </div>
            </div>
            <div>
              <div className="h-full relative">
                <Image src={'/board.svg'} fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen bg-tertiary text-white">
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-4 gap-4">
            {packages.map((pckg, index) => (
              <Card className="px-4 py-8 flex flex-col justify-between" key={index}>
                <div>
                  <p className="text-xl text-center font-semibold text-primary">{pckg.name}</p>
                  <p className="line-through text-center">Rp {pckg.original_price} </p>
                  <p className="text-primary text-center text-2xl font-semibold">
                    Rp. {pckg.price} <span className="text-xs text-black">/bln</span>
                  </p>
                  <div className="mt-4 space-y-4">
                    {pckg.services
                      .filter((_, srv_idx) => (!isDetail ? srv_idx == 0 : srv_idx >= 0))
                      .map((srvc, srvc_idx) => (
                        <div key={srvc_idx}>
                          <p className="text-xl text-gray-600">{srvc.name}</p>
                          <ul className="space-y-1 mt-2">
                            {srvc.list.map((list, list_idx) => (
                              <li className="flex justify-between items-center" key={list_idx}>
                                <div className="flex items-center gap-2">
                                  <FaCheckCircle className="text-xl text-green-500 " />
                                  <p className="">{list.name}</p>
                                </div>
                                <div>
                                  {list.q && (
                                    <Tooltip content={list.q} color="primary" className="max-w-[200px]">
                                      <button>
                                        <FaQuestionCircle />
                                      </button>
                                    </Tooltip>
                                  )}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                  </div>
                </div>
                <Button
                  className="mt-8"
                  onClick={() => {
                    setIsDetail(!isDetail);
                  }}
                >
                  {!isDetail ? 'Fitur lebih lengkap' : 'Ringkasan Fitur'}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </BasicLayout>
  );
}
