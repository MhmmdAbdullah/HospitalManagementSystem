import Image from "next/image";

const Doctors = () => {
    const listDoctors = [
        {
            img: "/images/doctorprindapan.svg",
            name: "Krishna Maharaja",
            idDoctor: "MMA.39237.2228"
        },
        {
            img: "/images/doctorprindapan.svg",
            name: "Krishna Maharaja",
            idDoctor: "MMA.39237.2228"
        },
        {
            img: "/images/doctorprindapan.svg",
            name: "Krishna Maharaja",
            idDoctor: "MMA.39237.2228"
        },
        {
            img: "/images/doctorprindapan.svg",
            name: "Krishna Maharaja",
            idDoctor: "MMA.39237.2228"
        },
        {
            img: "/images/doctorprindapan.svg",
            name: "Krishna Maharaja",
            idDoctor: "MMA.39237.2228"
        },
        {
            img: "/images/doctorprindapan.svg",
            name: "Krishna Maharaja",
            idDoctor: "MMA.39237.2228"
        },
        {
            img: "/images/doctorprindapan.svg",
            name: "Krishna Maharaja",
            idDoctor: "MMA.39237.2228"
        },
        {
            img: "/images/doctorprindapan.svg",
            name: "Krishna Maharaja",
            idDoctor: "MMA.39237.2228"
        },
        {
            img: "/images/doctorprindapan.svg",
            name: "Krishna Maharaja",
            idDoctor: "MMA.39237.2228"
        },
        {
            img: "/images/doctorprindapan.svg",
            name: "Krishna Maharaja",
            idDoctor: "MMA.39237.2228"
        },
        {
            img: "/images/doctorprindapan.svg",
            name: "Krishna Maharaja",
            idDoctor: "MMA.39237.2228"
        },
        {
            img: "/images/doctorprindapan.svg",
            name: "Krishna Maharaja",
            idDoctor: "MMA.39237.2228"
        },
    ]

  return (
    <div className="p-4">
      <div className="flex flex-col gap-8 justify-center items-center mx-auto py-4">
        <div className="text-3xl font-bold">
          <h1>Our Doctors</h1>
        </div>
        <div className="grid grid-cols-4 gap-8 mt-4">
            {
                listDoctors.map((doctor, index) => (
                    <div key={index} className="flex gap-2">
                        <Image src={doctor.img} alt={doctor.name} width={100} height={100} className="rounded-full" />
                        <div className="flex flex-col gap-2 ">
                            <p className="font-bold text-xs">{doctor.name}</p>
                            <p className="font-medium text-[10px]">{doctor.idDoctor}</p>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default Doctors;
