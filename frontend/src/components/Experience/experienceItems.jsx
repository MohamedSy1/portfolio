import Chip from "../util/chip";

const ExperienceItems = ({title, position, time, location, description, tech}) => {

    return (
        <div className="mb-6 border-b pb-6 border-zinc-700">
            <div className="flex items-center mb-2 justify-between">
                <span className="text-xl font-bold">{title}</span>
                <span>{time}</span>
            </div>
            <div className="mb-7">
                <span className="pr-1">{position}</span>
                <span>| </span>
                <span>{location}</span>
            </div>
            <p className=" inline-block max-w-[520px] pb-2">{description}</p>
            <div className="flex items-center gap-2">
                {tech.map((item) => (
                    <Chip key={item}>{item}</Chip>
                ))}
            </div>
        </div>
    )

}

export default ExperienceItems;