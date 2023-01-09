import { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { Skill } from "../../components/UI/Skill";
import { skill } from "../../utils/data/skill";


import "./skills.scss";

export const Skills = () => {

    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    }, [])

    return (
        <div style={{ width: "80%", margin: "auto" }} >
            <h1 className="skill-title" >Skill</h1>
            <div className="card">
                <Tilt
                    tiltEnable={width > 768 ? true : false}
                    className='tilt card-item'
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    tiltReverse={false}
                    glareEnable={true}
                    glareMaxOpacity={1}
                >
                    {skill.map((skill, index) => <Skill icon={skill.icon} name={skill.name} url={skill.href} key={index} />)}
                </Tilt>
            </div>
        </div>
    )
}