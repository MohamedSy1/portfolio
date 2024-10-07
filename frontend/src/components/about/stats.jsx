import Chip from "../util/chip";

const Stats = () => {
    return (
        <div >
            <span className="pb-10" >Skills</span>
            <div className="flex flex-wrap mb-12 gap-2">
                <Chip>JavaScript</Chip>
                <Chip>Python3</Chip>
                <Chip>Java</Chip>
                <Chip>HTML</Chip>
                <Chip>CSS</Chip>
                <Chip>React</Chip>
                <Chip>NodeJs</Chip>
                <Chip>SpringBoot</Chip>
                <Chip>Express</Chip>
                <Chip>SQL</Chip>
                <Chip>Tailwind</Chip>
                <Chip>PostgreSQL</Chip>
                <Chip>MangoDB</Chip>
                <Chip>Github</Chip>
            </div>
        </div>
    )
}

export default Stats;