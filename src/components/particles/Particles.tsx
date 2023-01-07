import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";


export const ParticlesBackgroubd = () => {
    return (
        <Particles options={{
            background: { color: "transparent" },
            fpsLimit: 60,
            interactivity: { detect_on: "canvas", events: { resize: true } },
            particles: {
                color: { value: "9fafca" }, number: {
                    density: {
                        enable: true,
                        value_area: 1080
                    },
                    limit: 0,
                    value: 400
                },
                opacity: {
                    animation: {
                        enable: true,
                        minimumValue: 0.5,
                        speed: 1
                    },
                    random: {
                        enable: true,
                        minimumValue: 0.5
                    },
                    value: 1
                },
                shape: {
                    type: "circle"
                }
            }
        }} ></Particles>
    )
}