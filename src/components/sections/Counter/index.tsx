import React, { FC } from "react";

interface CounterProps {}

const Counter: FC<CounterProps> = ({}) => {
  return (
    <section className="bg-[#e7f0fd] py-16">
      <div className="container mx-auto flex flex-col gap-10 items-center">
        <div className="flex gap-4 text-center space-x-20 md:space-x-40">
          <div className="flex flex-col gap-3 text-center">
            <span className="font-bold text-primary text-5xl md:text-7xl animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-partnership)] before:content-[counter(num)]">
              {" "}
              <h1 className="sr-only">249</h1>
            </span>
            <p className="text-secondary text-2xl">Partnership</p>
          </div>
          <div className="flex flex-col gap-3 text-center">
            <span className="font-bold text-primary text-5xl md:text-7xl animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-projects)] before:content-[counter(num)]">
              {" "}
              <h1 className="sr-only">184</h1>
            </span>
            <p className="text-secondary text-2xl">Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
