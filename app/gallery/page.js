import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Gallery from '@/components/gallery/Gallery'
import GalleryComp from '@/components/gallery/GalleryComp'
import React from 'react'


export default function page() {
  return (
    <div>
        <div>
          <GalleryComp/>
          <Gallery/>
        </div>
    </div>
  )
}
