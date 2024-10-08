import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io";
import { FaSquareGithub } from "react-icons/fa6";

const cardVariants = {
    offscreen: {
        y: 300,
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
            className="card-container overflow-hidden flex items-center justify-center relative pt-5 -mb-[120px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >

            <div className="flex flex-col items-center">
                <motion.div
                    className="card object-cover w-[300px] h-[430px] rounded-[20px] shadow-lg flex items-center justify-center z-0"
                    variants={cardVariants}
                >
                    <img
                        loading="lazy"
                        src={selfPhoto}
                        alt="profile picture of mohamed"
                        className="w-full h-full object-cover rounded-[20px]"
                    />
                </motion.div>

                <div className="bg-gray-400 w-[300px] h-[120px] mt-4 rounded-md flex items-center justify-center">
                    <ul className="flex gap-3">
                        <p>Contact me</p>
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default ProfileCard;