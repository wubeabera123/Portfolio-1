import React from 'react'
import Link from 'next/link'

export default function GetInTouch() {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-blue-500 to-gray-300">
        <div className='tb-sp'>
            <h3 className='h3 font-bold text-center text-white'>How Can I Help You</h3>
            <Link href={"#"} className='hover:underline hover:text-blue-600 flex justify-center items-center mt-[15px] text-white'><p className='p1'>Get In Touch</p></Link>
        </div>
     </div>
  )
}
