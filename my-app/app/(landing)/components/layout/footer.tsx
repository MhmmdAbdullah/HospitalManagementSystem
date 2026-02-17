import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { RiMailFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="">
      <div className="flex justify-between border-t-8 border-[#9E9E9E] max-w-[1200px] p-8 mx-auto">
        <div>
          <Image
            src="/images/LogoWName.svg"
            alt="Logo"
            width={220}
            height={50}
            className="relative right-10"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-lg">Quick Links</h1>
          <div>
            <h2>Home</h2>
            <h2>Appointment</h2>
            <h2>Service</h2>
            <h2>About Us</h2>
            <h2>Contact Us</h2>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-lg">Hours</h1>
          <div>
            <div className="flex justify-between gap-8">
              <h2>Monday:</h2>
              <h2>9:00 - 18:00</h2>
            </div>
            <div className="flex justify-between gap-8">
              <h2>Tuesday:</h2>
              <h2>9:00 - 18:00</h2>
            </div>
            <div className="flex justify-between gap-8">
              <h2>Wednesday:</h2>
              <h2>9:00 - 18:00</h2>
            </div>
            <div className="flex justify-between gap-8">
              <h2>Thursday:</h2>
              <h2>9:00 - 18:00</h2>
            </div>
            <div className="flex justify-between gap-8">
              <h2>Friday:</h2>
              <h2>9:00 - 18:00</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-lg">Contact</h1>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <h2><MdCall size={24}/></h2>
              <h2>000-000-000</h2>
            </div>
            <div className="flex gap-2">
              <h2><RiMailFill size={24}/></h2>
              <h2>info@email.com</h2>
            </div>
            <div className="flex gap-2">
              <h2><FaLocationArrow size={24}/></h2>
              <h2>Kalutara South</h2>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
