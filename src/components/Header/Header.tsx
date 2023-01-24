import react,{useRef,useEffect} from 'react';

export function Header() {

    const headerRef = useRef<any>(null);
    const menuRef = useRef<any>(null)

    const stickerHeaderFunc = () => {
        window.addEventListener('scroll',()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef?.current?.classList?.add('sticky_header')
            }
            else {
                headerRef?.current?.classList?.remove('sticky_header')
            }
        })
    }

    useEffect(()=>{
        stickerHeaderFunc();
        // use effect cleanup function
        return window.removeEventListener('scroll',stickerHeaderFunc);
    },[])

    const handleClick = (e:any) =>{
        e.preventDefault();

        const targetAttr = e?.target?.getAttribute('href');
        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            top:location - 80,
            left:0
        })
    }

    const toggleMenu=()=> menuRef.current.classList.toggle('show_menu');

    return <header ref={headerRef} className='w-full h-[80px] leading-[80px] flex items-center'>
        <div className='w-full p-[10px]'>
            <div className='flex items-center justify-around'>
                {/* ============ logo start ==========*/}
                <div className="flex items-center gap-[10px]">
                    <div className="h-[40px] w-[40px] bg-primaryColor text-white text-[20px] font-[500] rounded-full flex items-center justify-center">
                        K
                    </div>
                    <div className='leading-[20px]'>
                        <h2 className='sm:text-xl text-xl font-[700] text-smallTextColor'>
                            Karthikeyan 
                        </h2>
                        <p className='text-smallTextColor text-[14px] font-[500]'>personal</p>
                    </div>
                </div>
                {/* ============ logo end ==========*/}

                {/* ============ menu start ==========*/}
                <div className='menu' onClick={toggleMenu} ref={menuRef}>
                    <ul className="flex items-center gap-[30px]">
                        <li><a  onClick={handleClick}className="text-smallTextColor font-[600]" href="#about">About</a></li>
                        <li><a  onClick={handleClick}className="text-smallTextColor font-[600]" href="#experience">Experience</a></li>
                        <li><a  onClick={handleClick}className="text-smallTextColor font-[600]" href="#portfolio">Portfolio</a></li>
                        <li><a  onClick={handleClick}className="text-smallTextColor font-[600]" href="#contact">Contact</a></li>
                    </ul>
                </div>
                {/* ============ menu end ==========*/}

                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 
                    rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300">
                        <i className="ri-send-plane-line"></i> Let's Talk
                    </button>
                    <span onClick={toggleMenu} className="text-2xl text-smallTextColor md:hidden cursor-pointer">
                        <i className='ri-menu-line'></i>
                    </span>
                </div>
            </div>
        </div>
    </header>
}