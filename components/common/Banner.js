import React from 'react'
import Image from 'next/image'

export default function Banner(props) {
  return (
    <div>
        <div className='relative'>
        <div className='w-full relative'>
            <Image
              className='w-full min-h-[250px] object-cover object-center'
              src={props.image}
              width={2000}
              height={1000}
              alt='banner2 image'
            />
        </div>
        <div className='container-wrapper absolute inset-y-0 left-0 flex flex-col justify-center items-start'>
            <h2 className='h2 text-white'>{props.title}</h2>
            <p className='p0 text-white'>{props.subtitle}</p>
        </div>
       </div>
    </div>
  )
}
