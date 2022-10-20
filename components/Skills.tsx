import React from "react"
import { motion } from "framer-motion"
import Skill from "./Skill"

type Props = {}

export default function Skills({}: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1.5,
            }}
            className="relative mx-auto flex min-h-screen max-w-[2000px] flex-col items-center 
        justify-center text-center md:text-left xl:flex-row xl:space-y-0 xl:px-10"
        >
            <h3 className="pageTitle">Skills</h3>
            <h3 className="absolute top-36 text-sm uppercase tracking-[3px] text-gray-500">
                Hover over a skill for current proficiency
            </h3>
            <div className="grid grid-cols-4 gap-5">
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>
        </motion.div>
    )
}
