'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
        id: 1,
        name: 'Ronaldo',
        designation: 'Football Coach',
        image:
            'https://c4.wallpaperflare.com/wallpaper/886/988/50/cristiano-ronaldo-football-4k-wallpaper-preview.jpg',
    },
    {
        id: 2,
        name: 'Wirtz',
        designation: 'Tennis Instructor',
        image:
            'https://cdn.mos.cms.futurecdn.net/ie5a6pDe7bCiai2kAAFgtN-1200-80.jpg',
    },
    {
        id: 3,
        name: 'Bellingham',
        designation: 'Basketball Trainer',
        image:
            'https://images.wallpapersden.com/image/download/jude-bellingham-hd-real-madrid-celebration_bmdraGeUmZqaraWkpJRnZWVlrWZoaGg.jpg',
    },
    {
        id: 4,
        name: 'Vinicius',
        designation: 'Cricket Coach',
        image:
            'https://images.alphacoders.com/126/1265800.jpg',
    },
];

function Instructors() {
    return (
        <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
            <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
                <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
                <p className="md:text-lg text-white font-extrabold text-center mb-4 text-4xl tracking-widest">
                    Discover the talented professionals who will guide your Sports journey
                </p>
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                    <AnimatedTooltip items={instructors} />
                </div>
            </WavyBackground>
        </div>
    )
}

export default Instructors