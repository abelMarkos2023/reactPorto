import { useRef } from 'react'
import './Parallax.scss'
import { motion, useScroll,useTransform } from 'framer-motion'
const Parallax = ({type}) => {

    const refs = useRef()
    const scroll= useScroll({
        target:refs,
        offset:["start start","end start"]
    })

    const yText = useTransform(scroll.scrollYProgress,[0,1],["0%","500%"])
    const yBg = useTransform(scroll.scrollYProgress,[0,1],["0%","100%"])
    const xBg = useTransform(scroll.scrollYProgress,[0,1],["0%","200%"])


  return (
    <div  ref={refs} className="parallax"
     style={{background:type === 'services'?'linear-gradient(180deg,#111132,#0c0c1d)':'linear-gradient(180deg,#111132,#505064)'}}
     >
        <motion.h1 style={{y:yText}}>
            {type === 'services'?'What I Do':'What I Did'}
        </motion.h1>
        <motion.div  className="mountains"></motion.div>
        <motion.div style={{y:yBg,backgroundImage:`url(${type === 'services'?'sun.png':'planet.png'})`}} className="planets"></motion.div>
        <motion.div style={{x:xBg}} className="stars"></motion.div>
    </div>
  )
}

export default Parallax