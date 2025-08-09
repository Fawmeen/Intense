import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { dummyInterviews } from '@/constants';
import InterviewCard from '@/components/InterviewCard';
const page = () => {
  const head = "Get Intense Training on Interview with your Agent";
  const desc = "practice on real interview questions & evaluate your skills";
  return (
   <>
   <section className="card-cta">
    <div className="flex flex-col gap-6 max-w-lg">
            <h2> {head} </h2>
            <p className="text-lg"> {desc} </p>

            <Button asChild className="btn-primary max-sm:w-full">
              <Link href="/Interview" > Start an Interview </Link>
            </Button>
            </div>
            <Image src = "/robot.png" alt="robot-dude" width={400} height={400} className="max-sm:hidden"/>
   </section>

   <section className="flex flex-col gap-6 mt-8">
      <h2>Your Interviews</h2>
      <div className="interview-section">
         {dummyInterviews.map((interview) =>(
          <InterviewCard {...interview} key = {interview.id} />
         ))}
         {/* <p>{head}</p> */}
      </div>
   </section>
   
   <section className="flex flex-col gap-6 mt-8">
             <h2>Take an Interview</h2>
             <div className = "interview-section">
                {dummyInterviews.map((interview) =>(
                     <InterviewCard {...interview} key={interview.id} />
         ))}
             </div>
   </section>
   </>
  )
}

export default page