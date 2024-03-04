import React from 'react'
import ExpertiseCard from './common/ExpertiseCard'
import Link from 'next/link'

export default function Expertise() {
  return (
    <div className='container-wrapper lg:pt-[70px] md:pt-[50px] pt-[30px]'>
        <h2 className='h2 font-bold text-center'>Expertise</h2>
        <div className='lg:pt-[70px] md:pt-[50px] pt-[30px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-[40px] md:gap-[30px] gap-[40px]'>
            <Link href={"#"} className='hover:shadow-xl'>
                <ExpertiseCard image="/cardimage1.jpg" title="Programming" link="Read more"/>
            </Link>
            <Link href={"#"} className='hover:shadow-xl'>
                <ExpertiseCard image="/cardimage2.jpg" title="Graphics design" link="Read more"/>
            </Link>
            <Link href={"#"} className='hover:shadow-xl'>
                <ExpertiseCard image="/cardimage3.jpg" title="Network solution" link="Read more"/>
            </Link>
        </div>
    </div>
  )
}
