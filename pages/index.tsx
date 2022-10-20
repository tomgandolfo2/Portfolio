import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import About from "../components/About"
import Contact from "../components/Contact"
import Experience from "../components/Experience"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
    return (
        <div className="z-0 h-screen snap-y snap-mandatory overflow-scroll bg-[rgb(36,36,36)] text-white">
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
        </div>
    )
}

export default Home
