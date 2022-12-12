import React from 'react';
import {calebanner} from '../data';

const Calendar = () => {
    return (
        <>
            <section className='newarivals py-8'>
                <div className="linear-overlay"></div>
                <div className="container mx-auto px-16 ">
                    <div className="grid lg:grid-cols-2 items-center">
                        <div className="left-ar py-16">
                            <h4 className='text-[#bac8d3] text-xl font-bold'>Welcome to the new <span className='text-[#fec343]'>Freepik calendar</span></h4>
                            <h4 className='text-[#bac8d3] text-3xl font-bold mt-3'><span className='text-[#fec343]'>All celebrations and events</span> are at your fingertips</h4>
                            <div className="ar-btn mt-12">
                                <a href="" className='py-3 px-8 duration-300 ease-in-out hover:bg-white/30  bg-white/20 text-white font-medium text-md rounded-md'>Browser calendar</a>
                            </div>
                        </div>
                        <div className="right-ar">
                            <img src={calebanner} alt={calebanner} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Calendar