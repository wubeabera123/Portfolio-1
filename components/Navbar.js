'use client'
import Image from 'next/image'
import Link from 'next/link'
import { CiSearch } from "react-icons/ci";
import { PiDownloadSimpleLight } from "react-icons/pi";
import { IoMenuOutline } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
import { useState } from 'react';

export default function Navbar() {
  const [showItems, setShowItems] = useState(false);

  const pages = [
    { name: "Home", href: "/" },
    { name: "Skills", href: "/skills" },
    { name: "Gallery", href: "/gallery"},
    { name: "Portfolio", href: "/portfolio"}
  ];

  return (
    <div className='container-wrapper fixed top-0 left-0 right-0 z-50 bg-white shadow'>
      <div className='flex justify-between items-center'>
        <Link href="/">
          <div className='mt-2'>
            <Image
              className='md:w-[80px] md:h-[80px] w-[60px] h-[60px]'
              src="/wubuCode.png"
              width={500}
              height={400}
              alt='WUBU Code Logo'
            />
          </div>
        </Link>
        <div className='md:flex-row gap-x-12 mt-6 hidden md:flex md:items-center'>
          {pages.map((item) => (
            <div key={item.name}>
              <div className='font-bold hover:text-blue-400'>
                <Link href={item.href}>{item.name}</Link>
              </div>
            </div>
          ))}
        </div>
        <div className='md:flex hidden gap-8 md:items-center mt-6'>
          <span>
            <CiSearch size={30}/>
          </span>
          <div>
            <button className='bg-blue-500 flex gap-2 px-3 py-2 items-center text-white rounded-md font-semibold'>
              <span><PiDownloadSimpleLight size={20} /></span>Resume
            </button>
          </div>
        </div>
      </div>
      <div className='md:hidden flex justify-end mt-[-50px]'>
        <span onClick={() => setShowItems(!showItems)}>
          {showItems ? <TfiClose size={22}/> : <IoMenuOutline size={30}/>}
        </span>
      </div>
      {showItems && (
        <>
          <div className='mt-[30px]'>
            <div className='flex justify-between'>
              <button className='bg-blue-500 flex gap-2 px-3 py-2 items-center text-white rounded-md font-semibold'>
                <span><PiDownloadSimpleLight size={20} /></span>Resume
              </button>
              <span>
                <CiSearch size={30}/>
              </span>
            </div>
            <div>
              {pages.map((item) => (
                <div key={item.name}>
                  <div className='py-[10px] hover:bg-slate-500'>
                    <Link href={item.href}>{item.name}</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
