import Link from "next/link";
import React, { FC } from "react";

interface ServicesProps {}

const dataIklan = [
  [
    "1.OOH.png",
    "Iklan OOH",
    "Iklan OOH adalah media luar ruangan yang menargetkan orang di luar rumah",
  ],
  [
    "2.SMS.png",
    "Iklan SMS",
    "Metode pemasaran dengan caran mengirimkan pesan singkat melalui SMS",
  ],
  ["3.TV.png", "Iklan TV", "Iklan anda akan ditampilkan TV nasional"],
  [
    "4.INFLUENCER.png",
    "Iklan Influencer",
    "Influencer bekerja sama untuk mempromosikan produk anda melalui platform media sosial",
  ],
  [
    "5.DIGITAL MARKETING.png",
    "Iklan Digital Marketing",
    "Mempromosikan barang atau jasa anda menggunakan media digital atau internet untuk menjangkau lebih banyak pelanggan atau calon pelanggan dengan cepat.",
  ],
];

const Services: FC<ServicesProps> = ({}) => {
  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col gap-10 items-center">
        <div className="flex flex-col gap-4 text-center">
          <h3 className="font-bold text-primary text-2xl">Pilihan Iklan</h3>
          <div className="flex flex-wrap justify-center">
            {dataIklan.map((data, index) => (
              <div className="pb-0 lg:w-[33.333333%] px-4 mt-10" key={index}>
                <div className="flex flex-col gap-3 text-center">
                  <div className="rouded-full mx-auto">
                    <img src={`/Pilihan Iklan/${data[0]}`} alt={data[0]} />
                  </div>

                  <h3 className="font-bold text-lg">{data[1]}</h3>
                  <p className="text-secondary">{data[2]}</p>
                  <Link href="/iklan-digital" className="text-darkred">
                    Pasang Sekarang
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
