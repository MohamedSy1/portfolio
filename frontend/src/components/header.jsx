import { motion } from "framer-motion"
import ResumeButton from "./buttons/downloadCV"
import selfPhoto from "../assets/selfPhoto.jpg"
import ProfileCard from "./cards/profileCard"

const Header = () => {
    const boxVariant = {
        hover: { scale: 1.1, opacity: 0.1 },
        pressed: { scale: 0.95 },
        rest: { scale: 1 }
    }

    return (
        <section className="grid grid-cols-2 grid-rows-1 p-[5rem] justify-center items-center">
            <div className="place-self-center md:text-right">
                <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter pb-6">
                    Hello I'm Mohamed Sy a Software Developer
                </motion.h1>
                <ResumeButton/>
            </div>

           <ProfileCard selfPhoto={selfPhoto} className=" place-self-center"/>

        </section>
    )
}

export default Header;