import React, { useState } from 'react'
import './Slide.scss'
import PropTypes from 'prop-types'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Slide = ({
    group,
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
    return (
        <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            nav
            items={2}
            autoplay={true} >
            {group.map((item, index) => <div key={index} class="item">{item}</div>)}
        </OwlCarousel>
    )
}

Slide.propTypes = {
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

export default Slide
