import Link from "next/link";
import { Button } from "./ui/moving-border";

import { Spotlight } from "./ui/Spotlight";

function HeroSection() {
    return (
        <div
            className="h-auto md:h-[40rem] w-full rounded-md flex flex-col 
        items-center justify-center relative overflow-hidden
        mx-auto py-10 md:py-0"
        >
            {/*        Spotlight here                */}

            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                // using fill u can choose color like fill = "white"

                fill="#FFFACD"
            />
            <div className="p-4 relative z-10 w-full text-center"></div>
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            The Playbook of Sports Mastery
            </h1>
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            Embark on an extraordinary journey with our all-encompassing sports training programs and redefine your athletic prowess. Whether you're taking your first steps or striving to master your craft, join us to unleash your ultimate potential and rise to greatness.
            </p>

            <div className="mt-4">
                <Link href={"/courses"}>
                    <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        Explore courses
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default HeroSection;
