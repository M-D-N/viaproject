"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import StyleSheet from './Homehero.module.scss';

interface HeroProps {
    img: string;
    title: string;
    description: string;
    btn: string;
}

interface HeroSlideProps {
    heroes: HeroProps[];
}

export function Homehero ({heroes}: HeroSlideProps) {
    return (
        <section className={StyleSheet.homehero}>
            <Splide
                options={{
                type: "loop",
                perPage: 1,
                autoplay: false,
                interval: 3000,
                arrows: true,
                pagination: false,
                }}
            >
                {
                    heroes.map((hero, index) => (
                        <SplideSlide className={StyleSheet.homeheroslide} key={index}>
                            <Image
                                src={hero.img}
                                alt="Slide 1"
                                priority
                                fill
                                style={{ objectFit: "cover" }}
                            />
                            <div className={StyleSheet.homeheroContent}>
                                <div className={StyleSheet.homeheroContentImage}>
                                    <Image
                                        src={hero.img}
                                        alt="Slide 1"
                                        priority
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className={StyleSheet.homeheroContentInner}>
                                    <span>0{heroes.length} / 0{index+1}</span>
                                    <h2>{hero.title}</h2>
                                    <p>{hero.description}</p>
                                </div>
                            </div>
                        </SplideSlide>
                    ))
                }
            </Splide>
        </section>
    )
}