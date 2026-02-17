import Image from "next/image";
import Button from "../ui/button";

const Hero = () => {
  return (
    <div className="flex p-8 mt-20 justify-center">
      <div className="flex flex-col w-160 gap-8">
        <h1 className="font-bold text-7xl  leading-25">
          We help people to get appointment in online
        </h1>
        <p>Lorem shfijsdfgbijuerbgoujerbfgnolngiorgnioergneorngeiorgnerio
            hdhdhdhdhdhdhdhdhdhdhdhswihfieuwbfgiubviuebfgiegfieweffefefe
            efneijfnbeifbiewbfiuewbfiuebfiubefiuwbefiubefiubewuifbeuife
            eifheiufhiuwefhiuwefhiuewhfiuwehfiuewhfiuehfiuehfiuehfiuewh
            fndiufbheiubfiuerbfiuebfiuebfuiebfuiebfiuebfiuebfiubf
        </p>
        <Button size="small" className="w-fit">
          Tour
        </Button>
      </div>
      <div className="w-140 relative">
        <Image
          src="/images/Person.svg"
          alt="Person"
          width={800}
          height={1200}
          className="relative left-4 -top-12"
        />

        <Image
          src="/images/BgPerson.svg"
          alt="Bgperson"
          width={620}
          height={1000}
          className="absolute max-w-none  -top-55 -left-7 -z-50"
        />
      </div>
    </div>
  );
};

export default Hero;
