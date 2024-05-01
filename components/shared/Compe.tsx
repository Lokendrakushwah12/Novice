import React from 'react'
import Image from 'next/image'
import arrow from '../../public/assets/icons/arrow-square-right.svg'
import MentorCard from "@/components/ui/mentorCard";

const Frontend = () => {
    return (
        <div className='wrapper'>
            <div className='relative w-[100%] bg-[#282C32] h-[16em] rounded-2xl flex justify-center items-center flex-col'>
                <h1 className='text-white relative  text-[2.5em]'>Competitive Coding</h1>
                <h1 className='mt-4 relative  text-white font-extralight max-w-2xl  text-center'>Learning competitive coding is like mastering a digital martial art, sharpening problem-solving skills and coding efficiency to compete in the ever-evolving arena of algorithmic challenges.</h1>
                <div className='mt-6 text-white font-extralight justify-between px-1 items-center relative border-[#FFFFFF]/30 border-[2px] w-[8.5em] h-[2.5em] bg-[#FFFFFF]/15 rounded-lg flex gap-2'>
                    <h1 className='text-xl'>Deep Dive</h1>
                    <Image className=' rotate-90' src={arrow} alt='' />
                </div>
            </div>
            <div className='flex justify-between mt-14 relative'>
                <div className='hidden sm:block w-[20%] sticky top-32 z-10'>
                    <div className='mx-5 mt-2'>
                        <ol>
                            <li>Intro</li>
                            <li>Key Info</li>
                            <li>Roadmap</li>
                            <li>Mentors</li>
                            <li>What's Next</li>
                        </ol>
                    </div>
                </div>
                <div className='w-[100%] md:w-[75%] relative'>
                    <div className='px-5'>
                        <h1 className=' font-medium text-4xl'>Intro</h1>
                        <hr className='h-[1px] bg-black/20'></hr>
                        <p className='mt-3 '>
                            Competitive coding, also known as algorithmic programming or sport programming,
                            is a mind sport that involves solving well-defined problems using programming languages
                            within specified constraints. It's not just about coding; it's about problem-solving,
                            efficiency, and creativity. Competitive coding challenges attract programmers worldwide, offering a platform to
                            hone their skills, compete with others, and sometimes even win prizes or recognition.
                        </p>
                    </div>
                    <div className='px-5 mt-16'>

                        <h1 className=' font-medium text-4xl'>Key Info</h1>
                        <hr className='h-[1px] bg-black/20'></hr>
                        <p className='mt-3 '>
                            Competitive coding is not just a hobby; it's also a crucial skill sought after by tech companies
                            and competitive programming contests. It helps programmers develop problem-solving skills,
                            algorithmic thinking, and coding efficiency. Platforms like Codeforces, LeetCode, and HackerRank
                            offer a plethora of coding challenges to practice and improve. Commonly used programming languages
                            for competitive coding include C++,
                            Java, and Python, each with its advantages and preferences among programmers.
                        </p>
                    </div>
                    <div className='px-5 mt-16'>

                        <h1 className=' font-medium text-4xl'>Roadmap</h1>
                        <hr className='h-[1px] bg-black/20'></hr>
                        <p className='mt-3'>
                            If you're new to competitive coding, start by learning the basics of programming
                            in your preferred language. Then, dive into algorithms and data structures, as they form
                            the backbone of problem-solving in competitive programming. Practice regularly on coding
                            platforms, solving problems of varying difficulty levels to strengthen your skills. Participate
                            in online coding contests to test your abilities under pressure and learn from others' solutions.
                            As you progress, focus on optimization
                            techniques and advanced algorithms to tackle more challenging problems effectively.
                        </p>
                    </div>
                    <div className='px-5 mt-16'>

                        <h1 className=' font-medium text-4xl'>Mentors</h1>
                        <hr className='h-[1px] bg-black/20'></hr>
                        <p className='mt-3'>
                            <div className="flex flex-col justify-center items-start gap-4">

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
                        </p>
                    </div>
                    <div className='px-5 mt-16 '>

                        <h1 className=' font-medium text-4xl'>Whats Next</h1>
                        <hr className='h-[1px] bg-black/20'></hr>
                        <p className='mt-3'>
                            Now that you have a solid foundation in competitive coding, the journey doesn't end
                            here. Keep challenging yourself with increasingly difficult problems to continue
                            growing your skills. Consider joining online coding communities or clubs to exchange
                            ideas, learn new techniques, and participate in team competitions. Additionally, explore
                            opportunities to compete in regional or international coding competitions, where you
                            can showcase your abilities and network with other
                            talented programmers. Never stop learning and pushing yourself to become a better coder.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend
