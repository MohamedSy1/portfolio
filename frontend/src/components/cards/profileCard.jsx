import { motion } from "framer-motion";
import ResumeButton from "../buttons/downloadCV";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { PiReadCvLogoFill } from "react-icons/pi";
import { getStaticProps } from "../../github";
import { useState, useEffect } from "react";

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
    const [data, setData] = useState()

    useEffect(() => {
        const doFetch = async () => {
            const data = (await getStaticProps()).props.pinnedItems;
            setData(data)
        }

        doFetch();
    }, [])

    console.log(data)

    // console.log(`data for profile card: ${data}`)
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
                    <ul className="flex gap-3 ">
                        <li className="tracking-tighter text-neutral-500 transition-colors hover:text-indigo-300"><a href=""></a><PiReadCvLogoFill /> </li>
                        <li className="tracking-tighter text-neutral-500 transition-colors hover:text-indigo-300"><AiFillGithub /> </li>
                        <li className="tracking-tighter text-neutral-500 transition-colors hover:text-indigo-300"><AiFillLinkedin /> </li>
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default ProfileCard;