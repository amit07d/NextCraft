import { google } from '@ai-sdk/google';
import { GoogleAICacheManager } from '@google/generative-ai/server';
import { generateText } from 'ai';
import { NextResponse } from 'next/server';

export const runtime = 'edge'; // Specify the runtime environment

// Initialize the cache manager with the API key
const cacheManager = new GoogleAICacheManager(
    process.env.GOOGLE_GENERATIVE_AI_API_KEY as string
);

type GoogleModelCacheableId =
    | 'models/gemini-1.5-flash-001'
    | 'models/gemini-1.5-pro-001';

export async function POST(req: Request) {
    try {
        const model: GoogleModelCacheableId = 'models/gemini-1.5-pro-001';

        const prompt =
       "Generate a list of three open-ended and engaging questions as a single string. Each question should be separated by '||'. Ensure the questions vary in theme and style, covering topics like hobbies, creativity, hypothetical scenarios, technology, or self-reflection. Examples might include: 'What’s a skill you’ve always wanted to learn?||If you could live in any fictional universe, which one would it be?||What’s a recent technology or app that impressed you and why?'. Each time, ensure the questions are unique, thought-provoking, and promote friendly, inclusive conversations."


        // Create a cache for the AI model
        const { name: cachedContent } = await cacheManager.create({
            model,
            contents: [
                {
                    role: 'user',
                    parts: [{ text: prompt }],
                },
            ],
            ttlSeconds: 60 * 5, // Cache valid for 5 minutes
        });

        // Generate the response with the cached model content
        const { text: engagingQuestions } = await generateText({
            model: google(model, { cachedContent }),
            prompt,
        });

        // Return the generated questions as a JSON response
        return NextResponse.json({  
            success: true,
            engagingQuestions,
        });
    } catch (error) {
        if (error instanceof Error) {
            // Handle API or general errors
            return NextResponse.json(
                { success: false, message: error.message },
                { status: 500 }
            );
        } else {
            // Handle unexpected errors
            console.error('An unexpected error occurred:', error);
            throw error;
        }
    }
}
