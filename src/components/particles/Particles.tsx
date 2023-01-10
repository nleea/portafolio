import { useCallback, useContext } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { ThemeContext } from "../../context/context";


export const ParticlesBackgroubd = () => {


    const { theme } = useContext(ThemeContext);

    const particlesInit = useCallback(async (engine: any) => {
        await loadFull(engine);
    }, []);



    return (
        <Particles id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    size: "200px",
                },
                fpsLimit: 600,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 10,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: theme === "light-theme" ? "#111" : "#fafafa",
                    },
                    links: {
                        color: theme === "light-theme" ? "#111" : "#fafafa",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 4,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1500,
                        },
                        value: 130,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }} ></Particles>
    )
}