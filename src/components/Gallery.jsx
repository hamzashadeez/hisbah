import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

function Gallery() {
  return (
    <div className="mx-auto max-w-screen-xl px-4  py-8 sm:px-6 sm:py-12 lg:px-16 lg:py-16">
        <Carousel autoPlay infiniteLoop>
        {/* <div> */}
            {/* <img src='.slides/01.jpeg' /> */}
            {/* <p className='legend'>Legend 1</p> */}
        {/* </div> */}
        <div>
            <img className="z-20"  src='./slides/02.jpeg' />
            {/* <p className='legend'>Legend 2</p> */}
        </div>
        <div>
            <img className="z-20" src='./slides/03.jpeg' />
            {/* <p className='legend'>Legend 1</p> */}
        </div>
        <div>
            <img className="z-20" src='./slides/04.jpeg' />
            {/* <p className='legend'>Legend 2</p> */}
        </div>
        <div>
            <img className="z-20" src='./slides/05.jpeg' />
            {/* <p className='legend'>Legend 1</p> */}
        </div>
        <div>
            <img className="z-20" src='./slides/06.jpeg' />
            {/* <p className='legend'>Legend 2</p> */}
        </div>
        </Carousel>

    </div>
  );
}

export default Gallery;
