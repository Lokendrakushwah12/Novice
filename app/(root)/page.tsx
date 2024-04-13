import Image from "next/image";
import { Button } from "../../components/ui/button";


export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper flex flex-col gap-5 md:grid-rows-2 2xl:gap-0">
          <div className="flex flex-col items-center justify-center gap-8">
            <p className="text-lg border rounded-full bg-white px-2 text-glow">The best place to learn and grow</p>
            <Image
              src="./assets/images/LogoWhite.svg"
              width={128}
              height={24}
              alt="Novice logo"
              className='cursor-pointer'
            />
            <h1 className="text-4xl text-center font-[600] text-[#313131]">Empowering Novices to Navigate <br /> Their Coding Journey with Confidence</h1>
          </div>
        </div>
      </section>
      <Button variant="default" className="bg-[#121212] hover:bg-[#212121]">click me Satoshi </Button>
    </>
  );
}
