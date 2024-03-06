import Link from "next/link";
import React, { FC } from "react";

interface ServicesProps {}

const Services: FC<ServicesProps> = ({}) => {
  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col gap-10 items-center">
        <div className="flex flex-col gap-4 text-center">
          <h3 className="font-bold text-primary text-2xl">Pilihan Iklan</h3>
          <div className="flex flex-wrap justify-center">
            {[1, 2, 3, 4, 5].map((data, index) => (
              <div className="pb-0 lg:w-[33.333333%] px-4 mt-10" key={index}>
                <div className="flex flex-col gap-3 text-center">
                  <div className="rouded-full mx-auto">
                    <img
                      src="https://static.pasangiklan.com/pi_c/images/illustrations/iklan-digital.png"
                      alt="icon"
                    />
                  </div>

                  <h3 className="font-bold text-lg">Iklan Digital</h3>
                  <p className="text-secondary">
                    Iklan dalam bentuk digital banner yang tayang pada website
                    group kompas Gramedia
                  </p>
                  <Link href="/iklan-digital" className="text-blue-500">
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
