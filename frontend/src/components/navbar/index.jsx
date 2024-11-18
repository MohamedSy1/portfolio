import {
    AnimatePresence,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const numOfLines = 30;

const navItems = [
    { position: 1, title: "About" },
    { position: 8, title: "Projects" },
    { position: 20, title: "Exp" },
];

const SideNavBar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const mouseY = useMotionValue(Infinity);

    return (
        <motion.nav
            onMouseMove={(e) => {
                mouseY.set(e.clientY);
                setIsHovered(true);
            }}
            onMouseLeave={() => {
                mouseY.set(Infinity);
                setIsHovered(false);
            }}
            className="fixed right-0 top-0 flex h-screen flex-col items-end justify-between py-4 pl-8"
        >
            {Array.from(Array(numOfLines).keys()).map((i) => {
                const linkContent = navItems.find((item) => item.position === i);
                return (
                    <LinkLine
                        title={linkContent?.title}
                        isHovered={isHovered}
                        mouseY={mouseY}
                        key={i}
                    />
                );
            })}
        </motion.nav>
    );
};

const SPRING_OPTIONS = {
    mass: 1,
    stiffness: 200,
    damping: 15,
};

const LinkLine = ({ mouseY, isHovered, title }) => {
    const ref = useRef(null);
    const distance = useTransform(mouseY, (val) => {
        const bounds = ref.current?.getBoundingClientRect();

        return val - (bounds?.y || 0) - (bounds?.height || 0) / 2;
    });

    const lineWidthRaw = useTransform(distance, [-80, 0, 80], [15, 100, 15]);
    const lineWidth = useSpring(lineWidthRaw, SPRING_OPTIONS);

    const linkWidth = useSpring(25, SPRING_OPTIONS);

    useEffect(() => {
        if (isHovered) {
            linkWidth.set(140);
        } else {
            linkWidth.set(25);
        }
    }, [isHovered]);

    if (title) {
        console.log(title)
        return (
            <a href={`#${title}`}>
                <motion.div
                    ref={ref}
                    className="group relative bg-neutral-500 transition-colors hover:bg-indigo-300"
                    style={{ width: linkWidth, height: 2 }}
                >
                    <AnimatePresence>
                        {isHovered && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute left-0 top-0 z-10 w-full pt-2 font-extrabold uppercase text-neutral-500 transition-colors group-hover:text-indigo-300"
                            >
                                {title}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.div>
            </a>
        );
    } else {
        return (
            <motion.div
                ref={ref}
                className="relative bg-neutral-500"
                style={{ width: lineWidth, height: 2 }}
            ></motion.div>
        );
    }
};

export default SideNavBar;