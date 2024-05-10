import React from 'react'
import Image from 'next/image'
import arrow from '../../public/assets/icons/arrow-square-right.svg'
const Frontend = () => {
    return (
        <div className='wrapper'>
            <div className='relative w-[100%] bg-[#282C32] h-[16em] rounded-2xl flex justify-center items-center flex-col'>
                <h1 className='text-white relative  text-[2.5em]'>Data Structures and Algorithm</h1>
                <h1 className='mt-4 relative  text-white font-extralight max-w-2xl  text-center'>Learning Data Structures and Algorithms (DSA) is like mastering the architecture of problem-solving, laying the groundwork for efficient and elegant code solutions</h1>
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
                Data Structures and Algorithms (DSA) form the backbone of computer science 
                and programming. Understanding DSA is essential for anyone aspiring to become
                 a proficient programmer or software engineer. DSA essentially deals with organizing
                  and manipulating data efficiently to solve complex problems. It lays
                 the foundation for developing efficient and scalable software solutions.
                </p>
                </div>
                <div className='px-5 mt-16 h-[10em]'>

                <h1 className=' font-medium text-4xl'>Key Info</h1>
                <hr className='h-[2px] bg-black/20'></hr>
                <p className='mt-3 '>
                In DSA, "data structures" refer to the way data is organized and stored, while 
                "algorithms" are the step-by-step procedures used to manipulate this data. Some 
                common data structures include arrays, linked lists, stacks, queues, trees, and graphs,
                 each with its own set of operations and use cases. Meanwhile, algorithms are the recipes for solving specific
                 problems efficiently, such as sorting, searching, and graph traversal algorithms.
                </p>
                </div>
                <div className='px-5 mt-16 h-[10em]'>

                <h1 className=' font-medium text-4xl'>Roadmap</h1>
                <hr className='h-[2px] bg-black/20'></hr>
                <p className='mt-3'>
                To learn DSA effectively, it's crucial to follow a structured roadmap. 
                Start by mastering the basics of programming in a language of your choice, 
                as a solid foundation in programming concepts is essential. Then, delve into
                 fundamental data structures like arrays and linked lists, understanding their
                  implementation and operations. Next, progress to more complex data structures
                   such as trees, graphs, and hash tables, exploring their applications and 
                   algorithms. Finally, focus on algorithm design techniques like divide and conquer, dynamic programming, 
                and greedy algorithms, honing your problem-solving skills along the way.
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
                Now that you have a roadmap laid out, it's time to dive in and start learning! Start with the basics 
                and gradually build your understanding and proficiency. Practice coding regularly, work on 
                coding challenges and projects, and seek out resources like textbooks, online courses, 
                and coding communities to support your learning journey. Remember, mastering DSA is a
                 gradual process that requires patience, persistence, and dedication. Stay
                 motivated, keep learning, and don't hesitate to seek help when needed. Happy coding!
                </p>
                </div>
               </div>
            </div>
        </div>
    )
}

export default Frontend
