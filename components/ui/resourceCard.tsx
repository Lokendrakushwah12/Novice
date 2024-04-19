import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './button'

interface CardProps {
    imageUrl: string;
    title: string;
    description: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ title, description, link }) => {

    return (
        <div className="w-[400px] h-[300px] transition-all flex flex-col items-center gap-2 rc">
            <Link href={link}>
                {/* Image */}
                <div className="w-[400px] h-[200px] border flex items-center justify-center bg-[#fafafa70] rounded-[16px] rc">
                    <Image
                        src='/assets/images/user.svg'
                        width={100}
                        height={100}
                        alt={title}
                    />
                </div>
            </Link>
            <div className="flex flex-row justify-between items-center w-full px-2">
                <div className="flex flex-col w-full">
                    <h1 className="text-[#282C32] font-[500] text-lg truncate">{title}</h1>
                    <p className="text-[#282C32] font-[400] text-sm leading-[1.45] tracking-[-0.02px]  ">{description}...</p>
                </div>
            </div>
        </div>
    )
}

export default Card
