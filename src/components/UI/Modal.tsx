import React from 'react';
import { PORTFOLIO_DATA, CATAGORIES } from './../../assets/data/portfolio'

export function Modal(props: {
    activeId: string | null,
    setShowModal: Function
}) {
    const { activeId, setShowModal } = props;
    const portfolio = PORTFOLIO_DATA.find((portfolio) => portfolio.id === activeId);
    return <div className="w-full h-full z-[10] fixed top-0 left-0
    bg-headingColor bg-opacity-60">
        <div className='md:max-w-[600px] md:w-full w-11/12 absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px]
        transform -translate-x-1/2 -translate-y-1/2 p-5'>
            <figure>
                <img className="rounded-[8px]" src={portfolio?.imageUrl} alt="" />
            </figure>
            <h2 className=' text-2xl font-[700] text-headingColor my-5'>{portfolio?.title}</h2>
            <p className="text-smallTextColor leading-7 text-[15px]">{portfolio?.description}</p>

            <div className="flex items-center gap-3 mt-5 flex-wrap">
                <h4 className='text-headingColor text-[18px] text-[700]'>Technologies:</h4>
                {
                    portfolio?.technologies.map((item) => {
                        return <div className="border 
                    rounded-[5px] bg-gray-200 px-2 py-1 font-[500] text-[14px] leading-0 
                    hover:bg-headingColor hover:text-white">{item}</div>
                    })
                }
            </div>
            <div className='flex items-center gap-3 mt-3'>
                <a href={portfolio?.siteUrl}
                    className='text-white font-[500] text-[15px] py-2 px-4 my-8 bg-primaryColor hover:bg-headingColor rounded-[8px]
            ease-in duration-300'
                >Live site</a>
                <a href={portfolio?.gitUrl}
                    className='text-white font-[500] text-[15px] py-2 px-4 my-8 bg-primaryColor hover:bg-headingColor rounded-[8px]
            ease-in duration-300'>
                    Code</a>
            </div>
            <button onClick={()=>setShowModal(false)} className='absolute top-[1.7rem] right-[1.7rem] w-[1.8rem] h-[1.8rem]
             bg-white text-[25px] flex items-center justify-center leading-0 cursor-pointer rounded-[3px]'>&times;</button>
        </div>
    </div>
}