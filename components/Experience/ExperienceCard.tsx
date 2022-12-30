import React from 'react'
import { motion } from "framer-motion"
import { Experience } from '../../typings'
import { urlFor } from '../../sanity'

type Props = {
  experience:Experience
}

const ExperienceCard = ({experience}: Props) => {

  return (
    <article className='flex flex-col rounded-lg flex-shrink-0 w-[400px] md:w-[600px] xl:w-[800px]
    snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden' >
      <div className=' md:px-10 overflow-y-scroll pr-5  space-y-3 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center'
        src={urlFor(experience?.companyImage).url()} alt="" />
        <h4 className='text-4xl font-light'>{experience?.jobTitle}</h4>
        <p className='font-bold text-2xl mt-1'>{experience?.company}</p>
        <div className='flex space-x-2 my-2'>
         {experience.technologies.map((tecnhology)=>(
          <img
            key={tecnhology._id}
            className="h-12 w-15 rounded-full"
            src={urlFor(tecnhology?.image).url()}
          />
         ))}
        </div>
        <p className='uppercase py-5 text-gray-300'>
          {new Date(experience.dateStarted).toDateString()}-{" "}
          {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg  '>
          {experience.points.map((point,i) =>(
            <li key={i}>{point}</li>
          ))}
          
        </ul>
      </div>
    </article >
  )
}

export default ExperienceCard