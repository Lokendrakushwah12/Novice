'use client'
import { Button } from "../../components/ui/button";
import Logo from "@/components/ui/Logo";
import { SignedOut } from "@clerk/nextjs";
import Link from 'next/link'
import Image from "next/image";
import React, { useRef, useState } from 'react';
import Card from "@/components/ui/Card";
import MentorCard from "@/components/ui/mentorCard";
import ResourceCard from "@/components/ui/resourceCard";


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
        <h1 className="sm:w-[380px] text-3xl text-start">Why Us?</h1>
        <div className="text-[rgba(255,255,255,0.75)] w-full sm:w-[780px] flex flex-col gap-2">
          <ul className="custom-list">
            <li>At Novice, we're more than just a platform for learning to code.</li>
            <li className="-mt-2">
              We're your trusted companion on your coding journey, offering expert guidance  supportive community, and a wealth of resources tailored specifically for novices.
            </li>
            <li className="-mt-2">
              Say goodbye to endless searches and confusion. With our streamlined approach, you'll save valuable time and focus on what matters most: mastering coding with confidence.
            </li>
          </ul>
          <h3 className="-mt-4">Join us and embark on your path to coding mastery with confidence.</h3>
        </div>
      </div>
      <section className="bg-[#fff] py-5 md:py-10">
        <div className="wrapper flex flex-col gap-2">
          <div className="w-full border-b"></div>
          <p className="font-[500] text-sm">Students' Top Picks</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/Frontend">
            <Card
              imageUrl='/assets/images/FrontendDevelopement.png'
              title='Frontend Development'
              description='Learn the art of creating beautiful and responsive user interfaces with our comprehensive frontend development courses.'
              size={268}
            />
            </Link>
            <Link href="Compe">
            <Card
              imageUrl='./assets/images/codeforces.svg'
              title='Competitive Programming'
              description='Hone your problem-solving skills and prepare for coding competitions with our specialized competitive programming track.'
              size={72}
            />
            </Link>
            <Link href="DSA">

            <Card
              imageUrl='/assets/images/DSA.png'
              title='Data Structures and Algorithms'
              description='Master the fundamentals of data structures and algorithms and enhance your problem-solving abilities with our DSA courses.'
              size={200}
            />
            </Link>


          </div>
        </div>
      </section>
      <section className="bg-[#F3F1E6] py-5 md:py-16">
        <div className="wrapper flex flex-col gap-5 md:grid-rows-2 2xl:gap-0">
          <div className="flex flex-wrap justify-between gap-8">
            <div className="flex flex-col justify-center items-start gap-4">
              <h1 className="text-5xl sm:text-6xl  text-[#282C32] font-[500]">Mentors to<br /> Guide You.</h1>
              <p className="text-[#282C32] font-[400] text-sm leading-[1.45] tracking-[-0.02px] w-full md:w-[600px]  ">
                We believe in the power of guidance. Our mentors are here to support and guide you every step of the way. With
                their expertise and encouragement, you&#39;ll navigate your learning journey with confidence.
              </p>
              <Link href="/mentors">
                <Button className='font-[400] gap-2 w-[100px] text-md flex items-center justify-center cursor-pointer rounded-lg transition-all hover:p-1 p-0'>
                  Explore
                  <Image
                    src='./assets/icons/arrow-square-right.svg'
                    width={20}
                    height={20}
                    alt='signup'
                  />
                </Button>
              </Link>
              <div className="w-full border-b"></div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">

              <div className="flex flex-wrap gap-2 sm:gap-8">
                <MentorCard
                  imageUrl='/assets/images/FrontendDevelopement.png'
                  title='Tanvy Bhola'
                  role='SWE @Microsoft'
                  link='https://www.linkedin.com/in/tanvy-bhola-'
                />
                <MentorCard
                  imageUrl='/assets/images/FrontendDevelopement.png'
                  title='Ashu Sharma'
                  role='Engineering @ Red Hat'
                  link='https://www.linkedin.com/in/ashu-sharma-'
                />
              </div>
              <div className="">Data as of 17/04/2024.</div>
            </div>
          </div>
        </div>
      </section >
      <section className="bg-[#D2D8D7] py-5 md:py-16">
        <div className="wrapper flex flex-col gap-5 md:grid-rows-2 md:gap-8">
          <div className="flex flex-wrap justify-between gap-8 items-end">
            <div className="flex flex-col justify-start items-start gap-4">
              <h1 className="text-5xl sm:text-6xl text-[#282C32] font-[500]">Useful resources</h1>
              <p className="text-[#282C32] font-[400] text-sm leading-[1.45] tracking-[-0.02px] ">
                Discover our useful resources and read articles on different categories
              </p>
            </div>
            <Link href="/resources">
              <Button className='font-[400] gap-2 w-[100px] text-md flex items-center justify-center cursor-pointer rounded-lg transition-all hover:p-1 p-0'>
                View all
                <Image
                  src='./assets/icons/arrow-square-right.svg'
                  width={20}
                  height={20}
                  alt='signup'
                />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 resourceCards gap-2 place-items-center">
            <ResourceCard
              imageUrl='/assets/images/FrontendDevelopement.png'
              title='How to make a Resume for Fresher/Intern Software Roles'
              description='The resume should be of one page. An excellent website to make a resume is Overleaf. Choose a simple resume template. Major sections of my resume in'
              link=''
            />
            <ResourceCard
              imageUrl='/assets/images/FrontendDevelopement.png'
              title='How to make a Resume for Fresher/Intern Software Roles'
              description='The resume should be of one page. An excellent website to make a resume is Overleaf. Choose a simple resume template. Major sections of my resume in'
              link=''
            />
            <ResourceCard
              imageUrl='/assets/images/FrontendDevelopement.png'
              title='How to make a Resume for Fresher/Intern Software Roles'
              description='The resume should be of one page. An excellent website to make a resume is Overleaf. Choose a simple resume template. Major sections of my resume in'
              link=''
            />
            <ResourceCard
              imageUrl='/assets/images/FrontendDevelopement.png'
              title='How to make a Resume for Fresher/Intern Software Roles'
              description='The resume should be of one page. An excellent website to make a resume is Overleaf. Choose a simple resume template. Major sections of my resume in'
              link=''
            />
            <ResourceCard
              imageUrl='/assets/images/FrontendDevelopement.png'
              title='How to make a Resume for Fresher/Intern Software Roles'
              description='The resume should be of one page. An excellent website to make a resume is Overleaf. Choose a simple resume template. Major sections of my resume in'
              link=''
            />
            <ResourceCard
              imageUrl='/assets/images/FrontendDevelopement.png'
              title='How to make a Resume for Fresher/Intern Software Roles'
              description='The resume should be of one page. An excellent website to make a resume is Overleaf. Choose a simple resume template. Major sections of my resume in'
              link=''
            />
          </div>
        </div>
      </section >
      <section className="bg-[#fff] py-5 md:py-16">
        <div className="wrapper flex flex-col gap-5 md:grid-rows-2 md:gap-8">
          <div className="flex flex-col justify-start items-start gap-4">
            <h1 className="text-5xl sm:text-6xl text-[#282C32] font-[500]">FAQs</h1>
            <p className="text-[#282C32] font-[400] text-sm leading-[1.45] tracking-[-0.02px] ">
              Find answers to common questions below
            </p>
          </div>

          <div className="flex flex-col gap-4 px-32">
            <div className="flex flex-col border rounded-xl bg-[#fafafa70] p-2">
              <h1 className="text-[#282C32] font-[500] text-lg truncate">Question 1</h1>
              <p className="text-[#282C32] font-[400] text-sm leading-[1.45] tracking-[-0.02px]  ">Answerhe resume should be of one page. An excellent website to make a resume is Overleaf</p>
            </div>
            <div className="flex flex-col border rounded-xl bg-[#fafafa70] p-2">
              <h1 className="text-[#282C32] font-[500] text-lg truncate">Question 1</h1>
              <p className="text-[#282C32] font-[400] text-sm leading-[1.45] tracking-[-0.02px]  ">Answhe resume should be of one page. An excellent website to make a resume is Overleafer</p>
            </div>
          </div>
        </div>
      </section >
      <iframe src="https://roadmap.sh/r/embed?id=66239b47abd69d4fb4d0493a" width="100%" height="500px" frameBorder="0"></iframe>
      <iframe width="800" height="450" src="https://whimsical.com/embed/SKjUpXxoba798Kbi2unAxw"></iframe>
      {/* <Button variant="default" className="bg-[#121212] hover:bg-[#282c32]">click me Satoshi </Button> */}
    </>
  );
}
