import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import { urlFor } from "../sanity"
import { PageInfo } from "../typings"
import BackgroundCircles from "./BackgroundCircles"

type Props = {
    pageInfo: PageInfo
}

export default function Hero({pageInfo}: Props) {
    const [text, count] = useTypewriter({
        words: ["This is a portfolio", "with information about", `${pageInfo?.name}`],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center ">
            <BackgroundCircles />
            <img
                src={urlFor(pageInfo?.heroImage).url()}
                alt=""
                className="relative mx-auto h-32 w-32 rounded-full object-cover"
            />
            <div className="z-20">
                <h2 className="pb-2 text-sm uppercase tracking-[15px] text-gray-500">
                    {pageInfo?.role}
                </h2>
                <h1 className="scroll-px-10 text-5xl font-semibold lg:text-6xl">
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
