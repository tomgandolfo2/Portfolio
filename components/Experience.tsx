import React from "react"
import { motion } from "framer-motion"
import ExperienceCard from "./ExperienceCard"

type Props = {}

export default function Experience({}: Props) {
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
            className="relative mx-auto flex h-screen max-w-full flex-row items-center justify-evenly overflow-hidden px-10 text-left md:flex-row"
        >
            <h3 className="pageTitle">Experience</h3>
            <div className="mt-16 flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10">
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>
        </motion.div>
    )
}
