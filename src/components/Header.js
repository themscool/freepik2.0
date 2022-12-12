import React from 'react';
import logoImg from '../../src/logo.png';

// icons import
import { TiArrowSortedDown } from 'react-icons/ti';
import { TbMenu2 } from 'react-icons/tb';
import Banner from './Banner';
import Freepikcat from './Freepikcat';



const Header = () => {
    return (
        <>
            <div className="freepikLayout overflow-hidden ">
                <header className='pt-2' >
                    <div className="container mx-auto  px-2 lg:px-20">
                        <div className="navbar flex items-center justify-between">
                            <div className="mobile-menu text-white font-medium text-xl cursor-pointer block lg:hidden">
                                <TbMenu2 />
                            </div>
                            <div className="brand-logo flex items-center">
                                <a href="" className='hidden lg:block'>
                                    <img src={logoImg} alt={logoImg} className="w-auto h-10" />
                                </a>
                                <div className="page-menu ml-2 lg:ml-10 hidden lg:block">
                                    <ul className='flex items-center'>
                                        <li className='text-white mx-4 font-medium text-sm hover:text-white/60'><a href="http://" target="_blank" rel="noopener noreferrer">Vector</a></li>
                                        <li className='text-white mx-4 font-medium text-sm hover:text-white/60'><a href="http://" target="_blank" rel="noopener noreferrer">Photos</a></li>
                                        <li className='text-white mx-4 font-medium text-sm hover:text-white/60'><a href="http://" target="_blank" rel="noopener noreferrer">PSD</a></li>
                                        <li className='text-white mx-4 font-medium text-sm hover:text-white/60'><a href="http://" target="_blank" rel="noopener noreferrer">3D <span>new</span></a></li>
                                        <li className='text-white mx-4 font-medium text-sm hover:text-white/60'><a href="http://" target="_blank" rel="noopener noreferrer">Fonts</a></li>
                                        <li className='text-white mx-4 font-medium text-sm hover:text-white/60 flex items-center'><a href="http://" target="_blank" rel="noopener noreferrer">Categories</a>  <span className='text-md ml-1 mt-1'><TiArrowSortedDown /></span></li>
                                        <li className='text-white mx-4 font-medium text-sm hover:text-white/60'><a href="http://" target="_blank" rel="noopener noreferrer">Collections</a></li>
                                        <li className='text-white mx-4 font-medium text-sm hover:text-white/60 flex items-center'><a href="http://" target="_blank" rel="noopener noreferrer">More</a>  <span className='text-md ml-1 mt-1'><TiArrowSortedDown /></span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="action-area">
                                <ul className='flex items-center'>
                                    <li className='text-white font-medium mx-4  hover:text-white/60 text-sm hidden lg:block'><a href="">Sell content</a></li>
                                    <li className='text-yellow-400 font-medium hover:text-yellow-400/60 mx-4 text-sm hidden lg:block'><a href="">Pricing</a></li>
                                    <li className='text-white font-medium mx-4 text-sm hover:text-white/60'><a href="">Login</a></li>
                                    <li className='text-white font-medium mx-4 text-sm py-[2px] px-3 hover:opacity-60 border border-white rounded-sm'><a href="">Sign Up</a></li>
                                </ul>
                            </div>
                        </div>
                        <Banner />
                        <Freepikcat />
                    </div>
                    <div className="patch-signup flex items-center  justify-center py-8 bg-[#c7ebff] px-2">
                        <p className='text-[#374957] font-medium text:xs lg:text-xl'>Create an account to enjoy more free downloads</p>
                        <a href="" className='ml-2 lg:ml-5  py-2 lg:py-3 px-2 text-xs lg:text-xl lg:px-5 font-medium rounded-md bg-[#1273eb] hover:bg-[#0161cd] duration-300 ease-in-out text-white'>Sign up for free</a>
                    </div>
                </header>

            </div>
        </>
    )
}

export default Header