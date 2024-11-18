import { getStaticProps } from "../../github";
import { useState, useEffect } from "react";
import SectionHeader from "../util/SectionHeader";
import { Project } from "./project";


const projects = [
    {
        "name": "PokeHunt",
        "description": "PokeHunt is a web game for collecting pokemons.",
        "url": "https://github.com/MohamedSy1/PokeHunt",
        "languages": ["JavaScript"]
    },
    {
        "name": "TenantVoic",
        "description": "A platform for tenant communications.",
        "url": "https://github.com/MohamedSy1/TenantVoic",
        "languages": ["JavaScript", "HTML", "CSS"]
    },
    {
        "name": "Cinematic-Clash",
        "description": "Compare movies using Chart.js.",
        "url": "https://github.com/MohamedSy1/Cinematic-Clash",
        "languages": ["JavaScript", "HTML", "CSS"]
    },
    {
        "name": "job-spicy",
        "description": "Remote job board utilizing the JobIcy API.",
        "url": "https://github.com/MohamedSy1/job-spicy",
        "languages": ["JavaScript", "HTML", "CSS"]
    },
    {
        "name": "Stock-predictor",
        "description": "A tool for predicting stock prices.",
        "url": "https://github.com/MohamedSy1/Stock-predictor",
        "languages": ["Python"]
    },
    {
        "name": "ConqueringResponsiveDesign",
        "description": "A project focused on mastering responsive design.",
        "url": "https://github.com/MohamedSy1/ConqueringResponsiveDesign",
        "languages": ["HTML", "CSS"]
    }
]

const Projects = () => {
    const [pinnedRepo, setPinnedRepo] = useState([])

    useEffect(() => {
        const doFetch = async () => {
            const response = await getStaticProps()
            setPinnedRepo(response.props.pinnedItems)
        }
        doFetch()
    }, [])


    return (
        <section>
            <SectionHeader title={`Projects`} />
            <div className="md:grid md:grid-cols-2">
                {projects?.map((project) => {
                    return <Project key={project.name} {...project} />
                })}
            </div>
        </section>
    )
}

export default Projects;
