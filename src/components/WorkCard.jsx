import React from 'react'
import { motion } from "motion/react";

const WorkCard = ({img,title,desc,}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}


     className='flex flex-col hover:scale-102 duration-500 transition-all cursor-pointer'>
        <img src={img} alt="" className='w-full rounded-xl' />
        <h3 className='mt-3 mb-2 text-lg font-semibold'>{title}</h3>
        <p className='text-sm opacity-r0 w-5/6'>
            {desc}
        </p>
    </motion.div>
  )
}

export default WorkCard