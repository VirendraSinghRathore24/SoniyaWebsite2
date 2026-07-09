import React, {useRef} from 'react'
import Slider from "react-slick"
import { InstagramEmbed } from 'react-social-media-embed';

function Slider2() {
    const data = [
        {
            name : "https://www.instagram.com/p/Cs5-EC0JVrV/",
        },
        {
            name : "https://www.instagram.com/p/C3zGorXpNIW/",
        },
        {
            name : "https://www.instagram.com/p/C3uupjRCshG/",
        },
        {
            name : "https://www.instagram.com/p/C1v8ufBIgBX/",
        }
    ]
    
    const settings ={
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        speed: 300,
        infinite: true,
        autoplaySpeed: 2000,
        autoplay: true,
        initialSlide: 0,
        responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
    
    };
    let sliderRef = useRef(null);
    const play = () => {
        sliderRef.slickPlay();
    };
    const pause = () => {
        sliderRef.slickPause();
    };

  return (
   
    <div className='mt-10  slider-container'>
    <Slider ref={slider => (sliderRef = slider)} {...settings}>
    {
        data.map((d) => (

            <InstagramEmbed url={d.name} />
        ))
    }
 </Slider>
    </div>
   
  )
}

export default Slider2