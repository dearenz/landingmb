import React, { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="py-16 bg-blue-200">
      <div className="container">
        <div className="flex justify-between"></div>
      </div>
    </footer>
  );
};

export default Footer;
