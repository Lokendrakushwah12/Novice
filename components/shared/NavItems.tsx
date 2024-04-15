'use client'
import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {
    const pathname = usePathname();

    return (
        <ul className='md:flex-between justify-between items-start flex item-start md:flex-row'>
            {headerLinks.map((links) => {
                const isActive = pathname === links.route;

                return (
                    <li

                    key={links.route}
                    className={` ${isActive && 'text-[#282c32d9]'} font-[500] text-center hover:bg-[#00000010] cursor-pointer rounded-lg transition-all hover:py-1 py-0 px-2`}
                    >
                        <Link href={links.route}>{links.label}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default NavItems
