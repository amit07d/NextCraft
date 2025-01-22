'use client'
import { link } from "fs";
import { HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link";

const featuredWebinars = [
    {
        title: 'Understanding Football Tactics',
        description:
            'Dive deep into the fundamentals of football tactics and strategies to improve your game.',
        slug: 'understanding-football-tactics',
        isFeatured: true,
    },
    {
        title: 'The Art of Basketball Shooting',
        description:
            'Learn the craft of perfecting your shooting technique from experienced basketball coaches.',
        slug: 'the-art-of-basketball-shooting',
        isFeatured: true,
    },
    {
        title: 'Mastering Tennis Techniques',
        description:
            'Advanced techniques to master your tennis game, from serves to footwork.',
        slug: 'mastering-tennis-techniques',
        isFeatured: true,
    },
    {
        title: 'Sports Nutrition Essentials',
        description:
            'Get started with understanding sports nutrition to fuel your performance on the field.',
        slug: 'sports-nutrition-essentials',
        isFeatured: true,
    },
    // Added two more webinars
    {
        title: 'Football Fitness Drills',
        description:
            'Enhance your football fitness with expert drills and conditioning strategies.',
        slug: 'football-fitness-drills',
        isFeatured: true,
    },
    {
        title: 'Marketing Your Sports Brand',
        description:
            'Learn how to promote your sports career and brand in the digital age.',
        slug: 'marketing-your-sports-brand',
        isFeatured: true,
    },
]; 

function UpcomingWebiners() {
    return (
        <div className="p-12 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className=" text-teal-500 font-semibold text-2xl tracking-widest uppercase">Featured Webinars</h2>
                    <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white leading-tight"
                        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                        Enhance Your Musical Journey
                    </p>

                </div>

                <div className="mt-10">
                    <HoverEffect
                        items={featuredWebinars.map(webiner => (
                            {
                                key: webiner.slug,
                                title: webiner.title,
                                description: webiner.description,
                                link: `/webinar/${webiner.slug}`
                            }
                        ))}
                    />
                </div>

                <div className="mt-10 text-center">
                    <Link href={"/"}
                        className="inline-block px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-teal-500 via-green-400 to-teal-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
                    >
                        View All webinars
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UpcomingWebiners;
