"use client";
import Link from "next/link";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Courses {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
}

function FeaturedCourses() {
    const allCourses = courseData.courses.filter(
        (course: Courses) => course.isFeatured
    );

    return (
        <div className="py-12 bg-gray-900 rounded">
            <div className="text-center">
                <h2 className=" text-teal-600 text-2xl font-semibold tracking-wide uppercase">
                    FEATURED COURSES
                </h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                    Learn With the Best
                </p>
            </div>

            <div className="mt-10 mx-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {allCourses.map((course: Courses) => (
                        <div key={course.id} className="justify-center flex">
                            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                        {course.title}
                                    </p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                                        {course.description}
                                    </p>
                                    <div className="mt-4">
                                        <Link
                                            href={`/courses ${course.slug}`}
                                            className="text-teal-500 hover:underline"
                                        >
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-20 text-center">
                <Link
                    href="/courses"
                    className="inline-block px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-teal-500 via-green-400 to-teal-600 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-teal-300"
                >
                    View All Courses
                </Link>
            </div>
        </div>
    );
}

export default FeaturedCourses;
