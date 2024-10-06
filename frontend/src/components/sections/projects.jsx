import { getStaticProps } from "../../github";
import { useState, useEffect } from "react";

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
            <h1>Pinned Projects</h1>
            <div>
                    
            </div>

        </section>
    )
}


export default Projects;
