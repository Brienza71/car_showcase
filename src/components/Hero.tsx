"use client"

import React from 'react';
import { CustomButton} from '.';


const Hero = () => {
    const handleScroll = () => {

    }
    return(
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>Encontre, reserve ou alugue um carro — Rápido e fácil!</h1>
                <p className='hero__subtitle'>Streamline your car rental experience with our effortless booking process.</p>
                <CustomButton
                    title="Explore Cars"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleChange={handleScroll} />
                
            </div>
        </div>
    )
}

export default Hero