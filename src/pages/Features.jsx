import React from 'react'
import phone2 from '../assets/Frame 3.svg'
import star from '../assets/star-05.svg'
import cube1 from '../assets/cube-02.svg'
import cube2 from '../assets/cube-04.svg'
import './features.css'


const Features = () => {
    return (
        <div className='flex flex-col-reverse justify-center items-center lg:w-[80%] lg:flex-row lg:justify-center lg:items-center'>
            <div className='lg:w-[40%] w-[80%] flex justify-end'>
                <img className='bg-transparent' src={phone2} alt="phone" />
            </div>
            <div className='lg:w-[60%] flex flex-col lg:justify-center w-[80%]'>
                <div className="flex flex-col items-center lg:items-start ">
                    <p className="text-primary font-medium text-2xl items-center lg:items-start">Features</p>
                    <p className="text-6xl font-bold items-start mb-10">Uifry Premium</p>
                    <div className='flex flex-col gap-10'>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3">
                                <img src={star} alt="" />
                                <p className="f-head">Budgeting Intervals</p>
                            </div>

                            <p className='fs'>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
                                Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3">
                                <img src={cube1} alt="" />
                                <p className="f-head">Budgeting Intervals</p>
                            </div>

                            <p className='fs'>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
                                Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex lg:items-center gap-3">
                                <img src={cube2} alt="" />
                                <p className="f-head">Budgeting Intervals</p>
                            </div>

                            <p className='fs'>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
                                Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Features