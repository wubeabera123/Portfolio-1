import React from 'react'
import Image from 'next/image';
import { SlArrowRight } from "react-icons/sl";


export default function ExpertiseCard(props) {
  return (
    <div className='w-full pb-[15px]'>
      <div>
          <Image
            src={props.image}
            width={800}
            height={400}
            alt='cardImage'
          />
      </div> 
      <div>
        <h4 className='h4 mt-[10px] ml-[15px]'>{props.title}</h4>
        <div  className='flex justify-start items-center gap-2 mt-[15px] ml-[15px]'>
            <h5 className='h5 font-bold'>{props.link}</h5>
            <span><SlArrowRight/></span>
        </div>
      </div>
    </div>
  )
}
