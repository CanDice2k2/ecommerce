import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCaroselData } from './MainCaroselData'

const items = mainCaroselData.map((item) => <img className='cursor-pointer z-0' role='presentation' src={item.image} alt=""/>)

const MainCrosel = () => (
    <AliceCarousel
    animationType="fadeout" 
    animationDuration={1000}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite
    items={items}
    />
);

export default MainCrosel