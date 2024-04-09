import React from 'react'
import { useForm } from 'react-hook-form'
import  axios from 'axios'
import toast from 'react-hot-toast'

const Contact = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => {
        const userInfo = {
            name:data.name,
            email:data.email,
            phone:data.phone,
            gender:data.gender,
            message:data.message
        }
        try {
           await axios.post("https://getform.io/f/nbvvyqrb",userInfo);
           toast.success("Your Message has been Sent")
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }
      }

  return (
    <>
      <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
       <h1 className='text-3xl font-bold mb-4'>Contact Me</h1>
       <span>Please Fill out the form to contact me</span>
       <div className='flex flex-col items-center justify-center mt-5 '>
        <form onSubmit={handleSubmit(onSubmit)} 
        // action="https://getform.io/f/nbvvyqrb" 
        //  method="POST" 
         className='bg-slate-200 w-96 px-8 py-6 rounded-lg'>
            <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>FullName <span className='text-red-600'>*</span></label>
                <input {...register("name", { required: true })} className='shadow appearance-none border rounded-lg px-3 py-2 text-gray-700 leading-tight focus:outline-none' type="text" name="name" placeholder='Enter your FullName'  />
                {errors.name && <span>This field is required</span>}
            </div>
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Email Address <span className='text-red-600'>*</span></label>
                <input {...register("email", { required: true })} className='shadow appearance-none border rounded-lg px-3 py-2 text-gray-700 leading-tight focus:outline-none' type="email" name="email" placeholder='Enter your Email'  />
                {errors.email && <span>This field is required</span>}
            </div>
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Phone Number <span className='text-red-600'>*</span></label>
                <input {...register("phone", { required: true })} className='shadow appearance-none border rounded-lg px-3 py-2 text-gray-700 leading-tight focus:outline-none' type="phone" name="phone" placeholder='Enter your Phone Number' />
                {errors.phone && <span>This field is required</span>}
            </div>
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Gender <span className='text-red-600'>*</span></label>
                <select {...register("gender", { required: true })} name="gender" className='shadow appearance-none border rounded-lg px-3 py-2 text-gray-700 leading-tight focus:outline-none' required>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                {errors.gender && <span>This field is required</span>}
            </div>
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Message <span className='text-red-600'>*</span></label>
                <textarea {...register("message", { required: true })} className='shadow appearance-none border rounded-lg px-3 py-2 text-gray-700 leading-tight focus:outline-none' type="email" name="message" placeholder='Enter Message Here'  />
                {errors.message && <span>This field is required</span>}
            </div>
            <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-200'>Submit</button>
        </form>
       </div>
      </div>
    </>
  )
}

export default Contact
