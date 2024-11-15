import Glide from '@glidejs/glide';
import { useEffect } from 'react';
import slider1 from '../assets/slider/slider1.png'
import slider2 from '../assets/slider/slider2.png'
import slider3 from '../assets/slider/slider3.png'
function Slider(){

    useEffect(() => {
        const glide = new Glide('.glide', {
          type: 'carousel',
          perView: 1,
          focusAt: 'center',
          gap: 10,
          autoplay: 2000,
        });
        glide.mount();
    
        return () => glide.destroy(); 
      }, []);

    return (
        <>
          <div className="glide z-0">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide"><img src={slider1}/></li>
            <li className="glide__slide"><img src={slider2} /></li>
            <li className="glide__slide"><img src={slider3}/></li>
          </ul>
        </div>
        <div className="glide__arrows flex items-center justify-between text-4xl  "data-glide-el="controls">
          <button className="glide__arrow glide__arrow--left bg-GlobalBG p-3 w-10 h-10 flex items-center justify-center opacity-50 relative bottom-64 left-0 hover:opacity-100" style={{borderRadius:'50%'}} data-glide-dir="<">«</button>
          <button className="glide__arrow glide__arrow--left bg-GlobalBG p-3 w-10 h-10 flex items-center justify-center opacity-50 relative bottom-64   left-0 hover:opacity-100" style={{borderRadius:'50%'}} data-glide-dir=">">»</button>
        </div>
      </div>
        </>
    );
};

export default Slider;