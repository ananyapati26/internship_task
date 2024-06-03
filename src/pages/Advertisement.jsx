import React from 'react'
import Frame from '../assets/advertise.png'

const Advertisement = () => {
    return (
        <>
            <div className="md:w-11/12 md:max-w-[1090px] md:mx-auto md:py-[100px] md:relative">
                <img src={Frame} alt='ok' className="w-[90%] pl-12 md:pl-0 md:w-full md:z-1" />
            </div>

        </>
    )
}

export default Advertisement