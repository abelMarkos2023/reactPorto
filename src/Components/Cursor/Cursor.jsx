import { useEffect, useState } from 'react'
import './Cursor.scss'
import { motion } from 'framer-motion'
const Cursor = () => {
    const [pos,setPos] = useState({y:0,x:0})
    useEffect(()=>{
        const mouseMove = (e) => {
            setPos({x:e.clientX,y:e.clientY})
        }
        window.addEventListener('mousemove',mouseMove)

        return ()=>{
            window.removeEventListener('mousemove',mouseMove)
        }
    },[])
  return (
    <motion.div className="cursor" animate={{x:pos.x+10,y:pos.y+10}}></motion.div>
  )
}

export default Cursor