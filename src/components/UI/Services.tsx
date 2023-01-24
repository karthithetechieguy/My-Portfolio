import React from "react";

export function Services() {
    return <section className='pt-0' id='experience'>
        <div className="w-[80%] lg:pt-5 m-auto">
            <div className="text-center">
                <h2 className="text-headingColor font=[800] text-[2.4rem] mb-5">
                    Work Experience
                </h2>
                <div className="font-[500] text-[16px] lg:max-w-[600px] text-headingColor lg:mx-auto ">
                    Full Stack Developer with 5 years of hands-on experience developing and implementing applications and
                    solutions using a range of technologies and programming languages. Flexible and capable of balancing
                    multiple projects at a time in a fast-paced environment. High-energy confident professional with a
                    passion for technology.
                </div>
            </div>
            <div className="flex flex-col justify-center sm:py-12">
                <div className="w-full py-3 px-2 sm:max-w-[40rem] sm:mx-auto sm:px-0">
                    <div className="relative text-gray-700 text-sm font-semibold">
                        {/* vertical line */}
                        <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full 
                        left-1/2 transform-translate-x-1/2">
                        </div>
                        {/* experiences */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">
                                <div className="flex justify-start w-full mx-auto items-center ">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div data-aos="fade-right"
                                            data-aos-duration="1200"
                                            className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer 
                                            ease-in duration-150">
                                            <div className="flex justify-between group-hover:text-white
                                                group-hover:font-[600] text-primaryColor ">
                                                <h3 className="font-[700] mb-3 text-2xl">Infosys</h3>
                                                <i className="leading-8 text-[16px] text-smallTextColor group-hover:text-white"> Aug 2021 - Present</i>
                                            </div>

                                            <p className="text-[15px] text-smallTextColor group-hover:text-white
                                                group-hover:text-[500] leading-6">
                                                Developed the ANA module in EY VIA using React JS, Nodejs and Postgres.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primaryColor border-white 
                                    border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4
                                    sm:translate-y-0  flex items-center justify-center ">
                                    <i className="ri-building-4-line"></i>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">
                                <div className="flex justify-end w-full mx-auto items-center ">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div data-aos="fade-left"
                                            data-aos-duration="1200"
                                            className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer 
                                            ease-in duration-150">
                                            <div className="flex justify-between group-hover:text-white
                                                group-hover:font-[600] text-primaryColor ">
                                                <h3 className="font-[700] mb-3 text-2xl">Growisto</h3>
                                                <i className="leading-8 text-[16px] text-smallTextColor group-hover:text-white"> Aug 2021 - Present</i>
                                            </div>

                                            <p className="text-[15px] text-smallTextColor group-hover:text-white
                                                group-hover:text-[500] leading-6">
                                                Developed the ANA module in EY VIA using React JS, Nodejs and Postgres.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="rounded-full bg-primaryColor border-white 
                                    border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4
                                    sm:translate-y-0  flex items-center justify-center ">
                                    <i className="ri-building-4-line"></i>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">
                                <div className="flex justify-start w-full mx-auto items-center ">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div data-aos="fade-right"
                                            data-aos-duration="1200"
                                            className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer 
                                            ease-in duration-150">
                                            <div className="flex justify-between group-hover:text-white
                                                group-hover:font-[600] text-primaryColor ">
                                                <h3 className="font-[700] mb-3 text-2xl">Tata consultancy</h3>
                                                <i className="leading-8 text-[16px] text-smallTextColor group-hover:text-white"> Aug 2021 - Present</i>
                                            </div>

                                            <p className="text-[15px] text-smallTextColor group-hover:text-white
                                                group-hover:text-[500] leading-6">
                                                Developed the ANA module in EY VIA using React JS, Nodejs and Postgres.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="rounded-full bg-primaryColor border-white 
                                    border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4
                                    sm:translate-y-0  flex items-center justify-center ">
                                    <i className="ri-building-4-line"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
}