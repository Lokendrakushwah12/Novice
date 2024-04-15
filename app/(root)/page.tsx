'use client'
import { Button } from "../../components/ui/button";
import Logo from "@/components/ui/Logo";
import { SignedOut } from "@clerk/nextjs";
import Link from 'next/link'
import Image from "next/image";
import React, { useRef, useState } from 'react';
import Card from "@/components/ui/Card";


export default function Home() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (cardRef.current != null) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setCursor({ x: x, y: y })
    }
  }

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper flex flex-col gap-5 md:grid-rows-2 2xl:gap-0">
          <div className="flex flex-col items-center justify-center gap-8">
            <p className="text-base border rounded-full bg-white px-2 text-glow">The best place to learn and grow</p>
            <div
              className="flex flex-col place-items-center stroke-[1] hover:stroke-[1.5]"
              ref={cardRef}
              onMouseMove={(ev) => handleMouseMove(ev)}
            >
              <Logo cursor={cursor} cardRef={cardRef} />
            </div>
            <h1 className="md:text-4xl sm:text-3xl text-xl text-center font-[600] text-[#313131]">Empowering Novices to Navigate <br /> Their Coding Journey with Confidence</h1>
            <SignedOut>
              <Link href="/sign-up">
                <Button className='font-[400] gap-2 w-[140px] text-md flex items-center justify-center cursor-pointer rounded-lg transition-all hover:p-1 p-0'>
                  Get Started
                  <Image
                    src='./assets/icons/arrow-square-right.svg'
                    width={20}
                    height={20}
                    alt='signup'
                  />
                </Button>
              </Link>
            </SignedOut>
            <div className="flex flex-col sm:flex-row gap-8 text-[#282c32d9] font-[500]">
              <h4 className="flex flex-row justify-center items-center">
                <Image
                  src='./assets/icons/stars.svg'
                  width={20}
                  height={20}
                  alt='signup'
                />
                Expert Guidance
              </h4>
              <h4 className="flex flex-row justify-center items-center">
                <Image
                  src='./assets/icons/smileys.svg'
                  width={20}
                  height={20}
                  alt='signup'
                />
                Supportive Community
              </h4>
              <h4 className="flex flex-row justify-center items-center">
                <Image
                  src='./assets/icons/star.svg'
                  width={20}
                  height={20}
                  alt='signup'
                />
                Tailored Resources
              </h4>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-5 bg-[#282c32] text-white p-4 m-4 lg:m-12  xl:m-28 rounded-xl">
        <h1 className="w-[380px] text-3xl text-start">Why Us?</h1>
        <div className="text-[rgba(255,255,255,0.75)] w-full sm:w-[780px]">
          <h3 className="ml-3">At Novice, we're more than just a platform for learning to code.</h3>
          <ul>
            <li>
              <span className="list-number">1.</span> We're your trusted companion on your coding journey, offering expert guidance  supportive community, and a wealth of resources tailored specifically for novices.
            </li>
            <li>
              <span className="list-number">2.</span> Say goodbye to endless searches and confusion. With our streamlined approach, you'll save valuable time and focus on what matters most: mastering coding with confidence.
            </li>
          </ul>
          <h3 className="ml-3">Join us and embark on your path to coding mastery with confidence.</h3>
        </div>
      </div>
      <section className="bg-[#fff] py-5 md:py-10">
        <div className="wrapper flex flex-col gap-2">
          <div className="w-full border-b"></div>
          <p className="font-[500] text-sm">Students' Top Picks</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Card
              imageUrl='/assets/images/FrontendDevelopement.png'
              title='Frontend Development'
              description='Learn the art of creating beautiful and responsive user interfaces with our comprehensive frontend development courses.'
              buttonUrl='/'
            />
            <Card
              imageUrl='./assets/images/codeforces.svg'
              title='Competitive Programming'
              description='Hone your problem-solving skills and prepare for coding competitions with our specialized competitive programming track.'
              buttonUrl='/'
            />
            <Card
              imageUrl='./assets/icons/star.svg'
              title='Data Structures and Algorithms'
              description='Master the fundamentals of data structures and algorithms and enhance your problem-solving abilities with our DSA courses.'
              buttonUrl='/'
            />

          </div>
        </div>
      </section>
      {/* <Button variant="default" className="bg-[#121212] hover:bg-[#282c32]">click me Satoshi </Button> */}
    </>
  );
}
