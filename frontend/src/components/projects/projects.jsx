import { getStaticProps } from "../../github";
import { useState, useEffect } from "react";
import SectionHeader from "../util/SectionHeader";

const Projects = () => {
    const [pinnedRepo, setPinnedRepo] = useState([])

    useEffect(() => {
        const doFetch = async () => {
            const pinnedRepository = (await getStaticProps()).props.pinnedItems;
            setPinnedRepo(pinnedRepository)
        }
        doFetch()
    }, [])

    console.log(pinnedRepo)

    return (
        <section>
            <SectionHeader title={`Projects`}/>
            <div>
                    
            </div>

        </section>
    )
}


export default Projects;
