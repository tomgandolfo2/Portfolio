import React from "react"
import { motion } from "framer-motion"
import ExperienceCard from "./ExperienceCard"
import { Experience } from "../typings"

type Props = {
    experiences: Experience[]
}

export default function WorkExperience({experiences}: Props) {
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
            <div
                className="mt-16 flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll 
            p-10 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
            >
                {experiences?.map((experience) => (
                    <ExperienceCard key={experience._id} experience={experience} />

                ))
                }
            </div>
        </motion.div>
    )
}
