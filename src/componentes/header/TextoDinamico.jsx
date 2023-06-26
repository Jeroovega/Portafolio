import React, { useState } from 'react';
import { useInterval } from './useInterval';
import { Link as ScrollLink } from 'react-scroll';

export const TextoDinamico = ({ espanol }) => {
  const palabras = ['JERÓNIMO VEGA', 'PROGRAMADOR FRONT-END', 'DE ARGENTINA'];
  const [indicePalabra, setIndicePalabra] = useState(0);
  const [letrasMostradas, setLetrasMostradas] = useState(1);
  

  useInterval(() => {
    setLetrasMostradas((letras) => letras + 1);
    if (letrasMostradas >= palabras[indicePalabra].length + 1) {
      setIndicePalabra((indice) => (indice + 1) % palabras.length);
      setLetrasMostradas(1);
    }
  }, 100);

  const palabraActual = palabras[indicePalabra];
  const letrasActuales = palabraActual.slice(0, letrasMostradas);

  const words = ['JERÓNIMO VEGA', 'FRONT-END DEVELOPER', 'FROM ARGENTINA'];
  const [indexWords, setIndexWords] = useState(0);
  const [keyShowed, setKeyShowed] = useState(1);
  

  useInterval(() => {
    setKeyShowed((key) => key + 1);
    if (keyShowed >= words[indexWords].length + 1) {
      setIndexWords((index) => (index + 1) % words.length);
      setKeyShowed(1);
    }
  }, 100);

  const wordActual = words[indexWords];
  const keyActual = wordActual.slice(0, keyShowed);

  return (
    <div className='px-8 w-[48rem] max-sm:w-[100%] max-md:w-[100%] max-lg:w-[100%]'>
      <h1 className='font-impact text-7xl cursor-default max-sm:text-6xl max-sm:text-center'>{espanol ? "SOY" : "I'M"}</h1>
      <h1 className='font-impact text-7xl text-[hsl(234,100%,25%)] cursor-default flex-wrap max-sm:w-[100%] max-sm:text-6xl max-sm:text-center max-sm:mb-2 max-md:w-[100%]'>{espanol ? letrasActuales : keyActual}</h1>
      <p className='w-[33rem] mt-3 mb-6 cursor-default max-sm:w-[100%]'>{espanol ? "Bienvenido/a a mi portafolio personal. Aquí encontrarás información personal y ejemplos de mi trabajo, demostrando mi pasión por la creación de sitios web atractivos y funcionales. ¡Conóceme y descubre mis proyectos! -JV" : "Welcome to my personal portfolio. Here you will find personal information and examples of my work, showcasing my passion for creating attractive and functional websites. Get to know me and explore my projects! - JV" }
         </p>
      <ScrollLink
        to='foto'
        smooth={true}
        duration={300}
        className='bg-[#535ebd00] border-4 border-[#000d80] px-48 py-2 rounded-md font-segoe font-bold cursor-pointer max-sm:px-0 max-sm:flex max-sm:justify-center'
      >
        {espanol ? "MÁS INFORMACIÓN" : "SHOW MORE"}
      </ScrollLink>
    </div>
  );
};
