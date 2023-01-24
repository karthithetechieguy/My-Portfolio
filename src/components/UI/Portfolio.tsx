import React,{useState,useEffect} from 'react';
import { PORTFOLIO_DATA, CATAGORIES } from './../../assets/data/portfolio'
import {Modal} from './Modal'
export function Portfolio() {
    const [nextItems,setNextItems] = useState(1);
    const [portfolio,setPortfolio] = useState(PORTFOLIO_DATA);
    const [showModal,setShowModal]=useState(false);
    const [activeId,setActiveId] = useState<string | null>(null);

    const handleLoadMore=()=>{
        setNextItems(prev=> prev + 1)
    }

    const handleFilter=(category:string)=>{
        setNextItems(1);
        let portfolioData = PORTFOLIO_DATA.filter((portfolio)=>{
            return portfolio.category === category || category=== 'All'
        })
        setPortfolio(portfolioData);
    }

    const handleShowModal=(id:string)=>{
        setActiveId(id);
        setShowModal(true);
    }
    return <section className='pt-0' id="portfolio">
        <div className='w-[80%] lg:pt-5 m-auto'>
            <div className="flex items-center justify-between flex-wrap">
                <div className='mb-7 sm:mb-0'>
                    <h3 className='text-headingColor text-[2rem] font-[700]'>My recent projects</h3>
                </div>
                <div className="flex gap-3">
                    {
                        Object.values(CATAGORIES).map((category) => {
                            return <button className="text-smallTextColor border px-4 py-2 
                                border-solid border-smallTextColor rounded-[8px]" 
                                onClick={()=>handleFilter(category)}>{category}</button>
                        })
                    }
                </div>
            </div>
            <div className='flex items-center gap-4 flex-wrap mt-5'>
                {
                    portfolio.slice(0,nextItems).map((portfolio, index) => {
                        return <div className='group max-w-full sm:w-[48.5%] md:w-[31.8%]
                             lg:w-[32.3%] relative z-[1] bg-gray-200 rounded-[10px]
                             box-shadow'
                            data-aos="fade-zoom-out"
                            data-aos-delay="50"
                            data-aos-duration="1800">
                            <figure className="p-2">
                                <img className="rounded-[10px]" src={portfolio.imageUrl} alt="" />
                            </figure>
                            <div className='w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5]
                                hidden group-hover:block'>
                                <div className='w-full h-full flex items-center justify-center'>
                                    <button className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4
                                        rounded-[8px] ease-in duration-200'
                                        onClick={()=>handleShowModal(portfolio.id)}>
                                        See details
                                    </button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            {nextItems < portfolio.length  && <div className="text-center mt-5">
                    <button className='text-white bg-primaryColor hover:bg-headingColor py-2 px-4
                                        rounded-[8px] ease-in duration-200'
                                        onClick={handleLoadMore} >
                        Load More
                    </button>
                </div>
        }
        {
            showModal && <Modal activeId={activeId} setShowModal={setShowModal} />
        }
        </div>
    </section>
}