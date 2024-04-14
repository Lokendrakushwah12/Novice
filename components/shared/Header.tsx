import { SignIn, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
    return (
        <header className='w-full border-b'>
            <div className="wrapper flex items-center h-[60px] md:px-4 justify-between w-full">
                <Link href="/" className='flex-center gap-2'>
                    <Image src="/assets/images/logo.svg" width={24} height={24}
                        alt="Novice logo"
                    />
                    <div className='font-[500] text-[#414141]'>
                        Novice
                    </div>
                </Link>
                <nav className='md:flex-between justify-center md:w-[300px] items-center md:flex hidden w-full  m-w-xs'>
                    <NavItems />
                </nav>
                <div className="flex justify-center items-center gap-3">
                    <SignedIn>
                        <UserButton afterSignOutUrl='/' />
                        <MobileNav />
                    </SignedIn>
                    <SignedOut>
                        {/* <Button asChild className='rounded-lg' size="sm">
                            <Link href="/sign-in">
                            Login
                            </Link>
                        </Button> */}
                        <div className='font-[400] hover:bg-[#eff0f0] flex items-start justify-center w-[80px] cursor-pointer rounded-lg transition-all hover:p-1 p-0'>
                            <Link className='flex gap-1 font-[500] text-[#414141]' href="/sign-in">
                                Login
                                <Image
                                    src='./assets/icons/login.svg'
                                    width={20}
                                    height={20}
                                    alt='login'
                                />
                            </Link>
                        </div>
                        <MobileNav />
                    </SignedOut>

                </div>
            </div>
        </header>
    )
}

export default Header
