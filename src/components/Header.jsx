import { IoMdSearch } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center font-GeneralFont text-sm text font-medium px-10 z-10  bg-gray-100'>
                <div>
                    <a href="#" className='text-lg '>Logo</a>
                </div>

                <div className="flex space-x-4 p-4 font-GeneralFont text-sm text font-semibold">
            <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Categories</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Blog</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Social</a>
                </div>
                <div className='flex gap-3 text-lg cursor-pointer'>
                    <IoMdSearch className='text-xl'/>
                    <FaShoppingBag />
                    <GrFavorite />
                </div>
            </div>
           
        </>
    );
};

export default Navbar;
