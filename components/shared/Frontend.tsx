import React from 'react'
import Image from 'next/image'
import arrow from '../../public/assets/icons/arrow-square-right.svg'
const Frontend = () => {
    return (
        <div className='wrapper'>
            <div className='relative w-[100%] bg-[#282C32] h-[16em] rounded-2xl flex justify-center items-center flex-col'>
                <h1 className='text-white relative  text-[2.5em]'>Frontend Development</h1>
                <h1 className='mt-4 relative  text-white font-extralight max-w-lg  text-center'>Learn the art of creating beautiful and responsive user interfaces with our comprehensive frontend development courses.</h1>
                <div className='mt-6 text-white font-extralight justify-between px-1 items-center relative border-[#FFFFFF]/30 border-[2px] w-[8.5em] h-[2.5em] bg-[#FFFFFF]/15 rounded-lg flex gap-2'>
                    <h1 className='text-xl'>Deep Dive</h1>
                    <Image className=' rotate-90' src={arrow} alt='' />
                </div>
            </div>
            <div className='flex justify-between mt-14'>
               <div className='hidden sm:block w-[20%] relative'>
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
                <div className='px-5 h-[10em]'>
                <h1 className=' font-medium text-4xl'>Intro</h1>
                <hr className='h-[2px] bg-black/20'></hr>
                <p className='mt-3 '>
                Front-end development is the art and science of crafting engaging and interactive 
                user experiences on the web. It's the bridge between design and functionality,
                 where developers bring static designs to life, creating dynamic and responsive
                  websites and web applications. With the rapid evolution of web 
                technologies, front-end development has become more exciting and challenging than ever before.
                </p>
                </div>
                <div className='px-5 mt-16 h-[10em]'>

                <h1 className=' font-medium text-4xl'>Key Info</h1>
                <hr className='h-[2px] bg-black/20'></hr>
                <p className='mt-3 '>
                Understanding the core technologies is essential for any front-end developer.
                 HTML (HyperText Markup Language) forms the structure of web pages, while CSS 
                 (Cascading Style Sheets) styles and enhances their appearance. JavaScript adds
                  interactivity and functionality, allowing developers to create dynamic user experiences. 
                  Additionally, familiarity with frameworks and libraries like React, Angular,
                and Vue.js can significantly boost productivity and streamline development processes.
                </p>
                </div>
                <div className='px-5 mt-16 h-[10em]'>

                <h1 className=' font-medium text-4xl'>Roadmap</h1>
                <hr className='h-[2px] bg-black/20'></hr>
                <p className='mt-3'>
                Embarking on a front-end development journey requires a roadmap.
                 Start by mastering the basics of HTML, CSS, and JavaScript. Once comfortable,
                  dive deeper into advanced topics like responsive design, accessibility, and
                   modern CSS techniques. Explore popular front-end frameworks and libraries to 
                   leverage their power in your projects. Continuous learning is key; stay updated with industry 
                trends and best practices to evolve as a proficient front-end developer.
                </p>
                </div>
                <div className='px-5 mt-16 h-[10em]'>

                <h1 className=' font-medium text-4xl'>Mentors</h1>
                <hr className='h-[2px] bg-black/20'></hr>
                </div>
                <div className='px-5 mt-16  h-[10em]'>

                <h1 className=' font-medium text-4xl'>Whats Next</h1>
                <hr className='h-[2px] bg-black/20'></hr>
                <p className='mt-3'>
                As you progress in your front-end development journey, 
                consider specializing in areas like UI/UX design, front-end 
                performance optimization, or mastering specific frameworks or 
                technologies. Experiment with new tools and techniques, contribute
                to open-source projects, and collaborate with fellow developers to broaden 
                your skill set. Remember, the field of front-end development is dynamic, so staying
                 curious and adaptable is essential for continued growth and success.
                </p>
                </div>
               </div>
            </div>
        </div>
    )
}

export default Frontend
