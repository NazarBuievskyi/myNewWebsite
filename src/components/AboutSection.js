import React from 'react';
import home1 from '../img/home1.png'
import {About, Description, Hide, Image} from "../styles";

//animation
import {motion} from 'framer-motion'
import {titleAnimation, fade, photoAnimation} from "../animation";
import {Wave} from "./Wave";
export function AboutSection() {


    return (
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for any photograph or videography ideas that you have.</motion.p>
                <motion.button variants={fade}>Contact me</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnimation} src={home1} alt="guy with camera"/>
            </Image>
        <Wave/>
        </About>
    )
}
