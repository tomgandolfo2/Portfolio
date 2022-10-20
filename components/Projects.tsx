import React from "react"
import { motion } from "framer-motion"

type Props = {}

export default function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5]
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
            className="relative z-0 mx-auto flex h-screen max-w-full flex-col 
        items-center justify-evenly overflow-hidden text-left md:flex-row"
        >
            <h3 className="pageTitle">Projects</h3>
            <div
                className="relative z-20 flex w-full snap-x snap-mandatory 
            overflow-y-hidden overflow-x-scroll"
            >
                {projects.map((project, i) => (
                    <div
                        className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center
                    justify-center space-y-5 p-20 md:p-44"
                    >
                        <motion.img
                            initial={{
                                y: -300,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 1.2,
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                            }}
                            viewport={{
                                once: true,
                            }}
                            src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
                        />
                        <div className="max-w-6xl space-y-10 px-0 md:px-10">
                            <h4 className="text-center text-4xl font-semibold">
                                <span className="underline decoration-[#F7AB0A]/50">
                                    Case Study {i + 1} of {projects.length}:
                                </span>{" "}
                                Vault
                            </h4>
                            <p className="text-center text-lg md:text-left">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
                                porro tempora quaerat, ea facere aspernatur explicabo et beatae,
                                quae, molestiae dolore omnis odio atque nobis earum? Eligendi quia
                                iure quam.
                            </p>
                        </div>
                    </div>
                ))}
                {/* Project */}
                {/* Project */}
                {/* Project */}
            </div>
            <div className="absolute top-[30%] left-0 h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10" />
        </motion.div>
    )
}
