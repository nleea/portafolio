import { useState } from "react";
import { NavBar } from "../layout/Navbar/Navbar";
import { Banner } from "../layout/banner/Banner";
import { Skills } from "../layout/skills/Skills";
import { Project } from "../layout/projects/projects";
import { SoftSkills } from "../layout/softskills/SoftSkill";
import { Contact } from "../layout/contact/contact";
import { Toggle } from "../components/toggle/toggle";
import { ThemeContext, themes } from "../context/context";
import "./home.scss"

export const Home = () => {
    const [theme, setTheme] = useState(themes.light);

    const ToggleTheme = (theme: string) => {
        setTheme(theme);
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme: ToggleTheme }} >
            <div className={`container ${theme} `}   >
                <div className="home_navbar" >
                    <NavBar />
                </div>
                <div className="home_banner"  >
                    <Banner />
                </div>
                <div className="home_skill" >
                    <Skills />
                </div>
                <div className="home_soft-skill">
                    <SoftSkills />
                </div>
                <div className="home_project" >
                    <Project />
                </div>
                <div className="home_contact" >
                    <Contact />
                </div>

                <Toggle />
            </div>

        </ThemeContext.Provider >

    )
}
