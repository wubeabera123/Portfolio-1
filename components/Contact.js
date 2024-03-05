import React from 'react'
import Banner from './common/Banner'

export default function Contact() {
  return (
    <div className='mt-[90px]'>
       <Banner image="/contactBanner.png" title="Contact me" subtitle="wubeabera123@"/> 
       <div className='max-w-[820px] w-full bg-[#F4EFEF] mx-auto my-[40px] rounded-lg container-wrapper'>
          <div className=' py-[40px]'>
            <h5 className='h5 font-bold text-center'>Contact Form</h5>
            <div className='mt-[40px]'>
              <div>
                <p className='p1'>Name *</p>
                <input placeholder='name'  className='custom-outline rounded p-2 border w-full mt-2 custom-outline'/>
              </div>
              <div className='mt-[20px]'>
                <p className='p1'>Email *</p>
                <input placeholder='you@gmail.com'  className='custom-outline rounded p-2 border w-full mt-2 custom-outline'/>
              </div>
              <div className='flex justify-center mt-[30px]'><button className='rounded max-w-[325px] w-full py-[8px] bg-[#4D66E8] '><span className='text-white text-center'>Send</span></button></div>
            </div>
         </div> 
       </div>
    </div>
  )
}
