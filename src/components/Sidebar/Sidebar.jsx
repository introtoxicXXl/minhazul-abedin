import { useState } from "react";
import Links from "./Links";
import Togglebtn from "./Togglebtn";
import { motion } from 'framer-motion';

    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            },
        },
    };

const Sidebar = () => {
    const [open, setOpen] = useState(false)
    return (
        <motion.div
            className="flex flex-col items-center justify-center z-50 bg-white text-black sidebar"
            animate={open ? "open" : "closed"}
        >
            <motion.div
                className="fixed top-0 left-0 bottom-0 w-[320px] z-50 bg-white bg"
                variants={variants}
            >
                <Links />
            </motion.div>
            <Togglebtn setOpen={setOpen} />
        </motion.div>
    );
};

export default Sidebar;