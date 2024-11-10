import { getStaticProps } from "../../github";
import { useState, useEffect } from "react";
import SectionHeader from "../util/SectionHeader";
import { Project } from "./project";

const Projects = () => {
    const [pinnedRepo, setPinnedRepo] = useState([])

    useEffect(() => {
        const doFetch = async () => {
            const response = await getStaticProps()

            setPinnedRepo(response.props.pinnedItems)
        }
        doFetch()
    }, [])

    console.log(pinnedRepo)

    return (
        <section>
            <SectionHeader title={`Projects`} />
            <div className="md:grid md:grid-cols-2">
                {pinnedRepo?.map((project) => {
                    return <Project key={project.name} {...project} />
                })}
            </div>
        </section>
    )
}


export default Projects;
