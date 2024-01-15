import { useRef } from 'react';
import './Portfolio.scss'
import { motion,useScroll,useSpring, useTransform } from 'framer-motion';
const Portfolio = () => {

    const items = [
        {
            id:1,
            title:"Skin Care Product App",
            desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, laborum!",
            link:"https://gentle-khapse-17c6d1.netlify.app/",
            img:"/project/skinCare.webp"
        },
        {
            id:2,
            title:"Gym & Fittness App",
            desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, laborum!",
            link:"https://sensational-fox-fbbc60.netlify.app/",
            img:"/project/gym.webp"
        },
        {
            id:3,
            title:"Foods & Drinks App",
            desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, laborum!",
            link:"https://bucolic-puppy-eb3b0e.netlify.app/",
            img:"/project/food.jpeg"
        },
        {
            id:4,
            title:"Blog App",
            desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, laborum!",
            link:"https://cute-nasturtium-256868.netlify.app/blogs",
            img:"/project/blog.jpg"
        },
        {
            id:5,
            title:"Dashboard App",
            desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, laborum!",
            link:"https://gilded-kitsune-3008cf.netlify.app/",
            img:"/project/dashboard.jpg"
        },
        
    ];

    const Single = ({item}) => {

        const ref = useRef()
        const {scrollYProgress} = useScroll({
            target:ref,
            // offset:['start start','end start']
        })
        const y = useTransform(scrollYProgress,[0,1],[-200,200])
        return (
        <section>
            <div className="container">
                <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" />
                </div>
                <motion.div style={{y}} className="textContainer">
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                    <a target='_blank' href={item.link}>View Demo</a>
                </motion.div>
                </div>
            </div>
        </section>
    )}
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        ref:ref,
        offset:['end end','start start']
    })

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30
    })
  return (
    <div ref={ref} className="portfolio">
        <div className="progress">
            <h1>Featured Projects</h1>
            <motion.div style={{scaleX}}  className="progressBar"></motion.div>
        </div>
        {
            items.map(item => (
                <Single key={item.id} item={item}/>
            ))
        }
    </div>
  )
}

export default Portfolio