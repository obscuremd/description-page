import React from 'react'
import { Rating } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

function LeftSideText() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[70px] font-bold'>INSECURE</h1>
            <div className='flex items-center gap-[20px]'>
                <p className='text-[15px]'>2 NOVEMBER 2019</p>
                <hr className='w-[1px] h-[30px] bg-white' />
                <Rating />
            </div>
            <div className='flex gap-[40px] mt-[20px]'>
                <Button className='bg-[#FFA484] w-[200px] h-[60px]'>DOWNLOAD</Button>
                <Button className='bg-[#FFFFFF] w-[200px] h-[60px] text-black'>WATCH TRAILER</Button>
            </div>
        </div>
    )
}

export default LeftSideText