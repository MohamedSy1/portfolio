import { motion } from "framer-motion";
import ResumeButton from "../buttons/downloadCV";

const cardVariants = {
    offscreen: {
        y: 150,
    },
    onscreen: {
        y: 50,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

const ProfileCard = ({ selfPhoto }) => {

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >

            <div className="flex flex-col items-center">
                <motion.div
                    className="w-[250px] h-[330px] md:w-[300px] md:h-[430px] rounded-[20px] shadow-lg"
                    variants={cardVariants}
                >
                    <img
                        loading="lazy"
                        src={selfPhoto}
                        alt="profile picture of mohamed"
                        className="w-full h-full object-cover rounded-[20px]"
                    />
                </motion.div>

                <div className="bg-gray-400 w-[250px] h-[120px] md:w-[300px] md:h-[120px] mt-4 rounded-md flex items-center justify-center">
                    <ul className="flex gap-3">
                        <li> <ResumeButton /> </li>
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default ProfileCard;