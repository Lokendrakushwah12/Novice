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
            <div className="wrapper flex items-center h-[60px] justify-between w-full">
                <Link href="/" className='w-36'>
                    <Image src="/assets/images/logo.svg" width={24} height={24}
                        alt="Novice logo"
                    />
                </Link>
                <nav className='md:flex-between justify-center md:w-[300px] items-center md:flex hidden w-full  m-w-xs'>
                    <NavItems />
                </nav>
                <div className="flex w-24 justify-end gap-3">
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
                        <div className='font-[400] hover:bg-[#eff0f0] flex items-start justify-center w-[100px] cursor-pointer rounded-lg transition-all hover:p-1 p-0'>
                            <Link className='flex gap-1' href="/sign-in">
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
