import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import About from "../components/About"
import Contact from "../components/Contact"
import Experience from "../components/Experience"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

const Home: NextPage = () => {
    return (
        <div
            className="z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll
         bg-[rgb(36,36,36)] text-white scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
        >
            <Head>
                <title>Tom's Portfolio</title>
            </Head>
            {/* Header */}
            <Header />
            {/* Hero */}
            <section id="hero" className="snap-start">
                <Hero />
            </section>
            {/* About */}
            <section id="about" className="snap-center">
                <About />
            </section>
            {/* Experience */}
            <section id="experience" className="snap-center">
                <Experience />
            </section>
            {/* Skills */}
            <section id="skills" className="snap-start">
                <Skills />
            </section>
            {/* Projects */}
            <section id="projects" className="snap-start">
                <Projects />
            </section>
            {/* Contact */}
            <section id="contact" className="snap-start">
                <Contact />
            </section>
            <Link href="#hero">
                <footer className="sticky bottom-5 w-full cursor-pointer">
                    <div className="flex items-center justify-center">
                        <img
                            className="h-10 w-10 rounded-full grayscale filter hover:grayscale-0"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                        />
                    </div>
                </footer>
            </Link>
        </div>
    )
}

export default Home
