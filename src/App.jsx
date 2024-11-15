import './App.css'
import HeaderGlobal from './components/HeaderGlobal'
import Header from './components/Header'
import Slider from './components/Slider'
import Categories from './components/Categories';
import Blog from './components/Blog'
import Footer from './components/Footer'
import "@glidejs/glide/dist/css/glide.core.min.css";



function App() {

  return (
    <>
    <HeaderGlobal></HeaderGlobal>
    <Header></Header>
    <Slider></Slider> 
    <div className="mb-10">
        <h1 className='text-4xl font-semibold text-center text-GlobalBG mb-10 font-GlobalHeaderFont'>
          Our Categories
          <p>Most popular categories</p>
        </h1>
    </div>    
    <Categories></Categories>
    <div className="mb-10"> 
        <h1 className='text-4xl font-semibold text-center text-GlobalBG mb-10 font-GlobalHeaderFont'>
          Our Blog
          
        </h1>
    </div>
    <Blog></Blog>
    <div className="mb-10">
        <h1 className='text-4xl font-semibold text-center text-GlobalBG mb-10 mt-10 font-GlobalHeaderFont'>
          Our Social
          <p>Stay tuned for the latest trends and products!</p>
        </h1>
    </div>    
    <Footer></Footer>
    </>
  )
}

export default App
