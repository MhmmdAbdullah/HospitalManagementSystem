"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../ui/button";

const Header = () => {
  const [active, setActive] = useState<number | null>(null);
  const navName = [
    {
      name: "Home",
    },
    {
      name: "Appointment",
    },
    {
      name: "Services",
    },
    {
      name: "About Us",
    },
    {
      name: "Contact Us",
    },
  ];
  return (
    <header className="">
      <div className=" flex justify-between items-center px-8 mx-auto">
        <div>
          <Image
            src="/images/LogoWName.svg"
            alt="Logo"
            width={280}
            height={50}
            className="relative top-8 right-10"
          />
        </div>
        <nav className="flex gap-4 -ml-14 mr-8 font-bold">
          {navName.map((nav, index) => (
            <Link
              key={index}
              href="#"
              onClick={() => setActive(index)}
              className={`py-1 px-2  rounded-md ${active == index ? "bg-linear-to-r from-[#C5DCFF] to-[#C5DCFF]/50" : ""}`}
            >
              {nav.name}
            </Link>
          ))}
        </nav>
        <div className="flex gap-2 font-bold">
          <Button variant="gray">Sign In</Button>
          <Button >Register</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
