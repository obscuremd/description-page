import React from 'react'
import Cast from './BottomLeft/Cast'
import Category from './BottomLeft/Category'
import Language from './BottomLeft/Language'
Language



function BottomLeft() {
    return (
        <div className='h-[470px] w-[700px] bg-[#FFFFFF75] rounded-tr-[107px] flex flex-col gap-[30px] pt-[20px] pl-[20px] justify-center' >
            <div className='flex items-center justify-center gap-[20px] w-[600px]  '>
                <p className='text-[15px]'>CATEGORY</p>
                <div className='flex flex-wrap gap-[20px]'>
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                </div>
            </div>
            <div className='flex items-center gap-[20px] w-[600px]  '>
                <p className='text-[15px]'>CAST</p>
                <div className='flex flex-wrap gap-[20px] ml-[40px]'>
                    <Cast />
                    <Cast />
                    <Cast />
                    <Cast />
                    <Cast />
                    <Cast />
                    <Cast />
                    <Cast />
                </div>
            </div>
            <div className='flex items-center gap-[20px] w-[400px]  '>
                <p className='text-[15px]'>CATEGORY</p>
                <div className='flex flex-wrap gap-[20px]'>
                    <Language />
                    <Language />
                    <Language />
                    <Language />
                    <Language />
                    <Language />
                    <Language />

                </div>
            </div>
        </div>
    )
}

export default BottomLeft