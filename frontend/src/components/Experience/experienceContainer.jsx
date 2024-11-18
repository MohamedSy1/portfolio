import SectionHeader from "../util/SectionHeader";
import ExperienceItems from "./experienceItems";

const experience = [
    {
      title: "Emerging Leaders Program",
      position: "Intern",
      time: "November 2020 – January 2021",
      location: "Bronx, NY",
      description:
        "Coordinating a team to create a proposal for a JFK terminal. Presented the proposal in a shark-tank style, integrating industry feedback to refine the project.",
      tech: ["Project Management", "Presentation Skills", "Team Collaboration"]
    },
    {
      title: "BeepBoop",
      position: "Intern",
      time: "July 2020 - August 2020",
      location: "Bronx, NY",
      description:
        "Social media campaigns, creating ads to promote language learning. Used Canva to design engaging content and developed skills in content creation.",
      tech: ["Social Media Marketing", "Canva", "Content Creation"]
    },
    {
      title: "All Star Code",
      position: "Intern",
      time: "June 2020 - August 2020",
      location: "New York, NY",
      description:
        "Learned foundational coding skills, including HTML and CSS, and developed a basic website project. Collaborated with peers to improve coding proficiency and gained early exposure to software development principles.",
      tech: ["HTML", "CSS", "Web Development Basics"]
    }
  ];

const ExperienceContainer = () => {
    return (
        <section id="Exp">
            <SectionHeader title={'Experience'} dir="l"/>
            {experience.map((item, index) => (
                <ExperienceItems key={item.title} {...item}/>
            ))}
        </section>
    )
}


export default ExperienceContainer;

