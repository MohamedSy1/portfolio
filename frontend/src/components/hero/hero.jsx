import { motion } from "framer-motion"
import ResumeButton from "../buttons/downloadCV.jsx"
import selfPhoto from "../../assets/selfPhoto.jpg"
import ProfileCard from "../cards/profileCard.jsx"

const Hero = () => {

    return (
        <section className="md:flex p-[5rem] justify-center items-center gap-8">
           
            <div className="font-extrabold tracking-tighter pb-6 lg:header text-3xl md:text-4xl lg:text-5xl text-primary-content text-start ">
                <motion.h1 className="">
                    Hi, I'm Mohamed Sy
                 </motion.h1>
                <p className=" text-foreground">a Software Developer</p>
            </div>

            <ProfileCard selfPhoto={selfPhoto} />

        </section>
    )
}

export default Hero;