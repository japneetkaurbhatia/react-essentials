import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Index = () => {
    const display = false;

    // Create an array of slides
    const slides = [
        {
            src: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNjgwLTE2Ni1wLWwxZGJ1cTN2LnBuZw.png",
            legend: "Legend 1",
            display: true,
        },
        // {
        //     src: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNjgwLTE2Ni1wLWwxZGJ1cTN2LnBuZw.png",
        //     legend: "Legend 2",
        //     display: display,
        // },
        {
            src: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNjgwLTE2Ni1wLWwxZGJ1cTN2LnBuZw.png",
            legend: "Legend 3",
            display: true,
        },
        // {
        //     src: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNjgwLTE2Ni1wLWwxZGJ1cTN2LnBuZw.png",
        //     legend: "Legend 4",
        //     display: true,
        // },
        // {
        //     src: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNjgwLTE2Ni1wLWwxZGJ1cTN2LnBuZw.png",
        //     legend: "Legend 5",
        //     display: true,
        // },
    ];

    // Filter out slides that should not be displayed
    const filteredSlides = slides.filter(slide => slide.display);

    return (
        <Carousel autoPlay>
            {filteredSlides.map((slide, index) => (
                <div key={index}>
                  {(slide.legend === "Legend 1") ? <Slide2  imageText={slide.legend}/> : 
                  <Slide imageSrc={slide.src} imageText={slide.legend}/>}
                </div>
            ))}
        </Carousel>
    );
}

export default Index;


const Slide = ({ imageSrc, imageText }) => {
    return (
        <div>
            <img alt="slide" src={imageSrc} />
            <p className="legend">{imageText}</p>
        </div>
    );
}

const Slide2 = ({ imageText }) => {
    return (
        <div>
            <p className="legend">{imageText}</p>
        </div>
    );
}
