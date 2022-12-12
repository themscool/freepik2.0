import React from 'react'
import { RiArrowDownSFill } from 'react-icons/ri';
import { HiOutlineSearch } from 'react-icons/hi';
import logoImg from '../../src/logo.png'

const Banner = () => {
    return (
        <>
            <div className="search-action py-20 text-center">
                <div className="banlogo">
                    <a href="" className='block lg:hidden py-4'>
                        <img src={logoImg} alt={logoImg} className="w-auto h-10 mx-auto" />
                    </a>
                </div>
                <h1 className='text-3xl text-white font-bold'>All the assets you need, in one place</h1>
                <p className='text-white py-4 text-xl'>Find and download the best high-quality photos, designs, and mockups</p>
                <div className="search-box mt-3 bg-white rounded-md w-[90%] lg:w-[60%] mx-auto flex items-center relative">
                    <div className="assets flex items-center px-4 justify-between border-r border-gray-300">
                        <span className='text-gray-500 cursor-pointer text-sm'>
                            Assets
                        </span>
                        <div className="down-dt ml-16">
                            <RiArrowDownSFill />
                        </div>
                    </div>
                    <div className="search-iput">
                        <input type="text" className='w-full py-4 px-4 outline-none' placeholder='Search all assets' name="" id="" />
                    </div>
                    <div className="se-icons text-2xl text-gray-700 cursor-pointer absolute right-4 top-4">
                        <HiOutlineSearch />
                    </div>
                </div>
                <div className="search-tags flex items-center mt-4 justify-center">
                    <div className="stags1 flex items-center text-white bg-white/30 hover:bg-white/40 duration-300 ease-in-out px-2 py-1 rounded-sm m-2 cursor-pointer">
                        <div className="s-icons">
                            <HiOutlineSearch />
                        </div>
                        <span className='font-medium text-sm ml-2'>Chirstmas background</span>
                    </div>
                    <div className="stags1 flex items-center text-white bg-white/30 hover:bg-white/40 duration-300 ease-in-out px-2 py-1 rounded-sm m-2 cursor-pointer">
                        <div className="s-icons">
                            <HiOutlineSearch />
                        </div>
                        <span className='font-medium text-sm ml-2'>Poster</span>
                    </div>
                    <div className="stags1 flex items-center text-white bg-white/30 hover:bg-white/40 duration-300 ease-in-out px-2 py-1 rounded-sm m-2 cursor-pointer">
                        <div className="s-icons">
                            <HiOutlineSearch />
                        </div>
                        <span className='font-medium text-sm ml-2'>Banner</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner