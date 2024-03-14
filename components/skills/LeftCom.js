import React from 'react';
import Image from 'next/image';

export default function LeftComponent(props) {
    return (
    <div className='md:pt-0 pt-[40px]'>
       <div className='md:flex md:flex-row md:mt-[50px] mt-[16px] lg:gap-[100px] md:gap-[80px] gap-[20px] flex flex-col-reverse'>
        <div className='md:w-1/2 w-full'>
          <Image
            src={props.image}
            width={1000}
            height={400}
            alt='images'
            className='w-full h-[300px] md:mt-0 mt-5'
            />
        </div>
          <div className='md:w-1/2 w-full'>
           <h3 className='h4 leading-loose py-2'>{props.title}</h3>
           <p className='p1'>{props.description}</p>
        </div>
       </div>
     </div>
  )
}