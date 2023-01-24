import React from 'react'
export function Footer() {
    const year = new Date().getFullYear();

    const handleClick = (e:any) =>{
        e.preventDefault();

        const targetAttr = e?.target?.getAttribute('href');
        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            top:location - 80,
            left:0
        })
    }

    return <footer className="pt-12  bg-[#12141e]">
        <div className='w-[80%] m-auto'>
            <div className='sm:flex-row flex flex-col-reverse items-center justify-between md:gap-8'>
                <div className='w-full sm:w-1/2'>
                    <h1 className="text-[30px] font-[500] text-white leading-10">
                        Wanna know more? Lets connect!
                    </h1>
                    <h1 className="mb-5 text-[30px] font-[500] text-white leading-10">
                        
                    </h1>
                    <div className='mb-5'>
                    <a href="#" className='text-primaryColor font-[600] text-[20px] underline'>
                        karthithetechieguy@gmail.com
                    </a>
                    </div>
                    <div className='flex items-center justify-start flex-wrap gap-4 mb-5'>
                        <span className="w-[35px] h-[35px] p-1 bg-[#2b2d33] cursor-pointer text-center 
                        rounded-[8px] hover:bg-primaryColor">
                        <i className="ri-linkedin-fill 
                        text-gray-300 text-[18px] font-500"></i>
                        </span>
                        <span className="w-[35px] h-[35px] p-1 bg-[#2b2d33] cursor-pointer text-center 
                        rounded-[8px] hover:bg-primaryColor">
                        <i className="ri-github-fill 
                        text-gray-300 text-[18px] font-500"></i>
                        </span>
                        <span className="w-[35px] h-[35px] p-1 bg-[#2b2d33] cursor-pointer text-center 
                        rounded-[8px] hover:bg-primaryColor">
                        <i className="ri-codepen-fill 
                        text-gray-300 text-[18px] font-500"></i>
                        </span>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 justify-end'>
                    <h2 className="mb-5 text-[24px] font-[400] text-white leading-10">
                        Looking out to hire someone to work with your awesome team?
                    </h2>
                    <div className='sm:flex items-center justify-start gap-8'>
                        <h5 className="text-white
                    font-[400] gap-2 flex items-center
                     py-2 rounded-[8px] text-[20px] sm:mb-0 mb-5">Check my
                            <a href="#" className="text-primaryColor underline">résumé</a> out :)
                        </h5>
                        <a href="#contact"  onClick={handleClick} className='sm:mb-0 mb-5'>
                            <button className='bg-primaryColor text-white
                    font-[500] flex items-center gap-2 
                    hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                                <i className='ri-mail-line'></i>Hire Me
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div >
                    <ul className="flex items-center justify-center gap-[30px] mt-10">
                        <li><a onClick={handleClick} className="text-gray-400 font-[600]" href="#about">About</a></li>
                        <li><a onClick={handleClick} className="text-gray-400 font-[600]" href="#experience">Experience</a></li>
                        <li><a onClick={handleClick} className="text-gray-400 font-[600]" href="#portfolio">Portfolio</a></li>
                        <li><a onClick={handleClick} className="text-gray-400 font-[600]" href="#contact">Contact</a></li>
                    </ul>
                </div>
        </div>
        <div className="bg-[#1b1e29] py-3 mt-14">
            <div className='w-[80%] m-auto'>
                <div className='flex items-center justify-center sm:justify-between'>
                    <div className='hidden sm:block'>
                        <div className="flex items-center gap-[10px]">
                            <span className='w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white
                            font-500 text-[18px] flex items-center justify-center'> 
                            K
                            </span>
                            <div className='leading-[20px]'>
                                <h2 className='text-gray-200 font-[500] text-[18px]'>Karthikeyan Kaliyamoorthy</h2>
                                <p className='text-gray-200 font-[500] text-[14px]'>Personal</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-400 text-[14px] ">Copyright {year} developed by Karthikeyan Kaliyamoorthy - All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}