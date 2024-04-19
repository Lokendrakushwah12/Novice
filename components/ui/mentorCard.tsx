import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './button'

interface CardProps {
    imageUrl: string;
    title: string;
    role: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ title, role, link }) => {

    return (
        <div className="bg-[#fff] border transition-all flex flex-col items-center gap-2 mentorCard">
            {/* Image */}
            <div className="w-[200px] h-[200px] border flex items-center justify-center bg-[#FAFAFA] rounded-[16px]">
                <Image
                    src='/assets/images/user.svg'
                    width={100}
                    height={100}
                    alt={title}
                />
            </div>
            <div className="flex flex-row justify-between items-center w-full px-2">
                <div className="flex flex-col">
                    <h1 className="text-[#282C32] font-[500] text-base">{title}</h1>
                    <p className="text-[#282C32] font-[400] text-sm leading-[1.45] tracking-[-0.02px]  ">{role}</p>
                </div>
                <Link href={link}>
                    <Image
                        className=" stroke-none"
                        src='./assets/icons/LinkedIN.svg'
                        width={20}
                        height={20}
                        alt='View'
                    />
                </Link>
            </div>
        </div>
    )
}

export default Card
