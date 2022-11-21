import React, { useState } from 'react';

function ImageSlider({slides}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    let displayIndex = currentIndex.toString();
    displayIndex = parseInt(displayIndex);

    let displaySlides = slides.length.toString();

    function goToPrevious() {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    function goToNext() {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return(
        <React.Fragment>
            <div className="slide-image" style={{ backgroundImage: `url(${slides[currentIndex]})`}}>
                <div className="arrows">
                    <div className="left-arrow" style={{ visibility: slides.length === 1 ? 'hidden' : 'visible'}} onClick={goToPrevious}><i className="fa-solid fa-sharp fa-chevron-left"></i></div>
                    <div className="right-arrow" style={{ visibility: slides.length === 1 ? 'hidden' : 'visible'}} onClick={goToNext}><i className="fa-solid fa-sharp fa-chevron-right"></i></div>
                </div>
                <div className="slide-index">{(displayIndex +1 + `/` + displaySlides)}</div>
            </div>
        </React.Fragment>
    )
}

export default ImageSlider;