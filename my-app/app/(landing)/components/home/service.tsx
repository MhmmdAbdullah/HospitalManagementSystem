"use client";
import Image from "next/image";
import { useState } from "react";

const Service = () => {
  const listService = [
    {
      img: "/images/Doctor.svg",
      name: "NEUROSCIENCES",
    },
    {
      img: "/images/Doctor.svg",
      name: "NEUROSCIENCES",
    },
    {
      img: "/images/Doctor.svg",
      name: "NEUROSCIENCES",
    },
  ];

  const [buttonActive, setButtonActive] = useState<number | null>(null);

  return (
    <div className="p-4 bg-linear-to-b from-white to-purple-100 pb-16">
      <div className="flex flex-col gap-8 justify-center items-center mx-auto">
        <div className="text-3xl font-bold">
          <h1>Our Services</h1>
        </div>
        <div className="grid grid-cols-3 gap-12 z-10">
          {listService.map((service, index) => (
            <div
              key={index}
              className="gap-4 flex flex-col bg-white rounded-4xl items-center shadow-xl pb-4"
            >
              <Image
                src={service.img}
                alt={service.name}
                width={300}
                height={250}
              />
              <h1 className="text-xl font-bold">{service.name}</h1>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 h-16">
          {[1, 2, 3].map((i) => (
            <button
              key={i}
              onClick={() => setButtonActive(i)}
              className={`transition-all duration-300 rounded-full flex items-center justify-center ${
                buttonActive === i
                  ? "w-16 h-16 bg-white shadow-lg"
                  : "w-10 h-10 bg-[#9B77FE]"
              }`}
            >
              {buttonActive === i && (
                <div className="w-4 h-4 rounded-full bg-[#9B77FE] animate-in zoom-in duration-300" />
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="relative">
        <Image
          className="absolute -top-170 -left-4 "
          src="/images/bgservice.svg"
          alt="bg"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Service;
