import React, { FC } from "react";

interface CounterProps {}

const Counter: FC<CounterProps> = ({}) => {
  return (
    <section className="bg-[#e7f0fd] py-16">
      <div className="container mx-auto flex flex-col gap-10 items-center">
        <div className="flex gap-4 text-center space-x-40">
          <div className="flex flex-col gap-3 text-center">
            <h1 className="font-bold text-primary text-7xl">249</h1>
            <p className="text-secondary text-2xl">Partnership</p>
          </div>
          <div className="flex flex-col gap-3 text-center">
            <h1 className="font-bold text-primary text-7xl">184</h1>
            <p className="text-secondary text-2xl">Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
