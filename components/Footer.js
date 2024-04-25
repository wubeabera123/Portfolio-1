import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='bg-[#433E3E]'>
        <div className='container-wrapper pt-[70px] text-slate-100  grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
              <div className=''>
                  <div>
                      <Image
                      className='w-[40px] h-[30px]'
                      src="/wubuCode.png"
                      width={400}
                      height={490}
                      alt='footer logo'
                      />
                  </div>
                  <p className='p0 mt-[15px] w-full max-w-[350px]'>I am a highly driven software developer having experience on fullstack website  development</p>
              </div>
              <div className='flex flex-col justify-center sm:items-center md:justify-start mt-[40px]  sm:mt-[0]'>
                  <p className='p1'>Important Links</p>
                  <div className=' mt-[15px] gap-2 flex flex-col md:flex-row'>
                      <Link href="/portfolio" className='hover:underline hover:text-blue-400'>Portfolio</Link>
                      <Link href="/portfolio" className='hover:underline hover:text-blue-400'>Skills</Link>
                      <Link href="/portfolio" className='hover:underline hover:text-blue-400'>Education</Link>
                      <Link href="/contact" className='hover:underline hover:text-blue-400'>Contact</Link>
                  </div>
              </div>
          <div className='flex flex-col  justify-center sm:items-start lg:items-center md:justify-start md:items-start xl:items-center mt-[40px]  sm:mt-[0]'>
              <p className='p1'>Social Media Links</p>
              <div className='mt-[20px] flex gap-4 items-start'>
                  <Link href="#">
                      <Image
                      className='w-[40px] h-[40px]'
                      src="/facebook.png"
                      width={400}
                      height={600}
                      alt='facebook'
                      />
                  </Link>
                   <Link href="#">
                       <Image
                       className='w-[40px] h-[40px]'
                       src="/twitter.png"
                       width={400}
                       height={600}
                       alt='twitter'
                      />
                   </Link>
                   <Link href="https://www.instagram.com/?theme=dark">
                       <Image
                       className='w-[40px] h-[40px]'
                       src="/instagram.png"
                       width={400}
                       height={600}
                       alt='instagram'
                      />
                   </Link>
              </div>
          </div>
        </div>
        <p className='p2 text-slate-300 py-5 text-center'>@2024 All Rights Reserved</p>
    </div>
  )
}
