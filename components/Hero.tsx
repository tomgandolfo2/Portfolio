import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["This is a portfolio", "with information about", "Thomas Gandolfo"],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
            <BackgroundCircles />
            <img
                src="/profile.jpg"
                alt=""
                className="relative mx-auto h-32 w-32 object-cover rounded-full"
            />
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                    Software Engineer
                </h2>
                <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="orange" />
                </h1>
                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroBtn">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroBtn">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroBtn">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroBtn">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
