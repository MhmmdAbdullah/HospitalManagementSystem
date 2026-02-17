import Image from "next/image";
import Button from "../ui/button";

const AboutUs = () => {
  return (
    <div className="flex gap-2 justify-center mt-30">
      <Image
        src="/images/Persons.svg"
        alt="Person"
        width={600}
        height={900}
        className="relative left-4 -top-12"
      />
      <div className="flex flex-col gap-4 w-150">
        <h2 className="text-xl">Biography</h2>
        <h1 className="font-medium text-3xl">Who We Are</h1>
        <p>
          jedfgiruebguieorbgiouebguiobgiueg erbgierbgiuebgiuerbgiuerbgiuerg
          bgierbgiuerbgofnufheuwiffbdbfkbf hfidbfidsbfjkdsbfjkdsbfjkdsbfjkdbf
          jfjdhfjkdhfjodshfidshfidshfisdfhewifiewubfgiuwefgiuwe
          uefhuewfheiowhfoewfheiowhowef
          bfiwbevfyiuewvfeiwyufvewyfvyweifeweebfebfew
          jebfiewbfiuewbfiuwebfiuewbfiuwebfiuwebf
          beuifbieuwbfiuwebfiuwebfiubfeiubwefiubewiuewfewfwefwefwef
          efewfewfewfewfewfewfewfwefwefwef efewfwefwefwfwefwefwefewfew
          efefefefewfewfefefeffewefgnjignbiourgiubfguebgiuegw
        </p>
        <p>It's 2019: time to sink or swim</p>
        <p>We Are your Social Media Marketing, Agency</p>
        <Button
          className="w-fit font-bold shadow-b shadow-2xl shadow-black"
          size="small"
        >
          See More
        </Button>
      </div>
    </div>
  );
};

export default AboutUs;
