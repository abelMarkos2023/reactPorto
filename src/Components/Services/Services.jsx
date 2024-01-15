import './Services.scss'
import { motion } from 'framer-motion'

const variants = {
    initial:{
        x:-200,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration:2,
            staggerChildren:0.4
        }
    }
}
const Services = () => {
  return (
    <motion.div className="services" variants={variants} initial='initial' whileInView='animate'>
        
        <motion.div className="textContainer" variants={variants} >
            <p>
            I Focus on helping your Brand grow <br /> and move forward

            </p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants} >
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Idea</h1>
            </div>
            <div className="title">
                <h1><motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business</h1>
                <button>What We Do?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants} >
            <motion.div whileHover={{background:"lightgray",color:"black"}} className="box">
                <h2>Branding</h2>
                <p>Making your brand known and focus on social media!</p>
                <button>Go</button>
            </motion.div>
            <motion.div whileHover={{background:"lightgray",color:"black"}} className="box">
                <h2>Fullstack web Development</h2>
                <p>Developing web application using the latest technologies including but not limeted to " React.js, Vue.js,Laravel,Express.js,Mongoo DB and MySQL"!</p>
                <button>Go</button>
            </motion.div>
            <motion.div whileHover={{background:"lightgray",color:"black"}} className="box">
                <h2>Translation</h2>
                <p>I Translate books,movies,series and articles with speed and efficency!</p>
                <button>Go</button>
            </motion.div>
            <motion.div whileHover={{background:"lightgray",color:"black"}} className="box">
                <h2>Testing</h2>
                <p>Testing is an immportant skill that I use to help you be more confidents with your application results and erradicate any un expected behavior!</p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services