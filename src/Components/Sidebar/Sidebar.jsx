import { useState } from 'react'
import { motion } from 'framer-motion'
import  './Sidebar.scss'

const Sidebar = () => {
    const [open,setOpen] = useState(false)
    const items = [{
        url:"/",
        text:"Home"
    },
    {
        url:"services",
        text:"Services"
    },
    {
        url:"portfolio",
        text:"Portfolio"
    },
    {
        url:"about",
        text:"About"
    },
    {
        url:"contact",
        text:"Contact"
    }
    
]
    const toggleOpen = () => setOpen(!open)

    const variant = {
        open:{
            clipPath:"circle(1200px at 50px 50px)",
            transition:{
                delay:0.4,
                type:"spring",
                stiffness:200,
                damping:40,
            }
        },
        closed:{
            clipPath:"circle(30px at 50px 50px)",
            transition:{
                delay:0.9,
                type:"spring",
                stiffness:500,
                damping:40,
            }
        }
    }
    const itemVariants = {
        open:{
            opacity:1,
            y:0
        },
        closed:{
            opacity:0,
            y:50
        }
    }
    const childrenVriants = {
        open:{
            transition:{
                staggerChildren:0.5
            }
        },
        closed:{
            transition:{
                staggerChildren:0.2,
                staggeredDirection:-1
            }
        }
    }
  return (
    <motion.div  className="sidebar" animate={open?'open':'closed'}>
        <motion.div className="bg" variants={variant}>
            <motion.div variants={childrenVriants} className="links">
                {
                    items.map(item => (
                        <motion.a variants={itemVariants} onClick={toggleOpen} key={item.text} href={`#${item.url}`} className="link">{item.text}</motion.a>
                    ) )
                }
            
           
            </motion.div>

        </motion.div>
        <button onClick={toggleOpen}>
            <svg  height='23' width='23' viewBox='0 0 23 23'>
                <motion.path variants={{
                    closed:{d:" M 2 2.5 L 20 2.5"},
                    open:{d:"M 3 16.5 L 17 2.5"}
                }} strokeLinecap='round' strokeWidth='3' stroke='black' />
                <motion.path d="M 2 9.423 L 20 9.423" variants={{
                    open:{opacity:0},
                    closed:{opacity:1}
                }} strokeLinecap='round' strokeWidth='3' stroke='black' />
                <motion.path variants={{
                    closed:{d:" M 2 16.346 L 20 16.346"},
                    open:{d:"M 3 2.5 L 17 16.346"}
                }}  strokeLinecap='round' strokeWidth='3' stroke='black' />
            </svg>
        </button>
    </motion.div>
  )
}

export default Sidebar