import React, {useRef} from 'react'
import Slider from "react-slick"

function Slider1() {
    const data = [
        {
            img : "../../images/whatsup1.png",
        },
        {
            img : "../../images/whatsup2.png",
        },
        {
            img : "../../images/whatsup3.png",
        },
        {
            img : "../../images/whatsup4.png",
        },
        {
            img : "../../images/whatsup5.png",
        },
        {
            img : "../../images/whatsup6.png",
        },
        {
            img : "../../images/whatsup7.png",
        },
        {
            img : "../../images/whatsup8.png",
        },
        {
            img : "../../images/whatsup9.png",
        },
        {
            img : "../../images/whatsup10.png",
        },
        {
            img : "../../images/whatsup11.png",
        },
        {
            img : "../../images/whatsup12.png",
        },
        {
            img : "../../images/whatsup13.png",
        },
        {
            img : "../../images/whatsup14.png",
        },
        {
            img : "../../images/whatsup15.png",
        },
        {
            img : "../../images/whatsup16.png",
        },
        {
            img : "../../images/whatsup17.png",
        }
    ]
    
    const settings ={
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 300,
        infinite: true,
        autoplaySpeed: 2000,
        autoplay: true,
        initialSlide: 0,
        responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
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
   
    <div className='w-3/4 m-auto '>
        <div className='mt-10 slider-container'>
        <Slider ref={slider => (sliderRef = slider)} {...settings}>
        {
            data.map((d) => (
                <div>
                    <img src={d.img} alt='' className='h-96 w-60 rounded-lg'/>
                </div>
            ))
        }
        </Slider>
        </div>
    </div>
   
  )
}

export default Slider1