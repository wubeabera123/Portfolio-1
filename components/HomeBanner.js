'use client'
import {useEffect, useState} from 'react'
import Image from 'next/image';

export const HomeBanner = () => {
 
  const [currentIdx, setCurrentIdx] = useState(0);  
  const homeBanners = [
    {
        id: '1',
        image: '/homebanner1-min.jpg',
        mainHeadline: 'Wubeshet Abera',
        subHeadline: 'FullStack Developer'
    },
    {
        id: '2',
        image: '/homebanner2-min.jpg',
        mainHeadline: 'Wubeshet Abera',
        subHeadline: 'Graphics Designer'
    },
    {
        id: '3',
        image: '/homebanner3-min.jpg',
        mainHeadline: 'Wubeshet Abera',
        subHeadline: 'Network Solution'
    }
  ]
 
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIdx((prevIdx) => (prevIdx + 1) % homeBanners.length);
    }, 7000);
    return () => clearInterval(intervalId);
  },);

console.log(homeBanners)
  return (
    <div className='relative'>
    {homeBanners.map((data, idx) => (
      <div key={idx} style={{ display: idx === currentIdx ? 'block' : 'none' }}>
        <div className='w-full relative'>
          <Image
            className='w-full min-h-[250px] object-cover object-center'
            src={data.image}
            width={1200}
            height={1000}
            alt={`banner${idx + 1} image`}
          />
        </div>
        <div className='container-wrapper absolute inset-y-0 left-0 flex flex-col justify-center items-start'>
          <h2 className='h1 text-white'>{data.mainHeadline}</h2>
          <p className='p1 text-white'>{data.subHeadline}</p>
        </div>
      </div>
    ))}
  </div>
  )
};
