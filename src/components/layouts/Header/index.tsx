import Image from "next/image";
import React, { FC } from "react";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="bg-blue-700 sticky top-0 z-10">
      <div className="container mx-auto">
        <nav className="flex flex-wrap justify-between items-center py-[1.5rem]">
          <Image src={"/logo.png"} width={200} height={40} alt="logo" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
