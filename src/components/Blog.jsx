import blog1 from '../assets/blogs/blog1.png' 
import blog2 from '../assets/blogs/blog2.png' 
import blog3 from '../assets/blogs/blog3.png' 
import blog4 from '../assets/blogs/blog4.png' 
const Blog = () => {
    return (
        <>
        <div className="grid grid-cols-12 gap-4 px-4 gap-x-4">
            <div className="col-span-6 border bg-borderColor border-black flex  h-BlogHeight">
                <img src={blog1} className='w-BlogWidth h-BlogHeight' alt="" />
                <div className='grid'>
                    <h1 className='text-xl font-medium text-center font-GeneralFont'>
                        Lorem ipsum dolor sit.
                    </h1>
                    <p className='px-4 font-GeneralFont'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, ducimus ut quisquam voluptate labore sequi dicta deleniti quas vero quo? Lorem ipsum </p>
                    <a href="#" className='px-4 font-GeneralFont font-medium bg-GlobalBG text-center'>Read More..</a>
                </div>

            </div>
            <div className="col-span-6 border bg-borderColor border-black flex  h-BlogHeight">
                <img src={blog2} className='w-BlogWidth h-BlogHeight' alt="" />
                <div className='grid'>
                    <h1 className='text-xl font-medium text-center font-GeneralFont'>
                        Lorem ipsum dolor sit.
                    </h1>
                    <p className='px-4 font-GeneralFont'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, ducimus ut quisquam voluptate labore sequi dicta deleniti quas vero quo? Lorem ipsum </p>
                    <a href="#" className='px-4 font-GeneralFont font-medium bg-GlobalBG text-center'>Read More..</a>
                </div>

            </div>
            <div className="col-span-6 border bg-borderColor border-black flex  h-BlogHeight">
                <img src={blog3} className='w-BlogWidth h-BlogHeight' alt="" />
                <div className='grid'>
                    <h1 className='text-xl font-medium text-center font-GeneralFont'>
                        Lorem ipsum dolor sit.
                    </h1>
                    <p className='px-4 font-GeneralFont'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, ducimus ut quisquam voluptate labore sequi dicta deleniti quas vero quo? Lorem ipsum </p>
                    <a href="#" className='px-4 font-GeneralFont font-medium bg-GlobalBG text-center'>Read More..</a>
                </div>

            </div>
            <div className="col-span-6 border bg-borderColor border-black flex  h-BlogHeight">
                <img src={blog4} className='w-BlogWidth h-BlogHeight' alt="" />
                <div className='grid'>
                    <h1 className='text-xl font-medium text-center font-GeneralFont'>
                        Lorem ipsum dolor sit.
                    </h1>
                    <p className='px-4 font-GeneralFont'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, ducimus ut quisquam voluptate labore sequi dicta deleniti quas vero quo? Lorem ipsum </p>
                    <a href="#" className='px-4 font-GeneralFont font-medium bg-GlobalBG text-center'>Read More..</a>
                </div>

            </div>
            
        </div>
        </>
    );
};

export default Blog;