import React from 'react';
//animation
import {motion} from "framer-motion";
import {pageAnimation} from "../animation";

export function ContactUs() {
    return (
        <motion.div
            exit='exit'
            variants={pageAnimation}
            initial='hidden'
            animate='show'
            style={{background: '#fff'}}
        >
            <h1>ContactUs</h1>
        </motion.div>
    )
}