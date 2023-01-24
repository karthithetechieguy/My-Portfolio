import react from 'react';
import heroImg from './../../assets/hero_2.png'
import CountUp from 'react-countup'
export function Hero() {

    return <section className='pt-0' id='about'>
        <div className='w-[80%] p-[14px] m-auto'>
            <div className='md:flex items-center justify-around sm:flex-col md:flex-row'>
                {/* hero left content */}
                <div className='w-full md:basis-1/2'>
                    <h5 data-aos="fade-right" data-aos-duration="1500"
                        className="text-headingColor font-[600] text-[16px]">Hello Welcome</h5>
                    <h1 data-aos="fade-up" data-aos-duration="1500"
                        className='text-headingColor font-[800] text-[1.8rem] sm:text-[2.4rem]
                    leading-[36px] sm:leading-[46px] mt-5'>
                        I'm Karthikeyan Kaliyamoorthy <br />
                        Full Stack Developer
                    </h1>
                    <div className="flex items-center gap-6 mt-7"
                        data-aos="fade-up"
                        data-aos-duration="1800"
                        data-aos-delay="200">
                        <a href="#contact">
                            <button className='bg-primaryColor 
                            text-white font-[500] text-[20px]
                            px-4 py-2 ease-in duration-300 gap-2 flex items-center
                            hover:bg-smallTextColor rounded-[8px]'>
                                <i className="ri-mail-line"></i>Hire me
                            </button>
                        </a>
                        <a href="#portfolio" className='text-smallTextColor font-[600] text-[20px] border-b 
                       border-solid border-smallTextColor '>
                            See portfolio
                        </a>
                    </div>
                    <div className='flex items-center gap-6 mt-7'>

                        <p data-aos="fade-left"
                            data-aos-duration="1500"
                            className="flex gap-2 text-headingColor font-[500] text-[20px] 
                            leading-7 sm:pl-14 sm:pr-10">
                            <span>
                                <i className='ri-apps-2-line'>
                                </i>
                            </span>
                            Full Stack Developer with 5 years of hands-on experience developing and implementing applications and
                            solutions using a range of technologies and programming languages. Flexible and capable of balancing
                            multiple projects at a time in a fast-paced environment. High-energy confident professional with a
                            passion for technology. Seeking to leverage broad development experience and hands-on technical
                            expertise in a challenging role.
                        </p>
                    </div>
                </div>
                {/* hero img */}
                <div className='basis-1/4 mt-10 sm:mt-0'
                    data-aos="fade-right" data-aos-duration="1800">
                    <figure className='flex items-center justify-center'>
                        <img src={heroImg} alt="" />
                    </figure>
                </div>
                {/* hero content */}
                <div className='md:flex-basis-1/3 md:mt-0 md:flex-col 
                md:justify-end md:text-end flex justify-between 
                text-center mt-10 flex-wrap'>
                    <div className='mb-[3rem]'
                    data-aos="fade-right"
                    data-aos-duration="1800">
                        <h2 className='text-headingColor font-[700] text-[30px]'>
                            <CountUp start={0} end={5} duration={2} suffix="+"></CountUp>
                        </h2>
                        <h4 className='text-headingColor font-[400] text-[20px]'>Years of experience</h4>
                    </div>
                    <div className='mb-[3rem]'
                    data-aos="fade-left"
                    data-aos-duration="1800">
                        <h2 className='text-headingColor font-[700] text-[30px] gap-4 flex justify-end'>
                            <i className="ri-bookmark-3-fill"></i>Certification
                        </h2>
                        <h4 className='text-headingColor font-[400] text-[20px]'>AWS Cloud Practioner</h4>
                    </div>
                    <div className='mb-[3rem]'
                    data-aos="fade-right"
                    data-aos-duration="1800">
                        <h2 className='text-headingColor font-[700] text-[30px] gap-4 flex justify-end'>
                            <i className="ri-code-box-fill"></i>Stack
                        </h2>
                        <h4 className='text-headingColor font-[400] text-[20px]'>MEAN,MERN,AWS</h4>
                    </div>
                    <div className='mb-[3rem]'
                    data-aos="fade-left"
                    data-aos-duration="1800">
                        <h2 className='text-headingColor font-[700] text-[30px] gap-4 flex justify-end'>
                            <i className="ri-school-fill"></i>B.Tech CSE
                        </h2>
                        <h4 className='text-headingColor font-[400] text-[20px]'>SASTRA UNIVERSITY</h4>
                    </div>
                </div>

            </div>
        </div>
    </section>
}