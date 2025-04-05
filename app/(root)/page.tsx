import InterviewCard from '@/components/InterviewCard'
import { dummyInterviews } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <section className='card-cta'>
      <div className='flex flex-col gap-6 max-w-lg'>
        <h2 className="">Get Interview-Ready with AI-powered Practice & Feedback</h2>
        <p className='text-lg'>Get instant feedback on your responses</p>
        <button  className='btn-primary max-sm:w-full'>
            <Link href="/interview">Start an Interview</Link>
        </button>
      </div>
      <Image src="/robot.png" alt='robo-dude' width={400} height={400} className='max-sm:hidden'/>
    </section>
    <section className='flex flex-col gap-6 mt-8'>
      <h2>Your Interviews</h2>
      <div className='interviews-section' >
        {dummyInterviews.map((interview)=>(
          <InterviewCard key={interview.id} {...interview}/>
        ))}
        {/* <p>You haven't any interviews yet.</p> */}
      </div>
    </section>
    <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an interview</h2>
        <div className='interviews-section'>
        {dummyInterviews.map((interview)=>(
          <InterviewCard  key={interview.id} {...interview}/>
        ))}
        </div>
    </section>
    </>
  )
}

export default page