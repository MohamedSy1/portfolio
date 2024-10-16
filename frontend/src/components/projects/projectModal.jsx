import { motion } from "framer-motion";
import { useEffect } from "react";
import { MdClose } from "react-icons/md"
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";

const ProjectModal = ({
    url,
    setIsOpen,
    imgSrc,
    isOpen,
    description,
    languages,
    name
}) => {

    // console.log(languages.nodes.languageName)

    useEffect(() => {
        const body = document.querySelector('body');

        if (isOpen) {
            body.style.overflowY = "hidden";
        } else {
            body.style.overflowY = "scroll";
        }
    }, [isOpen])

    const content = (
        <div
            className="fixed inset-0 z-50 px-4 py-12 bg-zinc-950/50 backdrop-blur overflow-y-scroll flex justify-center cursor-pointer"
            onClick={() => setIsOpen(false)}
        >
            <button className="absolute top-4 md:top-6 text-xl right-4">
                <MdClose />
            </button>

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-2xl h-fit rounded-lg overflow-hidden bg-zinc-900 shadow-lg cursor-auto"
            >
                <img
                    className="w-full"
                    src={imgSrc}
                    alt={`An image of the ${name} project.`}
                />
                <div className="p-8">
                    <h4 className="text-3xl font-bold mb-2">{name}</h4>
                    <div className="flex flex-wrap gap-2 text-sm text-indigo-300">
                        {/* {languages.nodes.languageName?.join(" - ")} */}
                    </div>

                    <div className="space-y-4 my-6 leading-relaxed text-sm text-zinc-300">
                        {description}
                    </div>

                    <div>
                        <p className="font-bold mb-2 text-xl">
                            Project Links<span className="text-indigo-500">.</span>
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                            <a
                                target="_blank"
                                rel="nofollow"
                                className="text-zinc-300 hover:text-indigo-300 transition-colors flex items-center gap-1"
                                href={url}
                            >
                                <AiFillGithub /> Source Code
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );

    if (isOpen) return <></>
}


export default ProjectModal;