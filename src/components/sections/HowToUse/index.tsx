import React, { FC } from "react";
import Link from "next/link";

interface HowToUseProps {}

const dataHow = [
  ["1. pilih jenis iklan--01.png", "Langkah 1", "Tentukan Jenis Iklan"],
  [
    "2. Persiapkan iklan yang akan diunggah--01.png",
    "Langkah 2",
    "Persiapkan iklan yang akan ditayangkan",
  ],
  ["3. Melakukan pembayaran--01.png", "Langkah 3", "Lakukan pembayaran"],
  [
    "4. Iklan anda telah ditayangkan--01.png",
    "langkah 4",
    "Selamat! Iklan Anda sudah tayang",
  ],
  [
    "5. Amati perkembangan iklannya--01.png",
    "Langkah 5",
    "Pantau perkembangan iklan Anda",
  ],
];

const HowToUse: FC<HowToUseProps> = ({}) => {
  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col gap-10 items-center">
        <div className="flex flex-col gap-4 text-center">
          <h3 className="font-bold text-primary text-2xl">
            Cara Untuk Beriklan
          </h3>
          <div className="flex flex-wrap justify-center">
            {dataHow.map((data, index) => (
              <div className="pb-0 lg:w-[33.333333%] px-4 mt-10" key={index}>
                <div className="flex flex-col gap-3 text-center">
                  <div className="w-full bg-darkred p-4 rounded-xl">
                    <img
                      src={`Cara Beriklan/${data[0]}`}
                      alt="icon"
                      className="mx-auto h-[250px]"
                    />
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

export default HowToUse;
