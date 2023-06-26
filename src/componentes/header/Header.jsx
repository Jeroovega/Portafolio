import React, { useState } from 'react';
import { TextoDinamico } from './TextoDinamico';


export const Header = ({setIdioma, idioma}) => {

    const [ingles, setIngles] = useState(false);
    const [espanol, setEspanol] = useState(true);

    const cambiarEspanol = () => {
        setEspanol(true)
        setIngles(false)
    }

    const cambiarIngles = () => {
        setEspanol(false)
        setIngles(true)
    }


    return (
        <div className='h-screen w-full relative bg-red overflow-y-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
                <video className='w-full h-full object-cover' src='/multimedia/header2.mp4' autoPlay loop muted></video>
            </div>
            <div className='top-[92%] left-[90%] z-50 relative flex bg-[#0b0c12] pr-2 p-2 rounded-xl w-28 max-sm:top-[90%] max-sm:left-[40%] max-md:top-[90%] max-md:left-[5%] max-lg:top-[90%] max-lg:left-[5%] max-xl:left-[85%]  '>
                <button
                    onClick={()=> {cambiarEspanol()}}>
                    <img src='../../../multimedia/imagenes/español.png' className='object-cover h-8 w-12 rounded-md' />
                </button>
                <button
                    onClick={()=> {cambiarIngles()}}>
                    <img src='../../../multimedia/imagenes/ingles.png' className='object-cover h-8 w-12 rounded-md' />
                </button>
                <button
                onClick={()=> {setIngles(!ingles), setEspanol(!espanol), setIdioma(!idioma)}}
                className={`bg-[#000000e5] h-8 w-12  ${espanol ? "left-14 transition-all duration-700" : "right-14 transition-all duration-700" } absolute`}></button>
            </div>

            <div className='relative h-full flex items-center max-sm:pb-16'>
                <div className='text-white max-sm:w-[100%]'>
                    <TextoDinamico cambiarEspanol={cambiarEspanol} cambiarIngles={cambiarIngles} espanol={espanol} ingles={ingles} /> {/* Agrega el componente TextoDinamico dentro del Header */}
                </div>
            </div>
        </div>
    );
};
