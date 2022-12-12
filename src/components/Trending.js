import React from 'react';


const tr1 = 'https://img.freepik.com/premium-photo/christmas-decoration-home-xmas-new-year-celebration-party-holiday_42957-4049.jpg';
const tr2 = 'https://img.freepik.com/free-vector/football-2022-tournament-cup-background_206725-604.jpg?size=626&ext=jpg';
const tr3 = 'https://img.freepik.com/free-photo/soccer-player-action-stadium_1150-14602.jpg?size=626&ext=jpg';
const tr4 = 'https://img.freepik.com/free-photo/woman-sitting-stairs-color-year-2023_23-2149991012.jpg?size=626&ext=jpg';
const tr5 = 'https://img.freepik.com/premium-photo/winter-card-crystals-snow-winter-photo_375001-8.jpg?size=626&ext=jpg';
const tr6 = 'https://img.freepik.com/premium-psd/ceramic-white-mug-mockup_475259-1298.jpg?size=626&ext=jpg';
const tr7 = 'https://img.freepik.com/premium-vector/fairytale-exterior-street-landscape-vector-card_353502-376.jpg?size=626&ext=jpg';
const tr8 = 'https://img.freepik.com/premium-psd/green-flat-design-music-festival-flyer_617723-403.jpg?size=626&ext=jpg';
const tr9 = 'https://img.freepik.com/premium-psd/backlit-modern-city-vertical-mockup_23-2148953066.jpg?size=626&ext=jpg';

const Trending = () => {
    return (
        <>
            <section className='bg-[#f8fafb] py-12'>
                <div className="container mx-auto px-20">
                    <div className="sectitle text-center">
                        <h2 className='text-2xl lg:text-3xl font-bold text-[#374957]'><span className='text-[#1273eb]'>Explore</span> trending categories on Freepik</h2>
                        <p className='text-lg lg:text-xl text-[#5f7d95] pt-3'>Check what’s popular on Freepik and make your project look trendy and professional.</p>
                    </div>
                    {/* left side */}

                    <div className="grid lg:grid-cols-2 gap-3 h-full items-center">
                        <div className="left-box">
                            <div className="trending-box overflow-hidden mt-12 rounded-md cursor-pointer relative ">
                                <div className="bg-overlay absolute w-full h-full invisible hover:visible bg-black/40 duration-500 ease-in-out left-0 top-0 "></div>
                                <div className="tr-img relative  w-full h-full  ">
                                    <img src={tr1} alt={tr1} className="bg-cover w-full h-full hover:scale-[1.05] duration-300 ease-in-out" />
                                    <div className="tr-title absolute bottom-2 left-2">
                                        <h4 className='text-white text-lg font-medium'>Christmas inspiration</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-2 gap-3 mt-3">
                                <div className="trending-box overflow-hidden  rounded-md cursor-pointer relative ">
                                    <div className="bg-overlay absolute w-full h-full invisible hover:visible bg-black/40 duration-500 ease-in-out left-0 top-0 "></div>
                                    <div className="tr-img relative  w-full h-full  ">
                                        <img src={tr2} alt={tr2} className="bg-cover w-full h-full hover:scale-[1.05] duration-300 ease-in-out" />
                                        <div className="tr-title absolute bottom-2 left-2">
                                            <h4 className='text-white text-lg font-medium'>Christmas inspiration</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="trending-box overflow-hidden  rounded-md cursor-pointer relative ">
                                    <div className="bg-overlay absolute w-full h-full invisible hover:visible bg-black/40 duration-500 ease-in-out left-0 top-0 "></div>
                                    <div className="tr-img relative  w-full h-full  ">
                                        <img src={tr3} alt={tr3} className="bg-cover w-full h-full hover:scale-[1.05] duration-300 ease-in-out" />
                                        <div className="tr-title absolute bottom-2 left-2">
                                            <h4 className='text-white text-lg font-medium'>Christmas inspiration</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* right side */}
                        <div className="right-box grid lg:grid-cols-2 mt-12 gap-3">
                            <div className="trending-box overflow-hidden rounded-md cursor-pointer relative ">
                                <div className="bg-overlay absolute w-full h-full invisible hover:visible bg-black/40 duration-500 ease-in-out left-0 top-0 "></div>
                                <div className="tr-img relative  w-full h-full  ">
                                    <img src={tr4} alt={tr4} className="bg-cover w-full h-full hover:scale-[1.05] duration-300 ease-in-out" />
                                    <div className="tr-title absolute bottom-2 left-2">
                                        <h4 className='text-white text-lg font-medium'>Christmas inspiration</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="trending-box overflow-hidden rounded-md cursor-pointer relative ">
                                <div className="bg-overlay absolute w-full h-full invisible hover:visible bg-black/40 duration-500 ease-in-out left-0 top-0 "></div>
                                <div className="tr-img relative  w-full h-full  ">
                                    <img src={tr5} alt={tr5} className="bg-cover w-full h-full hover:scale-[1.05] duration-300 ease-in-out" />
                                    <div className="tr-title absolute bottom-2 left-2">
                                        <h4 className='text-white text-lg font-medium'>Christmas inspiration</h4>
                                    </div>
                                </div>
                            </div>     <div className="trending-box overflow-hidden rounded-md cursor-pointer relative ">
                                <div className="bg-overlay absolute w-full h-full invisible hover:visible bg-black/40 duration-500 ease-in-out left-0 top-0 "></div>
                                <div className="tr-img relative  w-full h-full  ">
                                    <img src={tr6} alt={tr6} className="bg-cover w-full h-full hover:scale-[1.05] duration-300 ease-in-out" />
                                    <div className="tr-title absolute bottom-2 left-2">
                                        <h4 className='text-white text-lg font-medium'>Christmas inspiration</h4>
                                    </div>
                                </div>
                            </div>  
                              <div className="trending-box overflow-hidden rounded-md cursor-pointer relative ">
                                <div className="bg-overlay absolute w-full h-full invisible hover:visible bg-black/40 duration-500 ease-in-out left-0 top-0 "></div>
                                <div className="tr-img relative  w-full h-full  ">
                                    <img src={tr7} alt={tr7} className="bg-cover w-full h-full hover:scale-[1.05] duration-300 ease-in-out" />
                                    <div className="tr-title absolute bottom-2 left-2">
                                        <h4 className='text-white text-lg font-medium'>Christmas inspiration</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="trending-box overflow-hidden rounded-md cursor-pointer relative ">
                                <div className="bg-overlay absolute w-full h-full invisible hover:visible bg-black/40 duration-500 ease-in-out left-0 top-0 "></div>
                                <div className="tr-img relative  w-full h-full  ">
                                    <img src={tr8} alt={tr8} className="bg-cover w-full h-full hover:scale-[1.05] duration-300 ease-in-out" />
                                    <div className="tr-title absolute bottom-2 left-2">
                                        <h4 className='text-white text-lg font-medium'>Christmas inspiration</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="trending-box overflow-hidden rounded-md cursor-pointer relative ">
                                <div className="bg-overlay absolute w-full h-full invisible hover:visible bg-black/40 duration-500 ease-in-out left-0 top-0 "></div>
                                <div className="tr-img relative  w-full h-full  ">
                                    <img src={tr9} alt={tr9} className="bg-cover w-full h-full hover:scale-[1.05] duration-300 ease-in-out" />
                                    <div className="tr-title absolute bottom-2 left-2">
                                        <h4 className='text-white text-lg font-medium'>Christmas inspiration</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>





                </div>
            </section>
        </>
    )
}

export default Trending