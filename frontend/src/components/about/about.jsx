import SectionHeader from "../util/SectionHeader";
import MyLinks from "../util/MyLinks";
import Stats from "./stats";

const About = () => {

    return (
        <section id="About">
            <SectionHeader title={`About`} dir="l"/>
            <div className=" grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 max-w-7xl">
                <div className=" space-y-4">
                    <p className=" flex flex-wrap max-w-[70%] leading-relaxed tracking-tighter font-bold text-2xl">
                        Hey! I'm Mohamed, a software developer based in New York.
                        I specialize in full stack web development.
                        I love learning about new tech and trends because it fuels my desire to grow and thirst for knowledge.
                        if you find that I am right fit for the job let's connect🔗
                    </p>
                   <MyLinks />
                </div>
                <Stats />
            </div>
        </section>
    )

}

export default About;