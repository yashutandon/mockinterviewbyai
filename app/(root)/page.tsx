import InterviewCard from '@/components/InterviewCard'
import { dummyInterviews } from '@/constants'
import { getCurrentUser, getInterviewByUserId, getLastestInterview } from '@/lib/actions/auth.action'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = async () => {
  const user = await getCurrentUser();

  const [userInterview,latestInterview] = await Promise.all([
    await  getInterviewByUserId(user?.id!),
    await getLastestInterview({userId:user?.id!})
  ])

  console.log("User interviews:", userInterview); // Debug के लिए
  console.log("Latest interviews:", latestInterview); // Debug के लिए
 
  const hasPastInterviews = userInterview && userInterview.length > 0;
  const hasUpcomingInterviews = latestInterview && latestInterview.length > 0;


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
        {
          hasPastInterviews ? (
            userInterview?.map((interview) =>(

              <InterviewCard key={interview.id} {...interview}/>
            ))):(<p>You haven't any interviews yet.</p>)
          }
        {/*  */}
      </div>
    </section>
    <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an interview</h2>
        <div className='interviews-section'>
        {
          hasUpcomingInterviews ? (
            latestInterview?.map((interview) =>(
              <InterviewCard key={interview.id} {...interview}/>
            ))):(<p>There are no new interviews available.</p>)
          }
        </div>
    </section>
    </>
  )
}

export default page