import React from "react"
import { motion } from "framer-motion"
import { Skill as SkillType } from "../typings"
import { urlFor } from "../sanity"

type Props = {
    skill: SkillType
    directionLeft?: boolean
}

export default function Skill({ directionLeft, skill }: Props) {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                transition={{ duration: 1 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                src={urlFor(skill?.image).url()}
                className="h-24 w-24 rounded-full border border-gray-500 object-cover filter 
                transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 
                xl:w-32"
            />
            <div
                className="absolute h-24 w-24 rounded-full opacity-0 transition
            duration-300 ease-in-out group-hover:bg-white group-hover:opacity-80 md:h-28 md:w-28 xl:h-32 xl:w-32"
            >
                <div className="flex h-full items-center justify-center">
                    <p className="text-3xl font-bold text-black opacity-100">{skill.progress}%</p>
                </div>
            </div>
        </div>
    )
}
