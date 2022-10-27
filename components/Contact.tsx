import React from "react"
import {
    ArrowCircleRightIcon,
    MailIcon,
    MailOpenIcon,
    MapIcon,
    PhoneIcon,
} from "@heroicons/react/solid"
import { useForm, SubmitHandler } from "react-hook-form"

type Props = {}

type Inputs = {
    name: string
    email: string
    subject: string
    message: string
}

export default function Contact({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:test@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}. (${formData.email})`
    }

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

                <div className="flex flex-col space-y-10">
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

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mx-auto flex w-fit flex-col space-y-2"
                >
                    <div className="flex space-x-2">
                        <input
                            {...register("name")}
                            placeholder="Name"
                            className="contactInput"
                            type="text"
                        />
                        <input
                            {...register("email")}
                            placeholder="Email"
                            className="contactInput"
                            type="email"
                        />
                    </div>

                    <input
                        {...register("subject")}
                        placeholder="Subject"
                        className="contactInput"
                        type="text"
                    />
                    <textarea
                        {...register("message")}
                        placeholder="Message"
                        className="contactInput"
                    />
                    <button
                        type="submit"
                        className="rounded-md bg-[#F7AB0A] py-5 px-10 text-lg font-bold text-black"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
