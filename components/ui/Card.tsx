import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './buttonLight'

interface CardProps {
    imageUrl: string;
    Url: string;
    title: string;
    description: string;
    size: number;
}

const Card: React.FC<CardProps> = ({ imageUrl, Url, title, description, size }) => {

    return (
        <div className="bg-[#fff] transition-all flex flex-col items-start gap-2">
            {/* Image */}
            <div className="w-full h-[200px] flex items-center justify-center bg-primary-50 rounded-xl">
                <Link href={Url}>
                    <Image
                        src={imageUrl}
                        width={`${size}`}
                        height={`${size}`}
                        alt={title}
                    />
                </Link>
            </div>

            <h1 className="text-[#282C32] font-[500] text-base">{title}</h1>
            <p className="text-[#282C32] font-[400] text-sm leading-[1.45] tracking-[-0.02px]  ">{description}</p>
            <Link href={Url}>
                <Button className='font-[400] gap-2 w-[80px] rounded-lg p-0 hover:bg-white bg-[#fff] text-[#282C32] text-md flex items-center justify-center cursor-pointer transition-all'>
                    View
                    <Image
                        className=" stroke-none"
                        src='./assets/icons/arrow-square-rightDark.svg'
                        width={20}
                        height={20}
                        alt='View'
                    />
                </Button>
            </Link>
        </div>
    )
}

export default Card
