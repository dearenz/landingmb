import { Button } from "@/components/ui/button";
import React, { FC } from "react";

interface BermitraProps {}

const Bermitra: FC<BermitraProps> = ({}) => {
  return (
    <section className="bg-blue-500 py-16">
      <div className="container">
        <div className="flex flex-col gap-10 items-center">
          <div className="font-bold text-4xl text-white text-center">
            Ayo bergabung dengan program Reseller Pasangiklan.com dan dapatkan
            komisi di setiap transaksi dari pesanan yang Anda buat!
          </div>
          <div>
            <Button className="bg-orange-500 p-7 rounded-full text-lg font-bold">
              Bermitra Sekarang
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bermitra;
