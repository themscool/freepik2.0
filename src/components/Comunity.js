import React from 'react';
import {commImg} from '../data';

const Comunity = () => {
    return (
        <section className='my-16'>
            <div className="container mx-auto px-16">
                <div className="grid lg:grid-cols-2 items-center px-12 py-5 comunity-bg rounded-md">
                    <div className="sectitle ">
                        <h2 className='text-lg lg:text-3xl font-bold text-[#374957]'>Join Freepik’s <span className='text-[#1273eb]'>creator community</span> </h2>
                        <p className='text:sm lg:text-xl mb-8 text-[#5f7d95] pt-3'>Behind every stock image, there’s a creative mind. You can also create content and sell it on Freepik
                            Sell content</p>
                        <a href="" className=' py-2 lg:py-3 px-2 text-sm lg:text-md lg:px-5 font-medium rounded-lg bg-[#1273eb] hover:bg-[#0161cd] duration-300 ease-in-out text-white'>Sell content</a>
                    </div>
                    <div className="c-img hidden lg:block">
                        <img src={commImg} alt={commImg} className=" h-80 mx-auto"/>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Comunity