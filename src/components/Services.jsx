import React from 'react'
import assets from '../assets/assets';
import Title from './Title';
import Card from './Card';
import { motion } from "motion/react";
const Services = () => {
    const servicesData = [
        {
            title: 'Advertising',
            description: 'Crafting compelling ad campaigns that captivate audiences and drive results....',
            icon : assets.ads_icon
        },
        {
            title: 'Content marketing',
            description: 'Creating and distributing valuable, relevant content to attract and engage target audiences....',
            icon : assets.marketing_icon
        },
        {
           title: 'Social media management',
           description: 'Building and nurturing a strong social media presence to connect with your audience and grow your brand....',
           icon : assets.social_icon

        },
        {
            title:'Content Writing',
            description: 'Producing high-quality written content that informs, entertains, and converts readers into customers....',
            icon : assets.content_icon
        }
    ]
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="services"
      className="relative flex flex-col items-center gap-7  px-4 sm:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />

      <Title
        title={"How can we help?"}
        desc={
          "From strategy to execution, we craft digital solutions that move your business forward."
        }
      />

      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <Card key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

export default Services