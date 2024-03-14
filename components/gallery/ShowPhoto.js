import React from 'react';
import { IoIosClose, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image from 'next/image';
import { TfiClose } from 'react-icons/tfi';

const ShowPhoto = ({ selectedImage, handlePhotoProp, handleNext, handlePrev }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#000000] opacity-95 z-50">
      <div className="absolute top-4 right-14">
        <button onClick={handlePhotoProp}>
          <TfiClose className='text-accent4' size={20} />
        </button>
      </div>
      <div className="relative w-full h-full max-h-[80vh] overflow-hidden" onClick={handlePhotoProp}>
        <Image
          className="object-contain w-full h-full"
          src={selectedImage}
          alt="Selected Image"
          width={1200}
          height={800}
        />
      </div>
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2" onClick={handlePrev}>
        <IoIosArrowBack className='text-accent4' size={25} />
      </button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2" onClick={handleNext}>
        <IoIosArrowForward className='text-accent4' size={25} />
      </button>
    </div>
  );
};

export default ShowPhoto;