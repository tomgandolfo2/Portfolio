import React from "react"

type Props = {}

export default function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5]
    return (
        <div
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
                        <img src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" />
                        <div>
                            <h4>
                                Case Study {i + 1} of {projects.length}: Vault
                            </h4>
                        </div>
                    </div>
                ))}
                {/* Project */}
                {/* Project */}
                {/* Project */}
            </div>
            <div className="absolute top-[30%] left-0 h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10" />
        </div>
    )
}
