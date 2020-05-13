import React, { useState } from 'react'
import './Slide.scss'
import PropTypes from 'prop-types'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Slide = ({
    group,
    items,
    nav,
    dots,
    autoplay,
    margin,
    loop,
    autoplayTimeout
}) => {
    return (
        <OwlCarousel
            className="owl-theme"
            loop={loop}
            margin={margin}
            nav={nav}
            dots={dots}
            items={items}
            autoplay={autoplay}
            autoplayTimeout={autoplayTimeout}>
            {group.map((item, index) => item)}
        </OwlCarousel>
    )
}

Slide.propTypes = {
    group: PropTypes.array.isRequired,
    items: PropTypes.number,
    autoplay: PropTypes.oneOf([true, false]),
    nav: PropTypes.oneOf([true, false]),
    dots: PropTypes.oneOf([true, false]),
    margin: PropTypes.number,
    loop: PropTypes.oneOf([true, false]),
    autoplayTimeout: PropTypes.number
}

export default Slide
