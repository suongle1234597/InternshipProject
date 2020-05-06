import React, { useState } from 'react'
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap'
import PropTypes from 'prop-types'
import './Slide.scss'

const Silde = ({
    items,
    duration,
    transitionDuration,
    infinite,
    indicators,
    arrows,
    scale,
    pauseOnHover,
    onChange,
    showNavs
}) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            // key={item.src}
            >
                {/* <img src={item.src} alt={item.altText} /> */}
                {item}
                {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            {/* {indicators ? <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} /> : ""} */}
            {slides}
            {showNavs ?
                <>
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </>
                : ""}

        </Carousel>
    )
}

Silde.propTypes = {
    items: PropTypes.array.isRequired,
    duration: PropTypes.number,
    transitionDuration: PropTypes.number,
    infinite: PropTypes.oneOf([true, false]),
    indicators: PropTypes.oneOf([true, false]),
    arrows: PropTypes.oneOf([true, false]),
    scale: PropTypes.number,
    pauseOnHover: PropTypes.oneOf([true, false]),
    onChange: PropTypes.func.isRequired,
    showNavs: PropTypes.oneOf([true, false]),
}

export default Silde
