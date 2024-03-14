"use client"
import React, { useState } from "react";
import { IoIosAdd, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";
import Image from 'next/image';
import ShowPhoto from "./ShowPhoto";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [photoIsVisible, setPhotoIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePhotoVisibility = (image) => {
    setPhotoIsVisible(!photoIsVisible);
    setSelectedImage(image);
  };
  const handleNext = () => {
    const nextIndex = (selectedIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex].imagePath);
    setSelectedIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (selectedIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex].imagePath);
    setSelectedIndex(prevIndex);
  };

  const galleryItems = [
    { id: 1, category: "Personal", imagePath: "/gallery/personal/img1.jpg" },
    { id: 6, category: "Personal", imagePath: "/gallery/personal/img2.jpg" },
    { id: 1, category: "Personal", imagePath: "/gallery/personal/img3.jpg" },
    { id: 1, category: "Personal", imagePath: "/gallery/personal/img4.jpg" },
    { id: 6, category: "Personal", imagePath: "/gallery/personal/img5.jpg" },
    { id: 6, category: "Personal", imagePath: "/gallery/personal/img6.jpg" },
    { id: 2, category: "Friends", imagePath: "/assets/family business.jpg" },
    { id: 3, category: "Friends", imagePath: "/assets/Ethiopias_Rules_on_Transfer_Pricing.jpg" },
    { id: 4, category: "School", imagePath: "/assets/lowyield.jpg" },
    { id: 5, category: "School", imagePath: "/assets/leader-1.png" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      <div className=" min-h-screen">
        <div className="container-wrapper mx-auto py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold">My Gallery</h1>
          </div>

          <div className="flex justify-center mt-8">
            <div className="">
              <ul className="flex gap-5">
                <li
                  className={`cursor-pointer ${selectedCategory === "all" ? "border-b-2 border-blue-900" : ""}`}
                  onClick={() => setSelectedCategory("all")}
                >
                  All
                </li>
                <li
                  className={`cursor-pointer ${selectedCategory === "Personal" ? "border-b-2 border-blue-900  " : ""}`}
                  onClick={() => setSelectedCategory("Personal")}
                >
                  Personal
                </li>
                <li
                  className={`cursor-pointer ${selectedCategory === "Friends" ? "border-b-2 border-blue-900" : ""}`}
                  onClick={() => setSelectedCategory("Friends")}
                >
                  Friends
                </li>
                <li
                  className={`cursor-pointer ${selectedCategory === "School" ? "border-b-2 border-blue-900" : ""}`}
                  onClick={() => setSelectedCategory("School")}
                >
                  School
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {filteredItems.map((item) => (
              <div className="item" data-id={item.category} key={item.id}>
                <div className="inner relative">
                 
                  <Image
                    src={item.imagePath}
                    alt="HST Gallery Photos"
                    width={1000}
                    height={800}
                    className="w-full h-auto cursor-pointer"
                    onClick={() => handlePhotoVisibility(item.imagePath)}
                  />
                  <div className="overlay absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition duration-500" onClick={() => handlePhotoVisibility(item.imagePath)}>

                    <p>
                      <button className="" onClick={() => handlePhotoVisibility(item.imagePath)}>
                        <IoIosAdd className='text-accent4' size={30} />
                      </button>

                    </p>
                    <span className="fa fa-plus text-white text-xl">{item.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedImage && <ShowPhoto selectedImage={selectedImage} handlePhotoProp={() => handlePhotoVisibility(null)} handleNext={handleNext}
        handlePrev={() => handlePrev(null)} />}
    </>
  );
};

export default Gallery;
