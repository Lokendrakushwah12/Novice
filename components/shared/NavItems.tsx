'use client'
import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {
    const pathname = usePathname();

    return (
        <ul className='md:flex-between justify-center items-start flex w-full flex-col item-start gap-5 md:flex-row'>
            {headerLinks.map((links) => {
                const isActive = pathname === links.route;

                return (
                    <li

                    key={links.route}
                    className={` ${isActive && 'text-[#212121]'} font-[400] hover:bg-[#eff0f0] cursor-pointer rounded-lg transition-all hover:p-1 p-0`}
                    >
                        <Link href={links.route}>{links.label}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default NavItems
