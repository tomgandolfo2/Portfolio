import React from "react"
import { motion } from "framer-motion"

type Props = {}

export default function ExperienceCard({}: Props) {
    return (
        <article
            className="flex w-[500px] flex-shrink-0 cursor-pointer snap-center 
        flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10
        opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]"
        >
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: false,
                }}
                src="/profile.jpg"
                className="h-32 w-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]"
            />
            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">CEO of ThomasCorp</h4>
                <p className="mt-1 text-2xl font-bold">ThomasCorp Inc.</p>
                <div className="my-2 flex space-x-2">
                    {/* Tech used */}
                    <img src="/profile.jpg" className="h-10 w-10 rounded-full" />
                    {/* Tech used */}
                    <img src="/profile.jpg" className="h-10 w-10 rounded-full" />
                    {/* Tech used */}
                    <img src="/profile.jpg" className="h-10 w-10 rounded-full" />
                </div>
                <p className="py-5 uppercase text-gray-300">Started Job... - Ended Job...</p>
                <ul className="ml-5 list-disc space-y-4 text-lg">
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                </ul>
            </div>
        </article>
    )
}
