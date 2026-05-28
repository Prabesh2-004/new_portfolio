import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="text-white font-mono w-full flex gap-10 justify-between items-center px-20 md:px-20 lg:px-30">
      <div className="flex-1 flex flex-col gap-5 pb-32 lg:pb-48 relative">
        <h3 className="text-lg md:text-2xl font-bold">
          Hi, I am a{" "}
          <span className="text-[#c778df]">Full Stack Web Developer</span> and{" "}
          <span className="text-[#c778df]">BlockChain Developer</span>
        </h3>
        <p className="text-sm md:text-base">
          Built responsive and secure full-stack web applications using Next.js
          and TypeScript, focusing on performance and clean architecture.
          Currently learning Ethereum-based blockchain development to build
          decentralized applications (dApps) and expand into Web3 ecosystems.
        </p>
        <Button
          variant={"outline"}
          size={"lg"}
          className="cursor-pointer px-8 py-5 w-fit border-[#c778df] hover:bg-[#c778df]"
        >
          Contact Me!!
        </Button>
        <div className="border relative w-fit mt-6 ml-0 lg:absolute lg:bottom-0 lg:right-0 border-[#c778df] px-5 py-4">
          <span className="absolute -top-4 left-0 bg-black text-3xl">“</span>
          With Great knowledge comes great electricity bills
          <span className="absolute -bottom-6 right-0 bg-black text-3xl">”</span>
        </div>
      </div>
      <div className="hidden relative lg:block shrink-0">
        <hr className="absolute bottom-0 w-full border-[#c778df]" />
        <img
          src="frieren.jpg"
          alt="hero Image"
          className="h-[500px] xl:h-[702px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;