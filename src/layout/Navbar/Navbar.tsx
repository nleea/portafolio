import { useState, useEffect, useContext } from "react";
import { Link } from "../../components/navbar/Link/Link";
import { ThemeContext } from "../../context/context";
import "./navbar.scss";


export const NavBar = () => {

    const { theme } = useContext(ThemeContext);
    const [navSize, setnavSize] = useState("10rem");
    const [navColor, setnavColor] = useState("transparent");
    const [fixed, setFixed] = useState(false);
    const [expanded, setExpanded] = useState(false);


    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("rgba(0,0,0,0.2)") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
        window.scrollY > 10 ? setFixed(true) : setFixed(false);
        window.scrollY > 10 ? setExpanded(false) : setExpanded(false);
    };


    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    const ExpandMenuHanddler = () => {
        setnavSize((size) => {
            if (size === "15rem") {
                return "5rem"
            }
            return "15rem"
        });

        setExpanded((expanded) => !expanded)
    }

    return (
        <>
            <div className="navbar_container" style={{
                height: navSize,
                background: navColor,
                position: fixed ? "fixed" : undefined,
                zIndex: 99999,
                transition: ".32s ease-in-out",
                width:"100%"
            }} >
                <div className="navbar_container-main" >
                    <div className="navbar_container-main_logo" >
                        <Link link="Nelson" route="#inicio" font={true} size={50} color={theme} ></Link>
                        <div className="menu-icon" >
                            <i className="bi bi-list" onClick={ExpandMenuHanddler} ></i>
                        </div>
                    </div>

                    <div className="navbar_container-main_content" style={{ display: expanded ? "block" : "none" }} >
                        <Link link="Inicio" route="#inicio" size={20} color={theme}></Link>
                        <Link link="Habilidades" route="#habilidaes" color={theme} size={20} ></Link>
                        <Link link="portafolio" route="#portafolio" size={20} color={theme} ></Link>
                        <Link link="Contacto" route="#contacto" size={20} color={theme}></Link>
                    </div>
                </div>
            </div></>
    )
}
