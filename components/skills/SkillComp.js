import React from 'react'
import Banner from '../common/Banner'
import { RxDotFilled } from "react-icons/rx";
import LeftCom from '@/components/skills/LeftCom'
import RightCom from '@/components/skills/RightCom'


export default function SkillComp() {
  let num = 3;
  return (
    <div className='mt-[90px]'>
        <Banner title="My Skills" subtitle="Trust, Reliability and Expertise" image="/skillBanner.jpg"/>
        <div className='container-wrapper tb-sp'>
            <h3 className='h3 font-bold text-center'>Soft Skills</h3>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[15px] lg:mt-[70px] md:mt-[50px] sm:mt-[30px] mt-[20px] '>
                <div>
                    <h5 className='h5 font-semibold'>Communication:</h5>
                    <div className='flex items-center gap-2 mt-[15px]'>
                        <span><RxDotFilled/></span>
                        <span>I have both Verbal and written communication skills.</span>
                    </div>
                    <div className='flex items-center gap-2 mt-[15px]'>
                        <span><RxDotFilled/></span>
                        <span>Active listening.</span>
                    </div>
                    <div className='flex items-center gap-2 mt-[15px]'>
                        <span><RxDotFilled/></span>
                        <span>Clear and concise expression of ideas.</span>
                    </div>
                </div>
                <div>
                    <h5 className='h5 font-semibold'>Teamwork:</h5>
                    <div className='flex items-center gap-2 mt-[15px]'>
                        <span><RxDotFilled/></span>
                        <span>Collaboration and cooperation with others.</span>
                    </div>
                    <div className='flex items-center gap-2 mt-[15px]'>
                        <span><RxDotFilled/></span>
                        <span>Ability to work effectively in a team.</span>
                    </div>
                    <div className='flex items-center gap-2 mt-[15px]'>
                        <span><RxDotFilled/></span>
                        <span>Contributing to a positive team dynamic.</span>
                    </div>
                </div>
                <div>
                    <h5 className='h5 font-semibold'>Problem-Solving:</h5>
                    <div className='flex items-center gap-2 mt-[15px]'>
                        <span><RxDotFilled/></span>
                        <span>Analytical thinking and critical reasoning.</span>
                    </div>
                    <div className='flex items-center gap-2 mt-[15px]'>
                        <span><RxDotFilled/></span>
                        <span>Creativity in finding solutions.</span>
                    </div>
                    <div className='flex items-center gap-2 mt-[15px]'>
                        <span><RxDotFilled/></span>
                        <span>Resourcefulness in challenging situations.</span>
                    </div>
                </div>
                <div>
                    <h5 className='h5 font-semibold'>Time Management:</h5>
                    <div className='flex items-center gap-2 mt-[15px]'>
                        <span><RxDotFilled/></span>
                        <span>Prioritization of tasks.</span>
                    </div>
                    <div className='flex items-center gap-2 mt-[15px]'>
                        <span><RxDotFilled/></span>
                        <span>Meeting deadlines.</span>
                    </div>
                    <div className='flex items-center gap-2 mt-[15px]'>
                        <span><RxDotFilled/></span>
                        <span>Efficient use of time and resources.</span>
                    </div>
                </div>
            </div>
            <div>
                <RightCom title="Programming/ Website Development" description="Lorem ipsum dolor sit amet consectetur. Nibh quisque at ultricies eros fames nec. Interdum morbi eu non viverra elit. Vestibulum fermentum turpis aliquet sagittis maecenas in laoreet ipsum amet. Hendrerit velit commodo at suspendisse sit pharetra purus. Lacus odio in vulputate amet orci libero. Senectus ut malesuada orci quis cras viverra sit. In odio facilisis dapibus congue ultrices elementum aenean." image="/image1.jpg"/>
                <LeftCom title="Graphics Design" description="Lorem ipsum dolor sit amet consectetur. Nibh quisque at ultricies eros fames nec. Interdum morbi eu non viverra elit. Vestibulum fermentum turpis aliquet sagittis maecenas in laoreet ipsum amet. Hendrerit velit commodo at suspendisse sit pharetra purus. Lacus odio in vulputate amet orci libero. Senectus ut malesuada orci quis cras viverra sit. In odio facilisis dapibus congue ultrices elementum aenean." image="/image2.jpg"/>
                <RightCom title="Networking" description="Lorem ipsum dolor sit amet consectetur. Nibh quisque at ultricies eros fames nec. Interdum morbi eu non viverra elit. Vestibulum fermentum turpis aliquet sagittis maecenas in laoreet ipsum amet. Hendrerit velit commodo at suspendisse sit pharetra purus. Lacus odio in vulputate amet orci libero. Senectus ut malesuada orci quis cras viverra sit. In odio facilisis dapibus congue ultrices elementum aenean. " image="/image3.jpg"/>
            </div>
        </div>
    </div>
  )
}
