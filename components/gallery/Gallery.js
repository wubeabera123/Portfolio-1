"use client"
import React, { useState } from "react";
import { IoIosAdd, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
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
    { id: 2, category: "Personal", imagePath: "/gallery/personal/img2.jpg" },
    { id: 3, category: "Personal", imagePath: "/gallery/personal/img3.jpg" },
    { id: 4, category: "Personal", imagePath: "/gallery/personal/img4.jpg" },
    { id: 5, category: "Personal", imagePath: "/gallery/personal/img5.jpg" },
    { id: 6, category: "Personal", imagePath: "/gallery/personal/img6.jpg" },
    { id: 7, category: "Friends", imagePath: "/gallery/friend/fd1.jpg" },
    { id: 8, category: "Friends", imagePath: "/gallery/friend/fd2.jpg" },
    { id: 9, category: "Friends", imagePath: "/gallery/friend/fd3.jpg" },
    { id: 10, category: "Friends", imagePath: "/gallery/friend/fd4.jpg" },
    { id: 11, category: "Friends", imagePath: "/gallery/friend/fd5.jpg" },
    { id: 12, category: "Friends", imagePath: "/gallery/friend/fd6.jpg" },
    { id: 13, category: "Friends", imagePath: "/gallery/friend/fd7.jpg" },
    { id: 14, category: "Friends", imagePath: "/gallery/friend/fd8.jpg" },
    { id: 15, category: "Friends", imagePath: "/gallery/friend/fd9.jpg" },
    { id: 16, category: "Friends", imagePath: "/gallery/friend/fd10.jpg" },
    { id: 17, category: "Friends", imagePath: "/gallery/friend/fd11.jpg" },
    { id: 18, category: "Friends", imagePath: "/gallery/friend/fd12.jpg" },
    { id: 19, category: "Friends", imagePath: "/gallery/friend/fd13.jpg" },
    { id: 20, category: "Friends", imagePath: "/gallery/friend/fd14.jpg" },
    { id: 21, category: "School", imagePath: "/gallery/school/sch1.jpg" },
    { id: 22, category: "School", imagePath: "/gallery/school/sch2.jpg" },
    { id: 23, category: "School", imagePath: "/gallery/school/sch3.jpg" },
    { id: 24, category: "School", imagePath: "/gallery/school/sch4.jpg" },
    { id: 25, category: "School", imagePath: "/gallery/school/sch5.jpg" },
    { id: 26, category: "School", imagePath: "/gallery/school/sch6.jpg" },
    { id: 27, category: "School", imagePath: "/gallery/school/sch7.jpg" },
    { id: 28, category: "School", imagePath: "/gallery/school/sch8.jpg" },
    { id: 29, category: "School", imagePath: "/gallery/school/sch9.jpg" },
    { id: 30, category: "School", imagePath: "/gallery/school/sch10.jpg" },
    { id: 31, category: "School", imagePath: "/gallery/school/sch11.jpg" },
    { id: 32, category: "School", imagePath: "/gallery/school/sch12.jpg" },
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
                    alt="Wubu Gallery Photos"
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
