import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import ProjectModal from "./projectModal";

export const Project = ({
  url,
  description,
  imgSrc,
  name,
  languages,
}) => {
  const [hovered, setHovered] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
        className="w-[20rem] justify-center pb-32"
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className="md:w-[30rem] bg-zinc-700 cursor-pointer relative rounded-lg overflow-hidden aspect-square"
        >
          <img
            src={imgSrc}
            alt={`An image of the ${name} project.`}
            style={{
              width: hovered ? "90%" : "85%",
              rotate: hovered ? "2deg" : "0deg",
            }}
            className="w-[85%] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 transition-all rounded"
          />
        </div>
        <div className="mt-6">
          
            <div className="flex items-center gap-2 w-full">
              <h4 className="font-bold text-lg shrink-0 max-w-[calc(100%_-_150px)]">
                {name}
              </h4>
              <div className="w-full h-[1px] bg-zinc-600" />
              <a href={url}>
                <AiFillGithub className="text-xl text-zinc-300 hover:text-indigo-300 transition-colors" />
                </a>
            </div>
        
    
            <div className="flex flex-wrap gap-4 text-sm text-indigo-300 my-2">
              {/* {languages.node.languageName?.join(" - ")} */}
            </div>
 
      
            <p className="text-zinc-300 leading-relaxed">
              {description}{" "}
              <span
                className="inline-block text-sm text-indigo-300 cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                Learn more {">"}
              </span>
            </p>
    
        </div>
      </motion.div>
      <ProjectModal
        url={url}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        name={name}
        // languages={languages.nodes.languageName}
      />
    </>
  );
}