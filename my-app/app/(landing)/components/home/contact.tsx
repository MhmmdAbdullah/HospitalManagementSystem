import Button from "../ui/button";

const Contact = () => {
  return (
    <div className="p-4 my-30">
      <div className="flex flex-col justify-center items-center mx-auto gap-4">
        <div className="text-3xl font-bold">
          <h1>Send us a message</h1>
        </div>
        <div className="flex gap-6 mt-2">
          <input
            type="text"
            id="firstName"
            className="border-6 rounded-lg border-[#9E9E9E] px-3.5 py-1.5 w-80"
            placeholder="First Name"
          />
          <input
            type="text"
            id="lastName"
            className="border-6 rounded-lg border-[#9E9E9E] px-4 py-1.5 w-80"
            placeholder="Last Name"
          />
        </div>
        <div className="flex gap-6">
          <input
            type="number"
            id="mobileNumber"
            className="border-6 rounded-lg border-[#9E9E9E] px-3.5 py-1.5 w-80"
            placeholder="Mobile Number"
          />
          <input
            type="text"
            id="email"
            className="border-6 rounded-lg border-[#9E9E9E] px-4 py-1.5 w-80"
            placeholder="Email"
          />
        </div>
        <div className="">
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            className="border-6 rounded-lg border-[#9E9E9E] px-4 py-1.5 w-166 h-30"
          />
        </div>
        <Button size="big" className="font-semibold rounded-lg!">Send</Button>
      </div>
    </div>
  );
};

export default Contact;
