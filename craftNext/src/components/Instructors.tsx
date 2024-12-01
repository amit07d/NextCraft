'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
      id: 1,
      name: 'Ronaldo',
      designation: 'Vocal Coach',
      image:
        'https://c4.wallpaperflare.com/wallpaper/886/988/50/cristiano-ronaldo-football-4k-wallpaper-preview.jpg',
    },
    {
      id: 2,
      name: 'Wirtz',
      designation: 'Guitar Instructor',
      image:
        'https://cdn.mos.cms.futurecdn.net/ie5a6pDe7bCiai2kAAFgtN-1200-80.jpg',
    },
    {
      id: 3,
      name: 'Bellingham',
      designation: 'Piano Teacher',
      image:
        'https://images.wallpapersden.com/image/download/jude-bellingham-hd-real-madrid-celebration_bmdraGeUmZqaraWkpJRnZWVlrWZoaGg.jpg',
    },
    {
      id: 4,
      name: 'Vinicius',
      designation: 'Drumming Expert',
      image:
        'https://images.alphacoders.com/126/1265800.jpg',
    },
  ];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your musical journey</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors