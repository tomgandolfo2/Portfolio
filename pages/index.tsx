import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Header from "../components/Header"
import Hero from "../components/Hero"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
            <Head>
                <title>Tom's Portfolio</title>
            </Head>
            {/* Header */}
            <Header />
            {/* Hero */}
            <section id="hero" className="snap-center">
                <Hero />
            </section>
            {/* About */}
            <section>
                <About />
            </section>
            {/* Experience */}
            {/* Skills */}
            {/* Projects */}
            {/* Contact */}
        </div>
    )
}

export default Home
