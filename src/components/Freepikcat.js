import React from 'react';

// import category item from data 
import { fpCategory } from '../data';


const Freepikcat = () => {
    return (
        <>
            <div className="catbox grid grid-cols-8 gap-2 lg:gap-4 pb-20">                {
                    fpCategory.map((item) => (
                        <div className="catItem text-center">
                            <div className="catimg">
                                <img src={item.catImg} alt={item.catTitle} className="lg:w-32 lg:h-32 w-12 h-12 object-cover rounded-full mx-auto border-[3px] border-gray-300/40 lg:p-1" />
                            </div>
                            <div className="cat-name">
                                <a href="" className='text-white text-xs lg:text-xl'>{item.catTitle}</a>
                            </div>
                        </div>
                    ))
                }

            </div>
       
        </>
    )
}

export default Freepikcat