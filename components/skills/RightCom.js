import React from 'react';
import Image from 'next/image';

export default function RightComponent(props) {

  return (
    <div className='md:pt-0 pt-[40px]'>
      <div className='md:flex md:pt-[50px] pt-[20px] lg:gap-[100px] md:gap-[80px] gap-[60px]'>
         <div className='md:w-1/2 w-full '>
            <h3 className='h4 leading-loose py-2'>{props.title}</h3>
            <p className='p1 w-full'>{props.description}</p>
         </div>
         <div className='md:w-1/2 w-full h-auto'>
           <Image
             src={props.image}
             width={1000}
             height={400}
             alt='images'
             className='w-full h-[300px] md:mt-0 mt-5'
             />
         </div>
     </div>
    </div>
  )
}