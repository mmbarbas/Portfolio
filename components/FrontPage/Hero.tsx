import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackGroundCircles from './BackGroundCircles';
import imgs from "../../public/images";
import Image from 'next/image';
import Link from 'next/link';
import { PageInfo } from '../../typings';
import { urlFor } from '../../sanity';

type Props = {
    pageInfo: PageInfo
}

export default function Hero({pageInfo}: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hi! I'm ${pageInfo?.name}`,
            "Started as a Game Developer",
            "No idea about the ending"],
        loop: true,
        delaySpeed: 1400
    });

    return (
        <div className='h-screen flex flex-col pt-28 space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackGroundCircles />
            <img className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src={urlFor(pageInfo?.heroImage).url()} alt="myFaceImg" />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-300 pb-2 tracking-[10px]'>{pageInfo?.role}</h2>
                <h1 className='text-3xl lg:text-4xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>
                <div className='pt-10'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}