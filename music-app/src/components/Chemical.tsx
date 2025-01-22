'use client'
import { Vortex } from "./ui/vortex";


function chemical() {
    return (
        <div className="text-center w-[calc(100%-4rem)] mx-auto rounded-md h-[30rem] overflow-hidden">
    <Vortex>
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-green-400 to-teal-600 mt-8">
            MASTERJI
        </h2>
        <p className="md:text-lg text-white font-extrabold text-center mb-4 text-4xl tracking-widest mt-4">
            "Nothing is impossible. The word itself says{' '}
            <span className="text-teal-500 px-2 py-1 rounded-lg inline-block shadow-lg">
                'I'm possible!'
            </span>{' '}
        </p>
    </Vortex>
</div>


    )
}

export default chemical