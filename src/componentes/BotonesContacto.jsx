import React from 'react'
import CV from "../../multimedia/curriculum/JeronimoVega-DesarrolladorFrontEnd-CV.pdf";

const eventoMail = ()=>{
    const email = "jerovega2001@gmail.com";
    const asunto = "Contacto desde sitio web"
    const body = "Hola Jerónimo, te quería contactar por privado, mi nombre es:"

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(body)}`;
}

const eventoLinkedin = ()=>{
    const usuario = "jeronimo-vega";
    window.open(`https://www.linkedin.com/in/${usuario}/`, '_blank')
}

const eventoGitHub = ()=> {
    const usuario = "Jeroovega";
    window.open(`https://github.com/${usuario}`, "_blank");
}

const eventoCV = ()=>{
    const link = document.createElement("a");
    link.href = CV;
    link.download = "JeronimoVega-DesarrolladorFrontEnd-CV";
    link.click();
}

export const BotonesContacto = () => {
    return (
        <div className=' w-full flex justify-between flex-wrap max-lg:flex-col max-lg:text-lg max-lg:items-center'>
            <button 
            onClick={eventoMail}
            className='w-[50%] mb-6 py-2 flex justify-start pl-2  border-2 bg-[#ffffff]'>
                <img src='../../multimedia/imagenes/gmail.png' className='h-6 w-14 object-cover border-r-2 pr-4 max-lg:hidden' />
                <span className='pl-6 font-bold max-lg:p-0 max-lg:text-center max-lg:w-full'>GMAIL</span>
            </button>
            <button 
            onClick={eventoLinkedin}
            className='w-[50%] mb-6 py-2 flex justify-start pl-2 border-2 border-[#0274B3] bg-[#0274B3]'>
                <img src='../../multimedia/imagenes/linkedin.png' className='h-6 w-14  object-cover border-r-2 pr-4 max-lg:hidden' />
                <span className='pl-6 text-[#fff] font-bold max-lg:p-0 max-lg:text-center max-lg:w-full'>LINKEDIN</span>
            </button>
            <button 
            onClick={eventoGitHub}
            className='w-[50%] py-2 flex justify-start pl-2 border-2 bg-[#1C1C1C] border-[#1C1C1C] max-lg:mb-6'>
                <img src='../../multimedia/imagenes/github.png' className='h-6 w-14 object-cover border-r-2 pr-4 max-lg:hidden' />
                <span className='pl-6 text-[#fff] font-bold max-lg:p-0 max-lg:text-center max-lg:w-full'>GITHUB</span>
            </button>
            <button 
            onClick={eventoCV}
            className='w-[50%] py-2 flex justify-start pl-2 border-2 bg-[#ffffff]'>
                <img src='../../multimedia/imagenes/cv.png' className='h-6 w-14 object-cover border-r-2 pr-4 max-lg:hidden' />
                <span className='pl-6 text-[#000] font-bold max-lg:p-0 max-lg:text-center max-lg:w-full'>CURRICULUM VITAE</span>
            </button>
        </div>
    )
}
