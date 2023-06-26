import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = ({idioma}) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fpc2klu', 'template_1vtapu8', form.current, 'AMNySbuDoHSHU9Xic')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const [mouseHover, setMouseHover] = useState(false);
    const [mouseHover2, setMouseHover2] = useState(false);
    const [inputValor, setInputValor] = useState("");
    const [emailValor, setEmailValor] = useState("");

    const mouseAdentro = () => {
        setMouseHover(true)
    }
    const mouseAfuera = () => {
        setMouseHover(false)
    }
    const mouseAdentro2 = () => {
        setMouseHover2(true)
    }
    const mouseAfuera2 = () => {
        setMouseHover2(false)
    }

    const textoInput = (e) => {
        setInputValor(e.target.value)
    }

    const emailInput = (e) => {
        setEmailValor(e.target.value)
    }


    return (
        <form ref={form} onSubmit={sendEmail} className="w-[100%] rounded-2xl px-10 my-20 py-16 flex items-center justify-center flex-col bg-gradient-to-b from-[#3da3daa0] to-[#605e5e9c] ">
            <div className='flex w-full justify-around max-lg:flex-col max-lg:gap-6'>
                <div className='relative flex items-center'>
                    <label
                        onMouseEnter={mouseAdentro}
                        onMouseLeave={mouseAfuera}
                        className={`absolute ml-2 font-semibold ${mouseHover || inputValor ? "-translate-y-10 transition-all duration-500 border-b-2 border-[#000d80]" : "translate-y-0 transition-all duration-500"}`}>{idioma ? "Nombre - Apellido" : "First name - Last name"}</label>
                    <input
                        onMouseEnter={mouseAdentro}
                        onMouseLeave={mouseAfuera}
                        value={inputValor}
                        onChange={textoInput}
                        className='bg-[#fffefe59] py-2 px-4 rounded-md outline-none' type="text" name="user_name" required />
                </div>
                <div className='relative flex items-center'>
                    <label
                        onMouseEnter={mouseAdentro2}
                        onMouseLeave={mouseAfuera2}
                        className={`absolute ml-2 font-semibold ${mouseHover2 || emailValor ? "-translate-y-10 transition-all duration-500 border-b-2 border-[#000d80]" : "translate-y-0 transition-all duration-500"}`}>Email
                    </label>
                    <input
                        onMouseEnter={mouseAdentro2}
                        onMouseLeave={mouseAfuera2}
                        value={emailValor}
                        onChange={emailInput}
                        className='bg-[#fffefe59] py-2 px-4 rounded-md outline-none'
                        type="email" name="user_email" required />
                </div>
            </div>
            <div className='w-[100%] flex flex-col items-center mt-6'>
                <label className='mb-2 ml-2 self-start font-semibold border-b-2 border-[#000d80]'>{idioma ? "Mensaje" : "Message"}</label>
                <textarea name="message" required  placeholder={`${idioma ? "Deja aquí tu mensaje para contactarme por privado, estaré leyendo tu mensaje en la brevedad" : "Leave your message here to contact me privately. I will read your message as soon as possible."}`} className="w-[100%] bg-[#fffefe59] h-40 resize-none rounded-lg outline-none p-2" />
            </div>
            <input className='bg-[#000d80] mt-6 text-[#fff] font-bold py-2 px-10 rounded-2xl cursor-pointer hover:bg-[#3342cc] transition-all duration-500' type="submit" value={`${idioma ? "Enviar" : "Send"}`} />
        </form>
    );
};