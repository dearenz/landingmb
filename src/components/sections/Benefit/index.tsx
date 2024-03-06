import { Button } from "@/components/ui/button";
import React, { FC } from "react";

interface BenefitProps {}

const Benefit: FC<BenefitProps> = ({}) => {
  return (
    <section className="bg-[#e7f0fd] py-16">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 items-center">
          <h3 className="text-3xl font-bold text-center text-primary">
            Kenapa Beriklan Melalui Pasangiklan.com?
          </h3>
          <div className="grid grid-cols-2 gap-14">
            {[1, 2, 3, 4].map((data, index) => (
              <div className="flex flex-col gap-1 text-center" key={index}>
                <h3 className="text-xl font-bold text-primary">
                  Meningkatkan Brand Awareness Usaha Anda
                </h3>
                <p className="text-secondary text-base">
                  Dengan Memasang iklan di Pasangiklan.com, usaha Anda secara
                  bertahap akan dilihat dan mendatangkan pengunjung baru.
                </p>
              </div>
            ))}
          </div>
          <Button className="bg-blue-500 p-7 rounded-full text-lg">
            Pasang Sekarang
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
