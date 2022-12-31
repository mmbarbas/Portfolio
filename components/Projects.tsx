import React from 'react'
import { motion } from "framer-motion"
import { Project } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    projects: Project[]
}

const Projects = ({ projects }: Props) => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen px-10 relative flex overflow-hidden flex-row text-left max-w-full justify-evenly
    mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>

            <div className='relative flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
            scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                {projects?.map((proj, i) => (
                    <div 
                    key={proj._id}
                    className='w-screen flex-shrink-0 snap-center flex flex-col space-y-2
                items-center justify-center p-20 md:p-44 h-screen'>
                        <motion.img
                            initial={{
                                y: -300,
                                opacity: 0,
                            }}
                            transition={{ duration: 0.7 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className='h-[200px] w-[350px]  md:h-[500px] md:w-[500px]'
                            src={urlFor(proj?.image).url()}
                            alt="image_project" />
                        <div className='px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-3xl font-semibold text-center'>
                                <span className='underline decoration-[#F7AB0A]/50'>
                                    Case study {i + 1} of {projects?.length}:
                                </span>{" "}
                                {proj?.title}
                            </h4>
                            <div className='flex items-center justify-center'>
                                {proj?.technologies.map((tecnhologie) => (
                                    <img className='h-8 w-11'
                                        key={tecnhologie._id}
                                        src={urlFor(tecnhologie.image).url()}
                                        alt=""
                                    />
                                ))}
                            </div>

                            <p className='text-lg text-center md:text-left'>
                                {proj?.summary}
                            </p>
                            <a className='text-blue-600' href={proj.linkToBuild} rel="noreferrer">
                                {proj.linkToBuild}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
        </motion.div>
    )
}

export default Projects