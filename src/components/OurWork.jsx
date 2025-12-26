import React from 'react'
import Title from './Title'
import WorkCard from './WorkCard'
import assets from '../assets/assets'
import { motion } from "motion/react";

const OurWork = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}

      id="our-work"
      className=" flex flex-col items-center gap-7 px-4 sm:px-12 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      
      <Title
        title="Our Latest Work"
        desc="A showcase of our recent projects and accomplishments."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        <WorkCard
          img={assets.work_mobile_app}
          title={"Mobile app marketing"}
          desc={
            "We turn bold ideas into powerful digital solutions that connect, engage..."
          }
        />
        <WorkCard
          img={assets.work_dashboard_management}
          title={"Dashboard management"}
          desc={"We help you execute your plan and deliver results."}
        />
        <WorkCard
          img={assets.work_fitness_app}
          title={"Fitness app promotion"}
          desc={
            "We turn bold ideas into powerful digital solutions that connect, engage..."
          }
        />
      </div>
    </motion.div>
  );
}

export default OurWork