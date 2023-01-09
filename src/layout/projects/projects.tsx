import { useState, useEffect } from "react";
import { ParticlesBackgroubd } from "../../components/particles/Particles";
import { CardProject } from "../../components/UI/cardProjects";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import "./projects.scss";

import { skill } from "../../utils/data/skill";

export const Project = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    }, []);

    return (


        <div className='projects__global' id='projects' >
            <div className='projects__title title'>Projects</div>
            {/* <div className='projects__subtitle'>Recent Projects</div> */}
            <div className='projects__cards-container'>

                <Swiper
                    modules={[Navigation, EffectFade]}
                    navigation
                    speed={800}
                    slidesPerView={width > 768 ? 2 : 1}
                    loop
                    className='projects__slider'
                >
                    {skill.map(p => (
                        <SwiperSlide className='swiper__slide'><CardProject /></SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>

    )
}