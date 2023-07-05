import React, { useState } from 'react';
import { HiOutlineHome, HiOutlineBookmarkAlt, HiFolderOpen, HiMail } from "react-icons/hi";
import { BotonesContacto } from './BotonesContacto';
import { ContactUs } from './ContactUs';
import mifoto from "../../multimedia/imagenes/yop2.jpeg"
import citas from "../../multimedia/imagenes/citas.webp"
import bateria from "../../multimedia/imagenes/bateria.webp"
import calculadora from "../../multimedia/imagenes/calculadora.webp"
import movieculture from "../../multimedia/imagenes/movieculture.webp"
import pomodoro from "../../multimedia/imagenes/pomodoro.webp"
import lp from "../../multimedia/imagenes/lp.jpeg"
import dam from "../../multimedia/imagenes/dam.jpeg"
import edlp from "../../multimedia/imagenes/edlp.jpeg"
import potrero from "../../multimedia/imagenes/potrero.jpeg"

export const Home = ({ idioma }) => {

    const [conocimientos, setConocimientos] = useState(false);
    const [home, setHome] = useState(true);
    const [trabajo, setTrabajo] = useState(false);
    const [contacto, setContacto] = useState(false);



    const mostrarHome = () => {
        setHome(true);
        setConocimientos(false);
        setTrabajo(false);
        setContacto(false);
    }
    const mostrarConocimientos = () => {
        setHome(false);
        setConocimientos(true);
        setTrabajo(false);
        setContacto(false);
    }
    const mostrarTrabajo = () => {
        setHome(false);
        setConocimientos(false);
        setTrabajo(true);
        setContacto(false);
    }
    const mostrarContacto = () => {
        setConocimientos(false)
        setHome(false)
        setTrabajo(false)
        setContacto(true)
    }


    return (
        <div className='flex w-full h-screen'>
            {/* Parte izquierda */}
            <div className='w-[30%] h-full max-lg:hidden'>
                <img className='h-full w-full object-cover' src={mifoto} alt='Foto personal' />
            </div>

            {/* Parte derecha */}
            <div className='bg-[#ffffff] w-[70%] h-full relative max-lg:w-[100%]'>
                {/* Parte menú */}
                <div id="foto" className='flex h-full items-center absolute'>
                    <div className='bg-[#ffffff] border-t-2 border-r-2 border-b-2 border-[#c2a9a9] w-14 flex flex-col gap-6 rounded-r-md hover:border-[#000d80] transition-all '>
                        <button
                            onClick={mostrarHome}
                            className=' bg-[#ffffff] border-t-2 pt-4 flex w-full items-center justify-center text-3xl'><HiOutlineHome alt="Botón sección Home" className={`${home ? "text-[#000d80]" : "text-[#8b8888]"}  hover:text-[#000d80] transition-all`} /></button>
                        <button
                            onClick={mostrarConocimientos}
                            className=' bg-[#ffffff] border-t-2 pt-4 flex w-full items-center justify-center text-3xl'><HiOutlineBookmarkAlt alt="Botón sección conocimientos" className={`${conocimientos ? "text-[#000d80]" : "text-[#8b8888]"}  hover:text-[#000d80] transition-all`} /></button>
                        <button
                            onClick={mostrarTrabajo}
                            className=' bg-[#ffffff] border-t-2 pt-4 flex w-full items-center justify-center text-3xl'><HiFolderOpen alt="Botón sección trabajos" className={`${trabajo ? "text-[#000d80]" : "text-[#8b8888]"}  hover:text-[#000d80] transition-all`} /></button>
                        <button
                            onClick={mostrarContacto}
                            className=' bg-[#ffffff] border-t-2 pb-4 pt-4 flex w-full items-center justify-center text-3xl '><HiMail alt="Botón sección contacto" className={`${contacto ? "text-[#000d80]" : "text-[#8b8888]"}  hover:text-[#000d80] transition-all`} /></button>
                    </div>
                </div>
                {/* Parte Home */}
                <div className={`h-full pl-20 ${home ? "flex" : "hidden"} transition-all max-xl:overflow-y-scroll max-xl:barradesliz`}>
                    <div className='w-full bg-[#ffffff] '>

                        {/* Titulo */}
                        <div className='w-full cursor-default'>
                            <h1 className='mt-10 flex items-center text-5xl font-impact text-[#000d80]'>{idioma ? "información general." : "general information."}</h1>
                        </div>

                        <div className='lg:flex xl:flex w-full mt-10 '>
                            {/* Parte izquierda */}
                            <div className='w-[50%] bg-[#ffffff] pr-16 cursor-default max-lg:w-[100%] pb-4'>
                                <h2 className='text-[#000] font-bold font-segoe text-lg'>{idioma ? "Acerca de mi." : "About me."}</h2>
                                <div className='w-32 h-0.5 bg-[#D6D6D6]'></div>
                                <p className='font-segoe text-md pt-6 max-lg:pb-10 '>
                                    {idioma ? (<>¡Hola! Soy <span className="text-[#000d80] font-semibold">Jerónimo Vega</span>, un apasionado de la programación y las artes audiovisuales, de Buenos Aires, Argentina. A mis 22 años, me considero una persona curiosa y amante de los desafíos. Disfruto sumergirme en la incertidumbre y encontrar soluciones creativas.</>
                                    ) : (<>
                                        Hello! I'm <span className="text-[#000d80] font-semibold">Jerónimo Vega</span>, a passionate programmer and visual arts enthusiast from Buenos Aires, Argentina. At 22 years old, I consider myself a curious individual who loves challenges. I enjoy diving into uncertainty and finding creative solutions.
                                    </>)}
                                    <br />
                                    <br />
                                    {idioma ? (<>Soy <span className='text-[#000d80] font-semibold'>autodidacta</span> y siempre estoy sediento de nuevos
                                        conocimientos. Hace más de un año, descubrí mi
                                        verdadera pasión por el <span className='text-[#000d80] font-semibold'>desarrollo Front-End</span> y desde
                                        entonces, cada día es una oportunidad para aprender
                                        y disfrutar de mi trabajo.</>
                                    ) : (<>
                                        I am a <span className='text-[#000d80] font-semibold'>self-taught learner</span> and I am always thirsty for new knowledge. Over a year ago, I discovered my true passion for <span className='text-[#000d80] font-semibold'>Front-End development</span>, and since then, every day is an opportunity to learn and enjoy my work.
                                    </>)}
                                    <br />
                                    <br />
                                    {idioma ? (<>Además de la programación, también tengo experiencia
                                        en las artes audiovisuales, especialmente en la <span className='text-[#000d80] font-semibold'>edición de video</span> y el <span className='text-[#000d80] font-semibold'>diseño</span>. Esta combinación me permite
                                        complementar mis habilidades en el desarrollo
                                        front-end, creando sitios web visualmente atractivos y
                                        siguiendo las últimas tendencias.</>
                                    ) : (<>
                                        In addition to programming, I also have experience in visual arts, particularly <span className='text-[#000d80] font-semibold'>video editing</span> and <span className='text-[#000d80] font-semibold'>design</span>. This combination allows me to complement my skills in front-end development, creating visually appealing websites that follow the latest trends.
                                    </>)}
                                    <br />
                                    <br />
                                    {idioma ? (<>En mi portafolio, encontrarás un resumen de mis
                                        conocimientos, ejemplos de mi trabajo y una sección de
                                        contacto para que podamos conocernos mejor.
                                        ¡Agradezco tu tiempo y espero tener la oportunidad
                                        de colaborar juntos! <span className='text-[#000d80] font-semibold'>- jv</span></>
                                    ) : (<>
                                        In my portfolio, you will find a summary of my expertise, examples of my work, and a contact section so we can get to know each other better. I appreciate your time and look forward to the opportunity to collaborate together! <span className='text-[#000d80] font-semibold'>- jv</span>
                                    </>)}
                                </p>
                            </div>
                            {/* Parte derecha */}
                            <div className='w-[50%] bg-[#ffffff] mr-4 cursor-default max-lg:w-[100%] pb-4'>
                                <h2 className='text-[#000] font-bold font-segoe text-lg'>{idioma ? "Formación Académica." : "Academic Education."}</h2>
                                <div className='w-32 h-0.5 bg-[#D6D6D6]'></div>
                                <div className='pt-6 '>
                                    <div>
                                        <h3 className='font-semibold font-segoe-italic text-[#707070] text-xl'>Digital House - Potrero Digital - Front-End Developer</h3>
                                        <p>{idioma ? "Ingreso 2023 - Actualidad" : "Admission 2023 - Present"}</p>
                                    </div>
                                    <div className='pt-8'>
                                        <h3 className='font-semibold font-segoe-italic text-[#707070] text-xl'>OpenBootcamp - Front-End</h3>
                                        <p>{idioma ? "Ingreso 2022 - Actualidad" : "Admission 2022 - Present"}</p>
                                    </div>
                                </div>

                                <h2 className='text-[#000] font-bold font-segoe text-lg mt-8'>{idioma ? "Formación Complementaria." : "Additional Training/Education."}</h2>
                                <div className='w-32 h-0.5 bg-[#D6D6D6] '></div>
                                <div className='pt-6 text-sm font-segoe-italic'>
                                    <div>
                                        <h3 className='font-semibold font-italic text-[#707070] text-md hover:text-[#a8a8a8]'>
                                            <a href='https://www.freecodecamp.org/certification/Jeroovega/front-end-development-libraries' target={"blank_"}>Front-End Development Libraries - freeCodeCamp - 2023
                                            </a>
                                        </h3>
                                        <h3 className='font-semibold font-italic text-[#707070] text-md pt-6 hover:text-[#a8a8a8]'>
                                            <a href='https://www.freecodecamp.org/certification/Jeroovega/javascript-algorithms-and-data-structures' target={"blank_"}>JavaScript Algorithms and Data Structures - freeCodeCamp
                                                2023</a></h3>
                                        <h3 className='font-semibold font-italic text-[#707070] text-md pt-6 hover:text-[#a8a8a8]'>Responsive Web Design - freeCodeCamp - 2023</h3>
                                        <h3 className='font-semibold font-italic text-[#707070] text-md pt-6 hover:text-[#a8a8a8]'>GIT - OpenBootcamp - 2022</h3>
                                        <h3 className='font-semibold font-italic text-[#707070] text-md pt-6 hover:text-[#a8a8a8]'>Curso profesional de Javascript - CodigoFacilito - 2022</h3>
                                        <h3 className='font-semibold font-italic text-[#707070] text-md pt-6 hover:text-[#a8a8a8]'>JavaScript Básico - OpenBootcamp
                                            (Programación Orientada a Web y Base de datos Libre) - 2022 </h3>
                                        <h3 className='font-semibold font-italic text-[#707070] text-md pt-6 hover:text-[#a8a8a8]'>HTML Y CSS - OpenBootcamp
                                            (Programación Orientada a Web y Base de datos Libre) 2022  </h3>
                                        <h3 className='font-semibold font-italic text-[#707070] text-md pt-6 hover:text-[#a8a8a8]'>HTML5 Y CSS3  - Alura Latam - 2022</h3>
                                        <h3 className='font-semibold font-italic text-[#707070] text-md pt-6 hover:text-[#a8a8a8] max-lg:pb-10'>LÓGICA DE PROGRAMACIÓN - Alura Latam - 2022</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Parte Estudios */}
                <div className={`h-full pl-20 ${conocimientos ? "flex" : "hidden"} transition-all max-xl:overflow-y-scroll max-xl:barradesliz `}>
                    <div className='w-full bg-[#ffffff] '>

                        {/* Titulo */}
                        <div className='w-full cursor-default'>
                            <h1 className='mt-10 flex items-center text-5xl font-impact text-[#000d80]'>{idioma ? "habilidades" : "skills/expertise."}</h1>
                        </div>

                        <div className='lg:flex xl:flex-full mt-10'>
                            {/* Parte izquierda */}
                            <div className='w-[50%] bg-[#ffffff] mr-4 cursor-default max-lg:w-[100%] pb-4'>
                                <div>
                                    <h2 className='text-[#000] font-bold font-segoe text-lg'>{idioma ? "Lenguajes." : "Programming Languages."}</h2>
                                    <div className='w-32 h-0.5 bg-[#D6D6D6]'></div>
                                    <div className='pt-6 '>
                                        <h3 className=' font-extralight text-3xl hover:text-[#e96228] cursor-pointer'>HTML</h3>
                                        <h3 className=' font-extralight text-3xl mt-4 hover:text-[#31a4d5] cursor-pointer'>CSS</h3>
                                        <h3 className=' font-extralight text-3xl mt-4 hover:text-[#f7d33d] cursor-pointer'>JavaScript</h3>
                                        <h3 className=' font-extralight text-3xl mt-4 hover:text-[#92e7f7] cursor-pointer'>React.JS</h3>
                                    </div>
                                </div>

                                <div>
                                    <h2 className='text-[#000] font-bold font-segoe text-lg mt-8'>{idioma ? "Conocimientos Complementarios." : "Additional Knowledge/Skills."} </h2>
                                    <div className='w-32 h-0.5 bg-[#D6D6D6] '></div>
                                    <div className='pt-6 text-sm'>
                                        <div>
                                            <h3 className='font-extralight text-2xl hover:font-semibold hover:text-[#D20D0D]'><span className='text-[#000]'>React</span><span>Router</span></h3>
                                            <h3 className=' font-extralight text-2xl mt-4 hover:text-[#7010EF]'>Bootstrap</h3>
                                            <h3 className=' font-extralight text-2xl mt-4 hover:text-[#0F2EA9]'>Axios</h3>
                                            <h3 className=' font-extralight text-2xl mt-4 hover:text-[#0865A6]'>jQuery</h3>
                                            <h3 className=' font-extralight text-2xl mt-4 hover:text-[#36B7F0]'>TailwindCSS</h3>
                                            <h3 className=' font-extralight text-2xl mt-4 hover:text-[#E94D32]'>GIT</h3>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* Parte derecha */}
                            <div className='w-[50%] bg-[#ffffff] pr-16 cursor-default max-lg:w-[100%] pb-4'>
                                <div>
                                    <h2 className='text-[#000] font-bold font-segoe text-lg'>Search Engine Optimization. (SEO).</h2>
                                    <div className='w-32 h-0.5 bg-[#D6D6D6]'></div>
                                    <p className='font-segoe text-sm pt-6 '>
                                        <span className='text-[#000D80] font-semibold'>{idioma ? "Investigación de palabras clave." : "Keyword Research."}</span>
                                        <br />
                                        <br />
                                        <span className='text-[#000D80] font-semibold'>{idioma ? "Optimización On-Page:" : "On-Page Optimization:"}</span> {idioma ? "Experiencia en la optimización de elementos on-page, como la estructura de URL, la etiqueta de título, meta descripciones, encabezados (H1, H2, etc.), etiquetas alt para imágenes, enlaces internos y la optimización del contenido en general." : "Experience in optimizing on-page elements such as URL structure, title tags, meta descriptions, headings (H1, H2, etc.), alt tags for images, internal linking, and overall content optimization."}
                                        <br />
                                        <br />
                                        <span className='text-[#000D80] font-semibold'>{idioma ? "Mejora de la velocidad de carga: " : "Improvement of Loading Speed:"}</span>
                                        {idioma ? "Capacidad para optimizar la velocidad de carga de los sitios web, ya que es un factor importante para el SEO. Experiencia en la compresión de imágenes, a optimización de la entrega de archivos estáticos." : "Ability to optimize website loading speed, as it is an important factor for SEO. Experience in image compression and optimization of static file delivery."}
                                        <br />
                                        <br />
                                        <span className='text-[#000D80] font-semibold'>{idioma ? "Optimización móvil: " : "Mobile Optimization: "}</span>
                                        {idioma ? "Conocimiento en la optimización para dispositivos móviles. Experiencia en el diseño y desarrollo de sitios web responsivos y amigables para dispositivos móviles, mejorar la experiencia de usuario en dispositivos móviles." : "Knowledge in optimizing for mobile devices. Experience in designing and developing responsive and mobile-friendly websites, improving the user experience on mobile devices."}</p>
                                </div>

                                <div>
                                    <h2 className='text-[#000] font-bold font-segoe text-lg mt-6'>{idioma ? "Habilidades Blandas." : "Soft Skills."} </h2>
                                    <div className='w-32 h-0.5 bg-[#D6D6D6]'></div>
                                    <p className='font-segoe text-sm pt-6 '>
                                        {idioma ? "Flexibilidad y adaptación al cambio." : "Flexibility and Adaptability."}
                                        <br />
                                        {idioma ? "Autodidactismo." : "Self-learning."}
                                        <br />
                                        {idioma ? "Organización." : "Organization."}
                                        <br />
                                        {idioma ? "Responsabilidad." : "Responsibility."}
                                        <br />
                                        {idioma ? "Trabajo en equipo." : "Teamwork."}
                                        <br />
                                        {idioma ? "Gestión del tiempo." : "Time Management."}</p>
                                </div>

                                <div>
                                    <h2 className='text-[#000] font-bold font-segoe text-lg mt-6'>{idioma ? "Idiomas." : "Languages."}</h2>
                                    <div className='w-32 h-0.5 bg-[#D6D6D6]'></div>
                                    <p className='font-segoe text-sm pt-6 '>{idioma ? "Inglés (nivel - B1)" : "Spanish (native)"}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Parte Trabajos */}
                <div className={`h-full pl-20 pr-10 ${trabajo ? "flex" : "hidden"} transition-all overflow-y-scroll barradesliz`}>
                    <div className='w-full bg-[#ffffff] '>

                        {/* Titulo */}
                        <div className='w-full cursor-default'>
                            <h1 className='mt-10 flex items-center text-5xl font-impact text-[#000d80] max-lg:text-4xl'>{idioma ? "trabajos/proyectos" : "work/projects."}</h1>
                        </div>
                        {/* Card trabajo */}
                        <div className='flex w-full mt-10 max-xl:justify-center'>
                            {/* Card trabajo */}
                            <div className='grid sm:grid-cols-1 md-grid-cols-2  lg:grid-cols-3'>
                                {/* Titulo trabajo */}
                                <div className='hover:text-[#FF0F0F] transition-all duration-700'>
                                    <a href='https://movieculture.netlify.app/' target={'_blank'}>
                                        <h3 className='font-semibold text-xl cursor-default'><span className=''>Movie</span><span className='text-[#000000]'>Culture</span></h3>
                                        <div className='w-32 h-0.5 bg-[#D6D6D6] mb-2 cursor-default'></div>
                                        <img className='mb-6 h-44 w-96 opacity-50 hover:opacity-100 transition-all duration-700' src={movieculture} />
                                    </a>

                                </div>
                                <div className='hover:text-[#D3D93C] transition-all duration-700'>
                                    <a href='https://potreroempleoproyecto.netlify.app/' target={"_blank"}>
                                        <h3 className='font-semibold text-xl cursor-poiner '>{idioma ? "Potrero Empleos" : "Potrero Empleos"}</h3>
                                        <div className='w-32 h-0.5 bg-[#D6D6D6] mb-2 cursor-default'></div>
                                        <img className='mb-6 h-44 w-96 opacity-50 hover:opacity-100 transition-all duration-700' src={potrero} />
                                    </a>
                                </div>


                                <div>
                                    <a href='https://motivateporhoy.netlify.app/' target={'_blank'}>
                                        <h3 className='font-semibold text-xl cursor-default'>{idioma ? "generador de frases" : "phrase generator."}</h3>
                                        <div className='w-32 h-0.5 bg-[#D6D6D6] mb-2 cursor-default'></div>
                                        <img className='mb-6 h-44 w-96 opacity-50 hover:opacity-100 transition-all duration-700' src={citas} />
                                    </a>
                                </div>

                                <div className='hover:text-[#8A30C6] transition-all duration-700'>
                                    <a href='https://pomodorojv.netlify.app/' target={'_blank'}>
                                        <h3 className='font-semibold text-xl cursor-default '>pomodoro study</h3>
                                        <div className='w-32 h-0.5 bg-[#D6D6D6] mb-2 cursor-default'></div>
                                        <img className='mb-6 h-44 w-96 opacity-50 hover:opacity-100 transition-all duration-700' src={pomodoro} />
                                    </a>

                                </div>

                                <div className='hover:text-[#E4972A] transition-all duration-700'>
                                    <a href='https://calculadorajv.netlify.app/' target={'_blank'}>
                                        <h3 className='font-semibold text-xl cursor-default '>{idioma ? "calculadora iOS" : "iOS calculator."}</h3>
                                        <div className='w-32 h-0.5 bg-[#D6D6D6] mb-2 cursor-default'></div>
                                        <img className='mb-6 h-44 w-96 opacity-50 hover:opacity-100 transition-all duration-700' src={calculadora} />
                                    </a>
                                </div>

                                <div className='hover:text-[#280606] transition-all duration-700'>
                                    <a href='https://bateriajv.netlify.app/' target={'_blank'}>
                                        <h3 className='font-semibold text-xl cursor-default '>{idioma ? "bateria online" : "online drum machine."}</h3>
                                        <div className='w-32 h-0.5 bg-[#D6D6D6] mb-2 cursor-default'></div>
                                        <img className='mb-6 h-44 w-96 opacity-50 hover:opacity-100 transition-all duration-700' src={bateria} />
                                    </a>
                                </div>


                                <div className='hover:text-[#280606] transition-all duration-700'>
                                    <a>
                                        <h3 className='font-semibold text-xl cursor-default '>{idioma ? "la plata turismo (proximamente)" : "la plata tourism. (soon)."}</h3>
                                        <div className='w-32 h-0.5 bg-[#D6D6D6] mb-2 cursor-default'></div>
                                        <img className='mb-6 h-44 w-96 opacity-50 hover:opacity-100 transition-all duration-700' src={lp} />
                                    </a>
                                </div>
                                <div className='hover:text-[#280606] transition-all duration-700'>
                                    <a>
                                        <h3 className='font-semibold text-xl cursor-default '>{idioma ? "la plata turismo (proximamente)" : "la plata tourism. (soon)."}</h3>
                                        <div className='w-32 h-0.5 bg-[#D6D6D6] mb-2 cursor-default'></div>
                                        <img className='mb-6 h-44 w-96 opacity-50 hover:opacity-100 transition-all duration-700' src={dam} />
                                    </a>
                                </div>
                                <div className='hover:text-[#280606] transition-all duration-700'>
                                    <a>
                                        <h3 className='font-semibold text-xl cursor-default '>{idioma ? "la plata turismo (proximamente)" : "la plata tourism. (soon)."}</h3>
                                        <div className='w-32 h-0.5 bg-[#D6D6D6] mb-2 cursor-default'></div>
                                        <img className='mb-6 h-44 w-96 opacity-50 hover:opacity-100 transition-all duration-700' src={edlp} />
                                    </a>
                                </div>

                            </div>
                        </div>
                        {/* texto información trabajo */}
                        <div>
                            <p className='mb-5 max-lg:text-lg'>
                                {idioma ? "Las principales tecnologías utilizadas en los siguientes trabajos se resumen en React.JS como framework principal, acompañado de Vite para optimizar el rendimiento y complementado con el framework de CSS TailwindCSS." : "The main technologies used in the following projects are summarized as follows: React.js as the primary framework, accompanied by Vite for performance optimization, and complemented with the CSS framework Tailwind CSS."}
                            </p>
                            <p className='mb-5 pb-5 border-b-2 max-lg:text-lg'>
                                {idioma ? "El diseño de cada uno de los sitios web y las aplicaciones es totalmente propio, basado en una estética minimalista y aesthetic, buscando la concentración de información sobre puntos vitales que atraen el interés del usuario, como colores agradables y repetitivos en la página, o fondos llamativos. Todo diseño es primero creado y procesado por herramientas de Diseño UX/UI, en mi caso utilizo Adobe Xd para la creación de prototipos de cada página web." : "The design of each website and application is completely original, based on a minimalist and aesthetic aesthetic, aiming for the concentration of information on vital points that attract user interest, such as pleasant and repetitive colors on the page or eye-catching backgrounds. All designs are first created and processed using UX/UI design tools. In my case, I use Adobe Xd for creating prototypes of each web page."}
                            </p>

                            <p className='mb-5 max-lg:text-lg'>
                                <a href='https://movieculture.netlify.app/' target={'_blank'}>
                                    <span className='text-[#FF0F0F] font-semibold'>Movie</span><span className='font-semibold'>Culture</span>
                                </a>,
                                {idioma ? " surge como mi primer proyecto individual completamente elaborado, ya que utilice las diversas tecnologías mencionadas, además realicé una consulta a la API de The Movie Database para recoger la información necesaria para el funcionamiento. Es un proyecto basado en una aplicación web de entretenimiento cinéfilo, se basa en un sistema de muestra de tarjetas y a raíz de eso el usuario debe adivinar tres parametros: El nombre de la película, el año que fue lanzada y el director de la cinta. Cada respuesta correcta otorga una sumatoria de 10 puntos, la cual se acumula en una puntuación que se puede reiniciar. La aplicación cuenta con un proceso de selección filtrada por la popularidad de las peliculas, aquellas que según The Movie Database pasen los 20 puntos de popularidad serán mostradas, de lo contrario se filtrara a la siguiente pelicula que cumpla con el requisito, esto surge como consecuencia de contar con una gran base de datos y tener el problema de mostrar películas no tan conocidas." : " my first fully developed individual project, was created using the mentioned technologies. I also made use of The Movie Database API to collect the necessary information for its functionality. This project is a web application centered around cinephile entertainment. It features a card display system where users are prompted to guess three parameters: the movie title, the release year, and the director of the film. Each correct answer earns the user 10 points, which accumulate in a score that can be reset.                                The application includes a selection process filtered by movie popularity. Only movies with a popularity score of over 20, according to The Movie Database, will be shown. If a movie doesn't meet this popularity threshold, the application will filter to the next movie that meets the requirement. This approach was implemented due to the large database size and the challenge of showcasing lesser-known films."}
                            </p>
                            <p className='mb-5 max-lg:text-lg'>
                                <a href='https://motivateporhoy.netlify.app/' target={'_blank'}><span className='font-semibold'>{idioma ? "generador de frases" : "phrase generator"}</span></a>
                                {idioma ? ", es uno de mis 4 proyectos necesarios para la aprobación de mi certificación como Front-End Development Libraries de freeCodeCamp, en este proyecto utilicé una API externa para obtener una base de citas textuales, luego mediante algoritmos logré realizar un generador de frases aleatorias con su respectivo autor, además le agregué la función de poder publicar esa frase en la red social Twitter." : ", is one of my four projects required for the completion of my Front-End Development Libraries certification from freeCodeCamp. For this project, I utilized an external API to fetch a collection of famous quotes. Using algorithms, I created a random phrase generator that displays a quote along with its respective author. Additionally, I added the functionality to share the generated quote on the Twitter social media platform."}
                            </p>
                            <p className='mb-5 max-lg:text-lg'>
                                <a href='https://pomodorojv.netlify.app/' target={'_blank'}><span className='text-[#8A30C6] font-semibold'>pomodoro study</span></a>
                                {idioma ? ", es otro proyecto de la certificación de Front-End Development Libraries de freeCodeCamp, es un cronometro basado en el método pomodoro utilizado por las personas para concentrarse realizando que haceres durante 25 minutos sin desconcentración y aplicando un intervalo de 5 minutos como descanso. La aplicación también cuenta con su propio ajuste del método para realizar mayores tiempos de esfuerzo y de descanso para ajustarse a lo que busca el usuario." : ", is another project from the Front-End Development Libraries certification by freeCodeCamp. It is a timer based on the Pomodoro Technique, a time management method used by individuals to enhance focus and productivity. The technique involves working on tasks for 25 minutes without any distractions, followed by a 5-minute break. The Pomodoro Study application allows users to customize their work and break durations based on their preferences. They can adjust the timer to longer periods of focused work and longer breaks, aligning with their specific needs and goals."}
                            </p>
                            <p className='mb-5 max-lg:text-lg'>
                                <a href='https://calculadorajv.netlify.app/' target={'_blank'}><span className='text-[#E4972A] font-semibold'>{idioma ? "calculadora iOS" : "iOS calculator"}</span></a>
                                {idioma ? ", es otro proyecto de la certificación de Front-End Development Libraries de freeCodeCamp, es una calculadora funcional basada en la interfaz de un smartphone IOS." : ", is another project from the Front-End Development Libraries certification by freeCodeCamp. It is a functional calculator designed to mimic the interface of an iOS smartphone. The calculator allows users to perform various mathematical operations, including addition, subtraction, multiplication, and division. It provides a user-friendly interface resembling the familiar calculator app found on iOS devices."}
                            </p>
                            <p className='mb-5 pb-5 border-b-2 max-lg:text-lg'>
                                <a href='https://bateriajv.netlify.app/' target={'_blank'}><span className='text-[#280606] font-semibold'>{idioma ? "bateria online" : "online drum machine"}</span></a>
                                {idioma ? ", es otro proyecto de la certificación de Front-End Development Libraries de freeCodeCamp, consta en un panel de sonidos completamente funcionales y variados con los cuales se puede emular una bateria online. Lo interesante de este proyecto es que se puede usar tanto pulsando la casilla como oprimiento la tecla que muestra en el panel, también hay un botón de 'Switch' que cambia los sonidos." : ", is another project from the Front-End Development Libraries certification by freeCodeCamp. It consists of a panel with fully functional and diverse sound buttons that allow users to emulate an online drum kit. In this project, users can trigger the sounds either by clicking on the corresponding buttons or by pressing the corresponding keys displayed on the panel. Additionally, there is a 'Switch' button that allows users to change the set of sounds available for the drum kit."}
                            </p>
                            <p className='pb-5 max-lg:text-lg'>
                                {idioma ? "Por último mencionar que estos proyectos están supervisados con estrategias de SEO necesarias para mejorar el posicionamiento y optimizados para un buen rendimiento, también cada página está pensada para su utilización en dispositivos moviles por lo que cuenta con un diseño responsivo adecuado. Todos los trabajos que realicé son totalmente propios, y con un esfuerzo elevado ya que la mayoría del conocimiento lo obtuve mediante las certificaciones y formaciones tomadas, pero mi mayor tutor es el prueba y error constante, me apasiona la práctica y considero que es lo más necesario en el mundo de la programación por lo tanto mi mayor tiempo lo paso escribiendo código y a su vez equivocandome, ya que así me realizo." : "Lastly, I would like to mention that these projects are supervised with necessary SEO strategies to improve their positioning and optimized for optimal performance. Each page is designed to be mobile-friendly, ensuring a responsive layout. All the work I have done is entirely original, and it has required significant effort as most of my knowledge has been acquired through certifications and training. However, my greatest mentor is constant trial and error. I am passionate about hands-on practice, and I believe it is essential in the world of programming. Therefore, I spend most of my time writing code and, in the process, making mistakes, as that's how I grow and improve."}
                            </p>
                        </div>

                    </div>
                </div>


                {/* Parte Contacto */}
                <div className={`h-full  pl-20 pr-10 ${contacto ? "flex" : "hidden"} transition-all max-xl:overflow-y-scroll max-xl:barradesliz`}>
                    <div className='w-full bg-[#ffffff] '>

                        {/* Titulo */}
                        <div className='w-full cursor-default'>
                            <h1 className='mt-10 flex items-center text-5xl font-impact text-[#000d80] max-lg:justify-center'>{idioma ? "contacto." : "contact."}</h1>
                        </div>

                        <div className='flex flex-col w-full h-full mt-10'>
                            {/* Botones Contacto */}
                            <div>
                                <BotonesContacto></BotonesContacto>
                            </div>
                            {/* Formulario Contacto */}
                            <div className='w-full flex justify-center'>
                                <ContactUs idioma={idioma}></ContactUs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
