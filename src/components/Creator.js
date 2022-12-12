import React from 'react'
import { HiOutlineArrowSmRight } from 'react-icons/hi';

// import creator data from data
import { fpcreator } from '../data';


const Creator = () => {
    return (
        <section>
            <div className="container mx-auto px-20 py-12">
                <div className="flex justify-between items-end">
                    <div className="creator-title">
                        <h2 className='text-[#374957] font-medium text-3xl'>Unlock your inner creator</h2>
                        <p className='text-md lg:text-xl text-[#5f7d95] pt-3'>Get the inspiration you need with these collections carefully selected to boost your project’s engagement.</p>
                    </div>
                    <div className="explore cursor-pointer flex items-center">
                        <p className='text-[#1273eb] text-xl font-medium hidden lg:block'>Explore</p>
                        <span className='text-2xl text-[#1273eb] mt-1 hidden lg:block '><HiOutlineArrowSmRight /></span>
                    </div>
                </div>

                <div className="crator-box grid lg:grid-cols-4 md:grid-cols-2 gap-10 mt-12">
                    {
                        fpcreator.map((elem) => (
                            <div className="creator-item overflow-hidden rounded-lg cursor-pointer">
                                <div className="back-img absolute rotate-6 ">
                                    <img src={elem.crImg} alt={elem.crImg} className="w-full h-96 object-cover rounded-lg opacity-40" />
                                </div>
                                <div className="front-img relative overflow-hidden duration-300 ease-in-out">
                                    <img src={elem.crImg} alt={elem.crImg} className="w-full h-96 object-cover hover:scale-[1.05] duration-300 ease-in-out" />
                                    <div className="cr-info absolute bottom-4 lg:bottom-[-19px] left-4 lg:left-20 lg:text-center duration-300 ease-in-out">
                                        <div className="cr-title">
                                            <h4 className='font-medium text-white'>{elem.crname}</h4>
                                        </div>
                                        <div className="total-cr">
                                            <h4 className='font-medium text-white'>{elem.crres}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Creator