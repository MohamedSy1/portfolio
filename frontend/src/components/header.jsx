import { motion } from "framer-motion"
import App from "../App"

const Header = () => {

    const boxVariant = {
        hover: { scale: 1.1, opacity: 0.1 },
        pressed: { scale: 0.95 },
        rest: { scale: 1 }
    }

    return (
        <motion.div
            className=' flex place-items-center mx-auto md:w-[100%] p-10 '
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >

            <motion.h1 className=" text-4xl md:text-5xl lg:text-6xl font-extrabold flex-wrap w-[39rem] tracking-tighter">
                Hello I'm Mohamed Sy a Software Developer
            </motion.h1>

            <motion.div
                className="bg-white rounded-full  md:w-[200px] md:h-[200px]"
                variants={boxVariant}
                initial='hidden'
                animate='visible'
                whileHover='hover'
            />

        </motion.div >
    )
}

export default Header;