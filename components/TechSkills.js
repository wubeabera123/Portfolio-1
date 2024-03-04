import React from 'react'
import Image from 'next/image'

export default function TechSkills() {
  return (
    <div className='container-wrapper tb-sp'>
        <h2 className='h2 font-bold text-center'>Technical Skills</h2>
        <div className='tb-sp max-w-[900px] mx-auto grid lg:grid-cols-6 md:grid-cols-5 grid-cols-4 lg:gap-[0px] gap-[20px]'>
            <div>
                <Image
                  className='w-[100px] h-[100px]'
                  src="/html.png"
                  width={800}
                  height={800}
                  alt='html'
                />
            </div>
            <div>
                <Image
                  className='w-[100px] h-[100px]'
                  src="/css-3.png"
                  width={800}
                  height={800}
                  alt='html'
                />
            </div>
            <div>
                <Image
                  className='w-[100px] h-[100px]'
                  src="/java-script.png"
                  width={800}
                  height={800}
                  alt='html'
                />
            </div>
            <div>
                <Image
                  className='w-[100px] h-[100px]'
                  src="/react.png"
                  width={800}
                  height={800}
                  alt='html'
                />
            </div>
            <div>
                <Image
                  className='w-[100px] h-[100px]'
                  src="/node-js.png"
                  width={800}
                  height={800}
                  alt='html'
                />
            </div>
            <div>
                <Image
                  className='w-[100px] h-[100px]'
                  src="/sql-server.png"
                  width={800}
                  height={800}
                  alt='html'
                />
            </div>
        </div>
        <div className='max-w-[900px] mx-auto grid grid-cols-6'>
            <div>
                <Image
                  className='w-[100px] h-[100px]'
                  src="/figma.png"
                  width={800}
                  height={800}
                  alt='html'
                />
            </div>
            <div>
                <Image
                  className='w-[100px] h-[100px]'
                  src="/network.png"
                  width={800}
                  height={800}
                  alt='html'
                />
            </div>
        </div>
    </div>
  )
}
