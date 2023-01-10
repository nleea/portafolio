import { useState, useEffect } from "react";
import { ParticlesBackgroubd } from "../../components/particles/Particles";
import { CardProject } from "../../components/UI/cardProjects";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import "./projects.scss";

import { projects } from "../../utils/data/projects";

export const Project = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    }, []);

    return (
        <div className='projects__global' id='portafolio' >
            <div className='projects__title title'>Projects</div>
            <div className='projects__cards-container'>
                <Swiper
                    modules={[Navigation, EffectFade]}
                    navigation
                    speed={800}
                    slidesPerView={width > 768 ? 2 : 1}
                    loop
                    className='projects__slider'
                >
                    {projects.map((p, index) => (
                        <SwiperSlide key={index} className='swiper__slide'><CardProject details={p.details} image={p.image} name={p.name} link={p.link} repository={p.repository} /></SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}