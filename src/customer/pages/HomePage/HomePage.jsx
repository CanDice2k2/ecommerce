import React from 'react'
import MainCrosel from '../../components/HomeCarosel/MainCrosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { men_jacket } from "../../../Data/men_jacket";

const HomePage =()=>{
    return (
        <div>
            <MainCrosel/>
            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarosel data={men_jacket} sectionName={"Men's Jacket"}/>
                <HomeSectionCarosel data={men_jacket} sectionName={"Men's Jacket"}/>
                <HomeSectionCarosel data={men_jacket} sectionName={"Men's Jacket"}/>
                <HomeSectionCarosel data={men_jacket} sectionName={"Men's Jacket"}/>
                <HomeSectionCarosel data={men_jacket} sectionName={"Men's Jacket"}/>
            </div>
        </div>

    )
}
export default HomePage