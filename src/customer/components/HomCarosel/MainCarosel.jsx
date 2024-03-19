import React from 'react'
import { mainCaroselData } from './MainCaroselData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
const MainCarosel = () => {

    const items = mainCaroselData.map((item) => <img className='cursor-pointer z-0' role='presentation' src={item.image} alt=""/>)
  return (
    <AliceCarousel
        animationType="fadeout" 
        animationDuration={1000}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        items={items}
    />
  )
}

export default MainCarosel