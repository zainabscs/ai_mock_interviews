import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {dummyInterviews} from "@/constants";
import InterviewCard from "@/components/InterviewCard";
import VantaBackground from "@/components/VantaBackground"; // <-- import it

const Page = () => {
    return (
        <VantaBackground>
            <main className="relative z-10 flex flex-col items-center min-h-screen text-white py-8">
                <section className="card-cta">
                    <div className="flex flex-col gap-6 max-w-lg">
                        <h2>Get Interview-Ready with AI-powered Practice & Feedback</h2>
                        <p className="text-lg">
                            Practice on real interview questions and get instant feedback
                        </p>
                        <Button asChild className="btn-primary max-sm:w-full">
                            <Link href="/interview">start an Interview</Link>
                        </Button>
                    </div>
                    <Image src="/robot.png" alt="robot-dude" width={400} height={400} className="max-sm:hidden"/>
                </section>
                <section className="flex flex-col gap-6 mt-8">
                    <h2>Your Interviews</h2>
                    <div className="interviews-section">
                        {dummyInterviews.map((interview) => (
                            <InterviewCard{...interview} key={interview.id}/>
                        ))}
                    </div>
                </section>
                <section className="flex flex-col gap-6 mt-8">
                    <h2>Take an Interview</h2>
                    <div className="interviews-section">
                        {dummyInterviews.map((interview) => (
                            <InterviewCard {...interview} key={interview.id} />
                        ))}
                    </div>
                </section>
            </main>
        </VantaBackground>
    )
}
export default Page