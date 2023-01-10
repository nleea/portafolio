import { useState, useEffect } from "react";
import { Link } from "../../components/navbar/Link/Link";
import "./navbar.scss";


export const NavBar = () => {

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
            <div className="navbar_container">
                <div className="navbar_container-main" >
                    <div className="navbar_container-main_logo" >
                        <Link link="Nelson" route="#inicio" font={true} size={50} ></Link>
                        <div className="menu-icon" >
                            <i className="bi bi-list" onClick={ExpandMenuHanddler} ></i>
                        </div>
                    </div>

                    <div className="navbar_container-main_content" style={{ display: expanded ? "block" : "none" }} >
                        <Link link="Inicio" route="#inicio" size={20} ></Link>
                        <Link link="Habilidades" route="#habilidaes" size={20} ></Link>
                        <Link link="portafolio" route="#portafolio" size={20} ></Link>
                        <Link link="Contacto" route="#contacto" size={20} ></Link>
                    </div>
                </div>
            </div></>
    )
}
