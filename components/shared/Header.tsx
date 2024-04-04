import { SignIn, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Header = () => {
    return (
        <header className='w-full border-b'>
            <div className="wrapper flex items-center justify-center">
                <Link href="/" className='w-36'>
                    <Image src="/assets/images/logo.svg" width={32} height={32}
                        alt="Novice logo"
                    />
                </Link>
                <div className="flex w-32 justify-end gap-3">
                    <SignedIn>
                        <UserButton afterSignOutUrl='/'></UserButton>
                    </SignedIn>
                    <SignedOut>
                        <Button asChild className='rounded-lg' size="sm">
                            <Link href="/sign-in">
                                Login
                            </Link>
                        </Button>
                    </SignedOut>

                </div>
            </div>
        </header>
    )
}

export default Header
