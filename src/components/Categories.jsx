import categories1 from '../assets/categories/categories1.png'
import categories2 from '../assets/categories/categories2.png'
import categories3 from '../assets/categories/categories3.png'
import categories4 from '../assets/categories/categories4.png'
import categories5 from '../assets/categories/categories5.png'
import categories6 from '../assets/categories/categories6.png'
import categories7 from '../assets/categories/categories7.png'
import categories8 from '../assets/categories/categories8.png'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";

const Categories = () => {
    return (
        <>
            <div className="grid grid-cols-4 gap-9 px-10 category-box">
                <div className='border-borderColor'>
                    <img src={categories1} className='rounded-lg cursor-pointer hover:scale-110 transition-transform duration-500'/>
                    <p className=' mt-2 cursor-pointer'>Watch</p>
                    <div className='flex text-lg text-GlobalBG'>
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />   
                    <IoIosStarHalf />
                    </div>
                    <IoIosAddCircle className='relative bottom-96 left-56 text-2xl text-black mt-3 cursor-pointer '/>
                </div>
                <div className='border-borderColor'>
                    <img src={categories2} className='rounded-lg cursor-pointer hover:scale-110 transition-transform duration-500'/>
                    <p className=' mt-2 cursor-pointer'>Watch</p>
                    <div className='flex text-lg text-GlobalBG'>
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />   
                    <IoIosStarHalf />
                    </div>
                    <IoIosAddCircle className='relative bottom-96 left-56 text-2xl text-black mt-3 cursor-pointer '/>
                </div>
                <div className='border-borderColor'>
                    <img src={categories3} className='rounded-lg cursor-pointer hover:scale-110 transition-transform duration-500'/>
                    <p className=' mt-2 cursor-pointer'>Watch</p>
                    <div className='flex text-lg text-GlobalBG'>
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />   
                    <IoIosStarHalf />
                    </div>
                    <IoIosAddCircle className='relative bottom-96 left-56 text-2xl text-black mt-3 cursor-pointer '/>
                </div>
                <div className='border-borderColor'>
                    <img src={categories4} className='rounded-lg cursor-pointer hover:scale-110 transition-transform duration-500'/>
                    <p className=' mt-2 cursor-pointer'>Watch</p>
                    <div className='flex text-lg text-GlobalBG'>
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />   
                    <IoIosStarHalf />
                    </div>
                    <IoIosAddCircle className='relative bottom-96 left-56 text-2xl text-black mt-3 cursor-pointer '/>
                </div>
                <div className='border-borderColor'>
                    <img src={categories5} className='rounded-lg cursor-pointer hover:scale-110 transition-transform duration-500'/>
                    <p className=' mt-2 cursor-pointer'>Watch</p>
                    <div className='flex text-lg text-GlobalBG'>
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />   
                    <IoIosStarHalf />
                    </div>
                    <IoIosAddCircle className='relative bottom-96 left-56 text-2xl text-white mt-3 cursor-pointer '/>
                </div>
                <div className='border-borderColor'>
                    <img src={categories6} className='rounded-lg cursor-pointer hover:scale-110 transition-transform duration-500'/>
                    <p className=' mt-2 cursor-pointer'>Watch</p>
                    <div className='flex text-lg text-GlobalBG'>
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />   
                    <IoIosStarHalf />
                    </div>
                    <IoIosAddCircle className='relative bottom-96 left-56 text-2xl text-black mt-3 cursor-pointer '/>
                </div>
                <div className='border-borderColor'>
                    <img src={categories7} className='rounded-lg cursor-pointer hover:scale-110 transition-transform duration-500'/>
                    <p className=' mt-2 cursor-pointer'>Watch</p>
                    <div className='flex text-lg text-GlobalBG'>
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />   
                    <IoIosStarHalf />
                    </div>
                    <IoIosAddCircle className='relative bottom-96 left-56 text-2xl text-black mt-3 cursor-pointer '/>
                </div>
                <div className='border-borderColor'>
                    <img src={categories8} className='rounded-lg cursor-pointer hover:scale-110 transition-transform duration-500'/>
                    <p className=' mt-2 cursor-pointer'>Watch</p>
                    <div className='flex text-lg text-GlobalBG'>
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />   
                    <IoIosStarHalf />
                    </div>
                    <IoIosAddCircle className='relative bottom-96 left-56 text-2xl text-white mt-3 cursor-pointer '/>
                </div>
                
            </div>
        </>
    );
};

export default Categories;