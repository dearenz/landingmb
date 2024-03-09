import { Button } from "@/components/ui/button";
import React, { FC } from "react";

interface BenefitProps {}

const dataBenefit = [
  [
    "Brand Awarness Anda menjadi lebih tinggi!",
    "di ngiklanmurah.com, iklan Anda akan secara bertahap dilihat orang dan akan menarik lebih banyak pembeli kepada Anda.",
  ],
  [
    "Jangkauan Luas",
    "Kami hadir dikota-kota besar se-Indonesia mulai dari Jabodetabek, Bandung,Jogjakarta, Surabaya, dan kota-kota besar lainnya",
  ],
  [
    "Ragam pilihan iklan",
    "Bersama kami iklan anda dapat kami pasangkan dimanapun yang dapat anda pikirkan, mulai dari Bilboard, TV, Radio, Digital Marketing, Influencer, semua tersedia di ngiklanmurah.com",
  ],
  [
    "Harga yang sangat Terjangkau",
    "Mulai dari 11.000an udah bisa mulai pasang iklan!",
  ],
];

const Benefit: FC<BenefitProps> = ({}) => {
  return (
    <section className="bg-[#e7f0fd] py-16">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 items-center">
          <h3 className="text-3xl font-bold text-center text-primary">
            Kenapa Beriklan Dengan Ngiklanmurah.com
          </h3>
          <div className="grid grid-cols-2 gap-14">
            {dataBenefit.map((data, index) => (
              <div className="flex flex-col gap-1 text-center" key={index}>
                <h3 className="text-xl font-bold text-primary">{data[0]}</h3>
                <p className="text-secondary text-base">{data[1]}</p>
              </div>
            ))}
          </div>
          <Button className="bg-darkred p-7 rounded-full text-lg">
            Pasang Sekarang
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
