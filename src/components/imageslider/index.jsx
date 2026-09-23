import { useState } from "react";
import image1 from "../../assets/efoillessons.jpg";
import image2 from "../../assets/efoillovers.jpg";
import image3 from "../../assets/efoillessonsection.jpg";
import "./styles.css";


export default function ImageSlider(){

    const [currentslide, setCurrentSlide] = useState(0);
    const images = [image1, image2, image3];

    function handlePrevious(){
        setCurrentSlide(currentslide === 0 ? images.length - 1 : currentslide - 1);
    }
    function handleNext(){
        setCurrentSlide(currentslide === images.length - 1 ? 0 : currentslide + 1);
    }


    return (
        <div className="container">
            <button onClick={handlePrevious} className="left-arrow">←</button>

            <img 
                src={images[currentslide]}
                alt={`Slide ${currentslide + 1}`}
                className="currentimage"
            />
            
            <button onClick={handleNext} className="right-arrow">→</button>
            
            <div className="indicators">
                {images.map((_, index) => (
                    <button                        
                        key={index}
                        className={currentslide === index ? "indicator active" : "indicator"}
                        onClick={() => setCurrentSlide(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
}