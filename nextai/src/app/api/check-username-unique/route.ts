import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { z } from 'zod';
import { usernameValidation } from "@/schemas/signUpSchema";

const UserNameValidationSchema = z.object({
    username: usernameValidation,
});

export async function GET(request: Request) {
    try {
        await dbConnect();

        const { searchParams } = new URL(request.url);
        const username = searchParams.get('username');

        if (!username) {
            return new Response(
                JSON.stringify({ success: false, message: 'Username query parameter is required.' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const validationResult = UserNameValidationSchema.safeParse({ username });
        if (!validationResult.success) {
            const errors = validationResult.error.format().username?._errors || [];
            return new Response(
                JSON.stringify({
                    success: false,
                    message: errors.length > 0 ? errors.join(', ') : 'Invalid query parameters',
                }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const existingUser = await UserModel.findOne({ username, isVerified: true });
        if (existingUser) {
            return new Response(
                JSON.stringify({ success: false, message: 'Username is unavailable, try with another username.' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        return new Response(
            JSON.stringify({ success: true, message: 'Username is available.' }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );

    } catch (error) {
        console.error('Error checking username:', error);
        return new Response(
            JSON.stringify({ success: false, message: 'Internal Server Error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
