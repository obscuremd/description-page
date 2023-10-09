import React from 'react'
import GalleryCard from './GalleryCard'


function Gallery() {
    return (
        <div>
            <p className='text-[30px] font-bold'>Gallery</p>
            <div className='grid grid-cols-2 gap-[20px]'>
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
            </div>
        </div >
    )
}

export default Gallery