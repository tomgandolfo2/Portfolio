import React from "react"
import {
    ArrowCircleRightIcon,
    MailIcon,
    MailOpenIcon,
    MapIcon,
    PhoneIcon,
} from "@heroicons/react/solid"

type Props = {}

export default function Contact({}: Props) {
    return (
        <div
            className="relative mx-auto flex h-screen max-w-7xl flex-col items-center
        justify-evenly px-10 text-center md:flex-row md:text-left"
        >
            <h3 className="pageTitle">Contact</h3>
            <div className="flex flex-col space-y-10">
                <h4 className="text-center text-4xl font-semibold">
                    Thomas is the best.{" "}
                    <span className="underline decoration-[#F7AB0A]/50">Hire him!</span>
                </h4>
                <div>
                    <div className="flex items-center space-x-5">
                        <PhoneIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
                        <p className="text-2xl">+123 4567 8909</p>
                    </div>
                    <div className="flex items-center space-x-5">
                        <MailIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
                        <p className="text-2xl">example@email.com</p>
                    </div>
                    <div className="flex items-center space-x-5">
                        <MapIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
                        <p className="text-2xl">123 Example Street, Examplandia</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
