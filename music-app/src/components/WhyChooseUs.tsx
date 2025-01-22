'use client'
import { StickyScroll } from "./ui/sticky-scroll-reveal"

const sportsAcademyContent = [
    {
        title: 'Discover Your Potential with Us: A Personal Journey in Sports Mastery',
        description:
            'Embark on a transformative journey tailored to your goals in cricket and football. Our personalized coaching approach ensures you achieve peak performance, unlocking new levels of skill and confidence. At our academy, your ambitions meet our unwavering support, creating champions on and off the field.',
    },
    {
        title: 'Interactive Training & Live Feedback',
        description:
            'Experience real-time feedback in dynamic training sessions that replicate match-day scenarios. With immediate insights and tailored strategies, you’ll enhance your understanding of cricket and football techniques, gaining a competitive edge.',
    },
    {
        title: 'Modern Training Curriculum',
        description:
            'Our cutting-edge curriculum integrates the latest strategies, tools, and technologies from cricket and football. Stay ahead with a program designed to keep you at the forefront of the sports world, blending tradition with innovation.',
    },
    {
        title: 'Unlimited Growth Opportunities',
        description:
            'Explore a diverse range of training programs and resources that challenge and inspire you. Whether mastering a perfect cover drive or honing your passing precision, our academy ensures you’re always progressing towards greatness.',
    },
    {
        title: 'Unleashing Team Synergy',
        description:
            'Learn to excel individually and thrive as a team player. Our focus on communication, strategy, and collaboration in cricket and football fosters unmatched synergy, both on the pitch and beyond.',
    },
    {
        title: 'Building the Athlete Within',
        description:
            'From physical conditioning to mental resilience, our holistic approach molds you into a complete athlete. Unlock the discipline and determination to achieve your dreams, whether scoring goals or smashing sixes.',
    },
];


function WhyChooseUs() {
    return (
        <div>
            <StickyScroll content={sportsAcademyContent} />
        </div>
    )
}

export default WhyChooseUs