import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full border-t bg-[#181818]'>
      <div className='wrapper flex-center flex-between flex flex-col gap-4 p-5 text-center sm:flex-row w-full'>
        <Link href='./'>
          <Image
            src="./assets/images/LogoWhite.svg"
            width={128}
            height={24}
            alt="Novice logo"
            className='cursor-pointer'
          />
        </Link>
        <div className='flex justify-center items-center gap-3 text-white'>
          <p>© 2024 Novice</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
