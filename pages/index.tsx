import type { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import About from "../components/About"
import Contact from "../components/Contact"
import WorkExperience from "../components/WorkExperience"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import { Experience, PageInfo, Project, Skill, Social } from "../typings"
import { fetchPageInfo } from "../utils/fetchPageInfo"
import { fetchExperiences } from "../utils/fetchExperiences"
import { fetchSkills } from "../utils/fetchSkills"
import { fetchProjects } from "../utils/fetchProjects"
import { fetchSocials } from "../utils/fetchSocials"

type Props = {
    pageInfo: PageInfo;
    experiences: Experience[];
    skills: Skill[];
    projects: Project[];
    socials: Social[];
}

const Home = ({pageInfo, experiences, skills, projects, socials}: Props) => {
    return (
        <div
            className="z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll
         bg-[rgb(36,36,36)] text-white scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
        >
            <Head>
                <title>Tom's Portfolio</title>
            </Head>
            {/* Header */}
            <Header socials={socials} />
            {/* Hero */}
            <section id="hero" className="snap-start">
                <Hero pageInfo={pageInfo} />
            </section>
            {/* About */}
            <section id="about" className="snap-center">
                <About pageInfo={pageInfo} />
            </section>
            {/* Experience */}
            <section id="experience" className="snap-center">
                <WorkExperience experiences={experiences} />
            </section>
            {/* Skills */}
            <section id="skills" className="snap-start">
                <Skills skills={skills} />
            </section>
            {/* Projects */}
            <section id="projects" className="snap-start">
                <Projects projects={projects} />
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


export const getStaticProps: GetStaticProps<Props> = async () => {
    const pageInfo: PageInfo = await fetchPageInfo()
    const experiences: Experience[] = await fetchExperiences()
    const skills: Skill[] = await fetchSkills()
    const projects: Project[] = await fetchProjects()
    const socials: Social[] = await fetchSocials()

    return {
        props: {
            pageInfo, experiences, skills, projects, socials
        }
    }
}