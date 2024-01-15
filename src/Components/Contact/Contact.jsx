import { useRef } from 'react'
import './Contact.scss'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
const variants = {
    initial:{
        x:-200,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:3,
           
        }
    }
}
const Contact = () => {
    const formRef = useRef();
    const [success,setSuccess] = useState(false)
    const [error,setError] = useState(false)

    const sendMail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_0krklsa','template_58374wr',formRef.current,'jvlHRa3m4L9wKeBYN').then((result)=>{
            setSuccess(true)
            setError(false)
            console.log(result.text)
        },(error)=>{
            setError(true)
            setSuccess(false)
            console.log(error)
        })
    }
  return (
    <motion.div className="contact" variants={variants} initial='initial' whileInView='animate'>

        <motion.div variants={variants} className="textContainer">
            <motion.h3 variants={variants}>Let's Work together</motion.h3>
            <motion.div variants={variants} className="item">
                <h2>Phone</h2>
                <span>+20 122 612 4376</span>
            </motion.div>
            <motion.div variants={variants} className="item">
                <h2>Mail</h2>
                <span>abelmarkos2023@gmail.com</span>
            </motion.div>
           
            <motion.div variants={variants} className="item">
                <h2>Address</h2>
                <span>Ard El-lewa Giza Cairo Egypt</span>
            </motion.div>
           
           
        </motion.div>
        <div className="formContainer">
            <motion.form ref={formRef} onSubmit={sendMail}>
                <input type="text" placeholder='Name' name='name' />
                <input type="email" placeholder='Your Email' name='email' />
                <textarea rows={8} placeholder='Your Message' name='message'/>
                <button type='submit'>Send Message</button>
                {error && <span className='error'>Mail Wasn't Send</span>}
                {success && <span className='success'>Mail Send Successfully</span>}

            </motion.form>
        
        </div>
    </motion.div>
  )
}

export default Contact