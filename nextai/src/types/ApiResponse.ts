import { Message } from "@/model/User";

export interface ApiResponse{
    isacceptingMessages: boolean;
    success: boolean;
    message: string;
    isAcceptingMessages?: boolean
    messages?:Array<Message>
}