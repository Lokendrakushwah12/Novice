"use client"
import { SignIn, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
    const [showSmallNav, setShowSmallNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);
            if (window.scrollY > 60) {
                setShowSmallNav(true);
            } else {
                setShowSmallNav(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="flex justify-center items-center">
                <nav className={` backdrop-blur-md bg-[#ffffffcc] fixed top-0 flex justify-center items-center shadow border p-1 rounded-xl h-[40px] m-w-xs ${showSmallNav ? 'translate-y-4' : '-translate-y-8'} transition-all ease-out`}>
                    <NavItems />
                </nav>
            </div>
            <header className='w-full border-b backdrop-blur-md bg-[#ffffffaa]'>
                <div className="wrapper2 py-12 h-[70px] flex items-center w-full md:px-4 justify-between">
                    {/* Logo */}
                    <Link href="/" className='flex-center gap-2'>
                        <Image src="/assets/images/Logo.svg" width={24} height={24}
                            alt="Novice logo"
                        />
                        <div className='font-[500] text-[#414141]'>
                            Novice
                        </div>
                    </Link>
                    {/* Navitems */}
                    <nav className='md:flex-row justify-center items-center md:flex hidden w-full m-w-xs'>
                        <NavItems />
                    </nav>
                    {/* if signout show => "Login" // else show => "Profile icon" */}
                    <div className="flex justify-center items-center gap-3">
                        <SignedIn>
                            <UserButton afterSignOutUrl='/' />
                            {/* <MobileNav /> */}
                        </SignedIn>
                        <SignedOut>
                            <div className='flex-center font-[500] text-center hover:bg-[#00000010] cursor-pointer rounded-lg transition-all hover:py-1 py-0 px-1'>
                                <Link className='flex gap-1 font-[500]' href="/sign-in">
                                    Login
                                    <Image
                                        src='./assets/icons/login.svg'
                                        width={24}
                                        height={24}
                                        alt='login'
                                    />
                                </Link>
                            </div>
                            {/* <MobileNav /> */}
                        </SignedOut>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
