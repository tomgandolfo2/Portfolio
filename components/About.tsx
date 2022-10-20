import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

type Props = {}

export default function About({}: Props) {
    return (
        <motion.div
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            viewport={{
                once: false,
            }}
            className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
        >
            <h3 className="pageTitle">About</h3>
            <img
                src="/about.jpg"
                className="-mb-20 h-56 w-56 flex-shrink-0 rounded-full object-cover md:mb-0 md:h-64 md:w-96 md:rounded-lg 2xl:h-[500px] 2xl:w-[600px]"
            />
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a <span className="underline decoration-[#F7AB0A]">little</span>{" "}
                    background
                </h4>
                <p className="text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet perferendis
                    exercitationem quo sunt molestiae magnam vero impedit recusandae pariatur iste
                    optio minima quas eius autem, animi assumenda velit? Quasi, beatae. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Eveniet perferendis exercitationem
                    quo sunt molestiae magnam vero impedit recusandae pariatur iste optio minima
                    quas eius autem, animi assumenda velit? Quasi, beatae.
                </p>
            </div>
        </motion.div>
    )
}
