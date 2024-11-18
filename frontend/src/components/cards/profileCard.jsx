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

    // console.log(`data for profile card: ${data}`)
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className="max-w-[250px]"
        >

            <div className="flex flex-col items-center">
                <motion.div
                    className=" rounded-[20px] shadow-lg"
                    variants={cardVariants}
                >
                    <img
                        src={selfPhoto}
                        alt="profile picture of mohamed"
                        className="w-full h-full rounded-[20px]"
                    />
                </motion.div>

                <div className="bg-gray-400 min-w-[250px] h-[120px] mt-4 rounded-md flex items-center justify-center">
                    <ul className="flex gap-3 ">
                        <li className="tracking-tighter text-neutral-500 transition-colors hover:text-indigo-300"><a href="https://docs.google.com/document/d/1prgfoGLyiM6Obswvt__QhxA2oeCGKhI3bZIqyNwATTk/edit?tab=t.0"><PiReadCvLogoFill /></a> </li>
                        <li className="tracking-tighter text-neutral-500 transition-colors hover:text-indigo-300"><a href="https://github.com/MohamedSy1"><AiFillGithub /></a> </li>
                        <li className="tracking-tighter text-neutral-500 transition-colors hover:text-indigo-300"><a href="https://www.linkedin.com/in/mohamed-s-179b20230/"><AiFillLinkedin /></a> </li>
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default ProfileCard;