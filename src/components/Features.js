import React from 'react';

import { featureData } from '../data'
import { creativeImg } from '../data'

const Features = () => {
    return (
        <>
            <section className='my-12'>
                <div className="container mx-auto px-20">
                    <div className="sectitle text-center">
                        <h2 className='text-2xl lg:text-3xl font-bold text-[#374957]'>The smartest choice for <span className='text-[#1273eb]'>creatives like you</span> </h2>
                        <p className='text-md lg:text-xl text-[#5f7d95] pt-3'>Whether you’re looking for designs or photographs, you’ll find the perfect asset on Freepik.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 mt-12 items-center gap-48">
                        <div className="left-fe">
                            {featureData.map((fe) => (
                                <div className="fetures-item flex mt-12">
                                    <div className="fe-icons text-xl lg:text-2xl mt-2 text-[#1273eb] w-14 h-10 lg:w-14 lg:h-14 flex items-center justify-center bg-[#1273eb]/30 rounded-md ">
                                        {fe.fIcons}
                                    </div>
                                    <div className="fe-info ml-3">
                                        <h4 className='text-[#374957] text-lg lg:text-2xl font-medium'>{fe.ftitle}</h4>
                                        <p className='text-sm text-[#5f7d95]'>{fe.fdes}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="right-creative hidden lg:block">
                            <img src={creativeImg} alt={creativeImg} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features