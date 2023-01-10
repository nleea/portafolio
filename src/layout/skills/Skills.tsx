import { useState, useEffect, useContext } from "react";
import Tilt from "react-parallax-tilt";
import { Skill } from "../../components/UI/Skill";
import { skill } from "../../utils/data/skill";

import { ThemeContext } from "../../context/context";

import "./skills.scss";

export const Skills = () => {

    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    }, []);

    const { theme } = useContext(ThemeContext);

    return (
        <div id="habilidaes">
            <h1 className="skill-title" >Hard Skills</h1>
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
                    {skill.map((skill, index) => <Skill icon={skill.icon} name={skill.name} url={skill.href} key={index} color={theme === "light-theme" ? "#111" : "#fafafa"} />)}
                </Tilt>
            </div>

        </div>
    )
}