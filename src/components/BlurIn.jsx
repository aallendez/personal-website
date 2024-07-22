import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";

const BlurIn = ({ word, className, variant, duration = 1 }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    const defaultVariants = {
      hidden: { filter: "blur(10px)", opacity: 0 },
      visible: { filter: "blur(0px)", opacity: 1 },
    };
    const combinedVariants = variant || defaultVariants;
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(ref.current);
          }
        },
        { threshold: 0.1 }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);
  
    return (
      <motion.h1
        ref={ref}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration }}
        variants={combinedVariants}
        className={`font-display tracking-[-0.02em] drop-shadow-sm  ${className}`}
      >
        {word}
      </motion.h1>
    );
};

export default BlurIn;