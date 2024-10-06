import { motion } from "framer-motion"
import ResumeButton from "../buttons/downloadCV.jsx"
import selfPhoto from "../../assets/selfPhoto.jpg"
import ProfileCard from "../cards/profileCard.jsx"

const Header = () => {

    return (
        <section className="grid md:grid-cols-2 md:grid-rows-1 p-[5rem] justify-center items-center">
            <div className="place-self-center md:text-right">
                <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter pb-6 lg:header lg:w-[50rem]">
                    Hello I'm Mohamed Sy a Software Developer
                </motion.h1>
                <ResumeButton/>
            </div>

           <ProfileCard selfPhoto={selfPhoto} className=" place-self-center"/>
        </section>
    )
}

export default Header;