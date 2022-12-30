import React from 'react'
import { motion } from "framer-motion"
import SkillType from './SkillType';
import { Skill } from '../../typings';

type Props = {
  skills: Skill[]
}

const Skills = ({skills}: Props) => {
  return (
    <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
    className='flex relative flex-col text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen justify-center mx-auto items-center'>
      <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>
      <h3 className='uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for current profieciency</h3>
      <div className='grid grid-cols-4 gap-5 py-10'>
      {skills?.slice(0,skills.length/2).map((skill) =>(
              <SkillType key={skill._id} skill={skill}/>
           ))}
      {skills?.slice(skills.length/2, skills.length).map((skill) =>(
              <SkillType key={skill._id} skill={skill} directionLeft/>
           ))}
      </div>
    </motion.div>
  )
}

export default Skills