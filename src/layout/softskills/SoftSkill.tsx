import { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";

import "./soft.scss";

export const SoftSkills = () => {

    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    }, [])

    return (
        <div className="soft-skill">
            <h1 className="skill-title" >Soft Skills</h1>
            <div className="card" >
                <Tilt

                    tiltEnable={width > 768 ? true : false}
                    className='tilt card-item'
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    tiltReverse={false}
                    glareEnable={true}
                    glareMaxOpacity={1}>
                    <div className="soft-text" >
                        <h1>Resolucion de problemas</h1>
                        Me concidero a mi mismo realmete bueno en la solucion de problemas, yo contantemente me pruebo resolviendo problemas de la vida real, como de coder wars

                    </div>
                    <div  className="soft-text">
                        <h1>Curiosidad</h1>
                        Yo comenze a aprender la programacion gracias a mi gran se de conocimiento, por lo cual me considero alguien muy curioso y que le gusta aprender contante mente

                    </div>
                    <div  className="soft-text">
                        <h1>Autogestion</h1>
                        Yo me reto a mi mismo a siempre tener un control de mi tiempo lo cual me haze alguien muy organizado

                    </div>
                    <div  className="soft-text">
                        <h1>Trabajo en equipo</h1>
                        He realizado algunos proyectos con amigos que se han ofrecido como mentores que actualmente son parte de este mundo, he aprendido mucho sobre trabajo en equipo en esta área desarrollando proyectos con ellos a través de la plataforma GitHub
                    </div>

                    <div  className="soft-text">
                        <h1>Comunicacion</h1>
                        Generalmente cuando no sé algo o tengo dudas, recurro a personas con más conocimiento para recibir orientación, así como también estoy dispuesto a apoyar a quienes necesitan ayuda, creo que la base de un buen equipo debe ser la capacidad de Comunicar dudas o ser sincero cuando no se sabe de algún tema.
                    </div>
                </Tilt>

            </div>
        </div>
    )

}