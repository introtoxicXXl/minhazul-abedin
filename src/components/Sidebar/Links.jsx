
import { motion } from 'framer-motion';
import { PropTypes } from 'prop-types';
import { useEffect } from 'react';
const variants = {
    open: {
        transition: {
            staggerChildren: 0.1
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
}
const itemVariants = {
    open: {
        y: 0,
        opacity: 1
    },
    closed: {
        opacity: 0,
        y: 50
    }
}

const Links = () => {
    const items = [
        "Home",
        "About",
        "Services",
        "Portfolio",
        "Contact"
    ]

    return (
        <motion.div
            className="absolute w-full h-full flex flex-col items-center justify-center gap-5"
            variants={variants}
        >
            {
                items.map((item, i) => <motion.a
                    className=''
                    href={`#${item}`}
                    key={i}
                    variants={itemVariants}
                    whileHover={{scale:1.2}}
                    whileTap={{scale:0.92}}
                >
                    <BubbleText item={item} />
                </motion.a>)
            }
        </motion.div>
    );
};

const BubbleText = ({item}) => {
    useEffect(() => {
      const spans = document.querySelectorAll(".hover-text span");
  
      spans.forEach((span) => {
        span.addEventListener("mouseenter", function () {
          this.style.fontWeight = "900";
          this.style.color = "rgb(57, 59, 59)";
  
          const leftNeighbor = this.previousElementSibling;
          const rightNeighbor = this.nextElementSibling;
  
          if (leftNeighbor) {
            leftNeighbor.style.fontWeight = "500";
            leftNeighbor.style.color = "rgb(30, 33, 33)";
          }
          if (rightNeighbor) {
            rightNeighbor.style.fontWeight = "500";
            rightNeighbor.style.color = "rgb(57, 59, 59)";
          }
        });
  
        span.addEventListener("mouseleave", function () {
          this.style.fontWeight = "100";
          this.style.color = "rgb(17, 26, 26)";
  
          const leftNeighbor = this.previousElementSibling;
          const rightNeighbor = this.nextElementSibling;
  
          if (leftNeighbor) {
            leftNeighbor.style.fontWeight = "100";
            leftNeighbor.style.color = "rgb(17, 26, 26)";
          }
  
          if (rightNeighbor) {
            rightNeighbor.style.fontWeight = "100";
            rightNeighbor.style.color = "rgb(17, 26, 26)";
          }
        });
      });
    }, []);
  
    return (
      <h2 className="hover-text text-center text-5xl font-thin text-[#110f0f]">
        <Text>{item}</Text>
      </h2>
    );
  };
  
  const Text = ({ children }) => {
    return (
      <>
        {children.split("").map((child, idx) => (
          <span
            style={{
              transition: "0.35s font-weight, 0.35s color",
            }}
            key={idx}
          >
            {child}
          </span>
        ))}
      </>
    );
  };

BubbleText.propTypes = {
    item: PropTypes.text
}
Text.propTypes={
    children:PropTypes.text
}

export default Links;