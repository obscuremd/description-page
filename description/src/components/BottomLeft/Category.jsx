import React from 'react'
import { Button } from "@material-tailwind/react";

function Category() {
    return (
        <div >
            <Button className='w-[100px] h-[40px] bg-[#0000008A] rounded-[44px] flex justify-center items-center gap-[20px]'>
                <p className='text-[10px] font-bold'>ACTION</p>
            </Button>
        </div >
    )
}

export default Category