import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};



type Props = {}

const Contact = (props: Props) => {

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => 
    {
        window.location.href = `mailto:manelbarbas1234@gmail?subject=${formData.subject}&
        body= Hi, my name is ${formData.name}.${formData.message}(${formData.email})`;    
    };

    return (
        <div className='h-screen flex relative flex-col text-center md:text-left 
        max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className=' uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </h3>
            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    I have got what you need.{" "}
                    <span className='decoration-[#F7AB0A]/50 underline'>Lets talk</span>
                </h4>
                <div className='space-y-4'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>+351913198629</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>manelbarbas1234@gmail.com</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>Lisbon, Portugal</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contactInput' />
                    <button type="submit"
                        className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact