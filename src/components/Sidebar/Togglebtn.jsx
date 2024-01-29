
import { PropTypes } from 'prop-types';
import { motion } from 'framer-motion';
const Togglebtn = ({ setOpen }) => {

    return (
        <button
            onClick={() => setOpen((prev) => !prev)}
            className="w-[50px] h-[50px] rounded-full fixed top-6 left-6 bg-transparent border-none btn hover:bg-transparent"
        >
            <svg width="23" height="23" viewBox='0 0 23 23'>
                <motion.path
                    strokeWidth="3"
                    stroke='black'
                    strokeLinecap='round'
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" }
                    }}
                />
                <motion.path
                    strokeWidth="3"
                    stroke='black'
                    strokeLinecap='round'
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: {
                            opacity: 1
                        },
                        open: {
                            opacity: 0
                        }
                    }}
                />
                <motion.path
                    strokeWidth="3"
                    stroke='black'
                    strokeLinecap='round'
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" }
                    }}
                />
            </svg>
        </button>
    );
};
Togglebtn.propTypes = {
    setOpen: PropTypes.func
}

export default Togglebtn;