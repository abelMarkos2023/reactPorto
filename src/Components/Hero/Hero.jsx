import './Hero.scss'
import { motion } from 'framer-motion'
const Hero = () => {
    const sliderVariant = {
        initial:{
           x:0
        },
        animate:{
            x:"-220%",
            transition:{
                duration:20,
                repeatType:"mirror",
                repeat:Infinity
            }
    
        },
        
    }
    const textVariants = {
        initial:{
            x:-500,
            opacity:0
        },
        animate:{
            x:0,
            opacity:1,
            transition:{
                duration:1,
                staggerChildren:0.4
            }
        },
        scrollButton :{
            opacity:0,
            y:10,
            transition:{
                duration:2,
                repeat:Infinity
            }
        }
    }
    
  return (
    <div className="hero">
       <motion.div className="wrapper">
       <motion.div variants={textVariants} initial='initial' animate='animate' className="textContainer">
            <motion.h2 variants={textVariants}>Abel Markos</motion.h2>
            <motion.h1 variants={textVariants}>Fullstack Developer And Mobile Developer</motion.h1>
            <motion.div variants={textVariants} className="buttons">
                <motion.button variants={textVariants}>See My Latest Work</motion.button>
                <motion.button variants={textVariants}>Contact Me</motion.button>
            </motion.div>
            <motion.img variants={textVariants} animate="scrollButton"  src="/scroll.png" alt="" />
        </motion.div>
       </motion.div>
       <motion.div className="imageContainer">
            <motion.img src="/hero.png" alt="" />
        </motion.div>
       <motion.div variants={sliderVariant} initial='initial' animate='animate' className="slidingText">
        Writer Content Creator Influencer
       </motion.div>
       
    </div>
  )
}

export default Hero