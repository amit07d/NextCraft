import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const sportsAcademyTestimonials = [
    {
        quote:
            'Joining the sports academy transformed my understanding of football and helped me to truly elevate my game. The coaches are world-class!',
        name: 'Amit Debnath',
        title: 'Football Player',
    },
    {
        quote:
            "The community and support at this academy are unmatched. I've grown not just as a basketball player, but also as a team leader, thanks to their comprehensive training approach.",
        name: 'Ronaldo',
        title: 'Basketball Player',
    },
    {
        quote:
            "This academy offered me the tools and confidence to take my swimming to the next level. I'm endlessly grateful for the personalized coaching.",
        name: 'Vinicius',
        title: 'Swimmer',
    },
    {
        quote:
            'As a tennis player, finding the right mentor can be challenging, but this academy matched me with a coach who truly understands my goals and challenges.',
        name: 'Wirtz',
        title: 'Tennis Player',
    },
    {
        quote:
            'The fitness programs here opened my eyes to the intricacies of athletic conditioning. Highly recommend for any aspiring athletes!',
        name: 'Kohli',
        title: 'Athlete',
    },
];


function TestimonialCards() {
    return (

        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <h2 className='text-3xl sm:text-4xl font-extralight text-center mb-8 z-10 relative'>
                Hear our Harmony:
                <span className='text-teal-500 px-2 py-1 rounded-lg inline-block shadow-lg'>Voices of success</span>
            </h2>
            
            <div className='w-full max-w-6xl'>
                <InfiniteMovingCards
                    items={sportsAcademyTestimonials}
                    direction='right'
                    speed='normal'
                />
            </div>
    </div>
    )
}

export default TestimonialCards