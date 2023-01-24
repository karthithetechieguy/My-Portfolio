import React from 'react';

export function Contact() {
    return <section className='py-16' id="contact">
            <div className="w-[80%] m-auto">
                <div className="text-headingColor font-[700] text-[2.5rem] mb-8">Get in touch</div>
                <div className="md:flex items-center justify-between">
                    <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
                    <iframe 
                    title="Google maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.544918884651!2d79.11325726458897!3d10.769513092326235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab8b43d7a5705%3A0x681217b8e7ea63c6!2sMangalapuram%2C%20Ramani%20Nagar%2C%20Thanjavur%2C%20Tamil%20Nadu%20613007!5e0!3m2!1sen!2sin!4v1681280879097!5m2!1sen!2sin"
                    className="border-0 w-full h-full"
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen={false}></iframe>
                    </div>
                    <div></div>
                    <div className="mt-8 w-full md:w-1/2 md:mt-0 
                    sm:h-[450px] lg:flex items-center bg-indigo-100
                    px-4 lg:px-8 py-8">
                        <form className="w-full">
                            <div className='mb-5'>
                            <input
                            className="w-full p-3 focus:outline-none rounded-[5px]"
                            placeholder='Enter your name'
                            type="text">
                            </input>
                            </div>
                            <div className='mb-5'>
                            <input
                            className="w-full p-3 focus:outline-none rounded-[5px]"
                            placeholder='Enter your email'
                            type="text">
                            </input>
                            </div>
                            <div className='mb-5'>
                            <input
                            className="w-full p-3 focus:outline-none rounded-[5px]"
                            placeholder='Subject'
                            type="text">
                            </input>
                            </div>
                            <div className='mb-5'>
                            <textarea
                            className="w-full p-3 focus:outline-none rounded-[5px]"
                            placeholder='Write your message'
                            rows={3}>
                            </textarea>
                            </div>
                            <button className="w-full p-3  focus:outline-none text-white bg-smallTextColor hover:bg-headingColor
                            font-[700] text-xl rounded-[8px] ease-linear duration-150">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
    </section>
}