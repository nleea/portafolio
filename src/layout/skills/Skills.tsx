import { useEffect } from "react";

import Js from "../../assets/images/descarga.png";
import Boostrap from "../../assets/images/Boostrap.png";
import Css from "../../assets/images/Css.png";
import Express from "../../assets/images/Express.png";
import Git from "../../assets/images/Git.png";
import Html from "../../assets/images/HTML.png";
import Jest from "../../assets/images/jest.png";
import Jquery from "../../assets/images/Jquery.png";
import Less from "../../assets/images/less.png";
import MaterialUi from "../../assets/images/MaterialUI.png";
import NodeJs from "../../assets/images/Nodejs.png";
import Npm from "../../assets/images/Npm.png";
import Postgrest from "../../assets/images/postgresql.png";
import React from "../../assets/images/React.png";
import Redux from "../../assets/images/Redux.png";
import Sass from "../../assets/images/Sass.png";
import Sequalize from "../../assets/images/Sequalize.png";
import Sql from "../../assets/images/sql.png";


import "./skills.scss";

export const Skills = () => {


    const MoveSkills = () => {
        const card = document.querySelector('.card-item') as any;
        card.addEventListener('mousemove', rotate);
        card.addEventListener('mouseout', stopRotate)

        function rotate(e: any) {
            const halfHeight = card.offsetHeight / 2;

            card.style.transform = 'rotateX(' + -(e.offsetX - halfHeight) / 70 + 'deg) rotateY(' + (e.offsetY - halfHeight) / 70 + 'deg) scale3d(1,1,1)';
        }
        function stopRotate() {
            card.style.transform = 'rotate(0)';
        }

    }

    useEffect(() => {
        MoveSkills()
    }, [])


    return (

        <div style={{ width: "80%", margin: "auto" }} >
            <div className="card">
                <div className="card-item" style={{ height: "500px" }} >

                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="skill-text"><img src={Js} title="JavaScript" alt="JavaScript" className="skill-img" />JavaScript</a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" className="skill-text"><img src={Html} title="HTML" alt="HTML" className="skill-img" />HTML</a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer" className="skill-text"><img src={Css} title="CSS" alt="CSS" className="skill-img" />CSS</a>
                    <a href="https://www.w3schools.com/sql/sql_intro.asp" target="_blank" rel="noopener noreferrer" className="skill-text"><img src={Sql} title="SQL" alt="SQL" className="skill-img" />SQL</a>
                    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="skill-text"><img src={React} title="React JS" alt="React JS" className="skill-img" />React JS</a>
                    <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer" className="skill-text"><img src={Redux} title="Redux" alt="Redux" className="skill-img" />Redux</a>
                    <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer" className="skill-text"><img src={NodeJs} title="Node JS" alt="Node JS" className="skill-img" />Node JS</a>
                    <a href="https://expressjs.com" target="_blank" rel="noopener noreferrer" className="skill-text"><img src={Express} title="Express" alt="Express" className="skill-img" /> Express</a>
                    <a href="https://jquery.com/" target="_blank" rel="noopener noreferrer" className="skill-text"><img src={Jquery} title="jQuery" alt="jQuery" className="skill-img" />jQuery</a>
                    <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer" className="skill-text"><img src={Sass} title="Sass" alt="Sass" className="skill-img" />Sass</a>
                    <a href="https://lesscss.org/" target="_blank" rel="noopener noreferrer" className="skill-text"><img src={Less} title="Less" alt="Less" className="skill-img" />Less</a>
                    <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer" className="skill-text"><img src={Postgrest} title="PostgreSQL" alt="PostgreSQL" className="skill-img" />PostgreSQL</a>
                    <a href="https://sequelize.org/" target="_blank" rel="noopener noreferrer" className="skill-text"><img src={Sequalize} title="Sequelize" alt="Sequelize" className="skill-img" />Sequelize</a>
                    <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer" className="skill-text"><img src={Jest} title="Jest" alt="Jest" className="skill-img" />Jest</a>
                    <a href="https://mui.com/" target="_blank" rel="noopener noreferrer" className="skill-text"><img src={MaterialUi} title="Material UI" alt="Material UI" className="skill-img" />Material UI</a>
                    <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer" className="skill-text"><img src={Boostrap} title="Bootstrap" alt="Bootstrap" className="skill-img" />Bootstrap</a>
                    <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer" className="skill-text"><img src={Npm} title="npm" alt="npm" className="skill-img" />npm</a>
                    <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" className="skill-text"><img src={Git} title="Git" alt="Git" className="skill-img" />Git</a>

                </div>
            </div>
        </div>

    )
}