import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";

export const Project = ({
  url,
  description,
  imgSrc,
  name,
  languages,
}) => {

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
        className="w-[20rem] mx-auto justify-center pb-32 p-5"
      >
        <div className="bg-slate">
          <h1 className=" font-bold pb-5">{name}</h1>
          <p className=" pb-4">{description}</p>
          <a href={url}>{<AiFillGithub />}</a>
        </div>

      </motion.div>
    </>
  );
}