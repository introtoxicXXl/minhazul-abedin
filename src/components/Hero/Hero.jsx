import heroImg from '../../assets/a428c8c3-59b5-45c3-98b7-b2d03672daee.png';
import scrollImg from '../../assets/scroll.png';
import { motion } from 'framer-motion';

const textVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}
const sliderVariants = {
    initial: {
        x: 0
    },
    animate: {
        x: "-220%",
        transition: {
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror"
        },
    }
}


const Hero = () => {

    return (
        <div className="hero h-[100%] overflow-hidden bg-gradient-to-b from-[#0c0c1d] to-[#111132]">
            <div className='container mx-auto flex justify-between items-center relative'>
                <div className='basis-1/2 flex flex-col items-center z-20'>
                    <motion.div
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        className='space-y-5'
                    >
                        <motion.h2
                            variants={textVariants}
                            className='text-3xl text-[rebeccapurple] tracking-[8px] font-semibold'
                        >
                            Minhazul Abedin</motion.h2>
                        <motion.h1
                            variants={textVariants}
                            className='text-[70px] font-semibold'
                        >
                            Web Designer <br /> And Developer </motion.h1>
                        <motion.div
                            variants={textVariants}
                            className='flex gap-5'
                        >
                            <motion.button
                                variants={textVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.92 }}
                                className="text-xl box-border border-2 rounded-2xl px-4 py-2 text-white relative group flex items-center">
                                <span className="pr-6 text-base">Resume</span>
                                <span className="hover:bg-[#0c0c1d] absolute rounded-2xl right-0 top-0 h-full flex items-center justify-center px-1 group-hover:duration-300 group-hover:w-full w-10 duration-300">
                                    <svg viewBox="0 0 24 24" fill="none"
                                        className="w-5 hover:w-6 inline mx-auto" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </g>
                                    </svg>
                                </span>
                            </motion.button>
                            <motion.button
                                variants={textVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.92 }}
                                className="text-xl box-border border-2 rounded-2xl px-4  text-white relative group flex items-center">
                                <span className="pr-6 text-sm">Contact Me</span>
                                <span className="hover:bg-[#111132] absolute rounded-2xl right-0 top-0 h-full flex items-center justify-center px-1 group-hover:duration-300 group-hover:w-full w-10 duration-300">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-5" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            </path>
                                        </g>
                                    </svg>
                                </span>
                            </motion.button>
                        </motion.div>
                        <motion.img src={scrollImg} alt="" className='w-12' variants={textVariants} animate="scrollButton" />
                    </motion.div>
                </div>
                <motion.div
                    variants={sliderVariants}
                    initial="initial"
                    animate="animate"
                    className='absolute text-[50vh] w-[50%] font-bold uppercase whitespace-nowrap -bottom-[90px] text-[#ffffff09]'
                >
                    Web Developer Graphic Designer React MongoDb node.js express
                </motion.div>
                <div className='basis-1/2 flex items-end'>
                    <img src={heroImg} alt="" className='z-10' />
                </div>

            </div>
        </div>
    );
};

export default Hero;