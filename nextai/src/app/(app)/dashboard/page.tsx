'use client';

import MessageCard from '@/components/MessageCard';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Message } from '@/model/User';
import { ApiResponse } from '@/types/ApiResponse';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';
import { Loader2, RefreshCcw } from 'lucide-react';
import { User } from 'next-auth';
import { useSession } from 'next-auth/react';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { acceptMessagesSchema } from '@/schemas/acceptMessageSchema';
import { z } from 'zod';

// Infer types from schema
type AcceptMessagesFormValues = z.infer<typeof acceptMessagesSchema>;

function UserDashboard() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isSwitchLoading, setIsSwitchLoading] = useState(false);

    const { toast } = useToast();
    const { data: session } = useSession();

    // Form setup
    const form = useForm<AcceptMessagesFormValues>({
        resolver: zodResolver(acceptMessagesSchema),
        defaultValues: { acceptMessages: false },
    });
    const { register, watch, setValue } = form;
    const acceptMessages = watch('acceptMessages');

    // Fetch message acceptance setting
    const fetchAcceptMessages = useCallback(async () => {
        setIsSwitchLoading(true);
        try {
            const response = await axios.get<ApiResponse>('/api/accept-messages');
            setValue('acceptMessages', response.data.isacceptingMessages);
        } catch (error) {
            const axiosError = error as AxiosError<ApiResponse>;
            toast({
                title: 'Error',
                description:
                    axiosError.response?.data.message ?? 'Failed to fetch message settings',
                variant: 'destructive',
            });
        } finally {
            setIsSwitchLoading(false);
        }
    }, [setValue, toast]);

    // Fetch user messages
    const fetchMessages = useCallback(
        async (refresh: boolean = false) => {
            setIsLoading(true);
            try {
                const response = await axios.get<ApiResponse>('/api/get-messages');
                setMessages(response.data.messages || []);
                if (refresh) {
                    toast({
                        title: 'Refreshed Messages',
                        description: 'Showing the latest messages.',
                    });
                }
            } catch (error) {
                const axiosError = error as AxiosError<ApiResponse>;
                toast({
                    title: 'Error',
                    description:
                        axiosError.response?.data.message ?? 'Failed to fetch messages.',
                    variant: 'destructive',
                });
            } finally {
                setIsLoading(false);
            }
        },
        [toast]
    );

    // Update message acceptance setting
    const handleSwitchChange = async () => {
        try {
            setIsSwitchLoading(true);
            const response = await axios.post<ApiResponse>('/api/accept-messages', {
                acceptMessages: !acceptMessages,
            });
            setValue('acceptMessages', !acceptMessages);
            toast({
                title: response.data.message,
                variant: 'default',
            });
        } catch (error) {
            const axiosError = error as AxiosError<ApiResponse>;
            toast({
                title: 'Error',
                description:
                    axiosError.response?.data.message ?? 'Failed to update message settings.',
                variant: 'destructive',
            });
        } finally {
            setIsSwitchLoading(false);
        }
    };

    // Delete message locally
    const handleDeleteMessage = (messageId: string) => {
        setMessages((prevMessages) =>
            prevMessages.filter((message) => message._id !== messageId)
        );
    };

    // Copy profile URL to clipboard
    const copyToClipboard = () => {
        const baseUrl = `${window.location.protocol}//${window.location.host}`;
        const profileUrl = `${baseUrl}/u/${(session?.user as User)?.username}`;
        navigator.clipboard.writeText(profileUrl);
        toast({
            title: 'URL Copied!',
            description: 'Profile URL has been copied to clipboard.',
        });
    };

    useEffect(() => {
        if (!session?.user) return;

        fetchMessages();
        fetchAcceptMessages();
    }, [session, fetchMessages, fetchAcceptMessages]);

    if (!session?.user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="my-8 mx-4 md:mx-8 lg:mx-auto p-6 bg-white rounded w-full max-w-6xl">
            <h1 className="text-4xl font-bold mb-4">User Dashboard</h1>

            <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Copy Your Unique Link</h2>
                <div className="flex items-center">
                    <input
                        type="text"
                        value={`${window.location.protocol}//${window.location.host}/u/${(session.user as User).username}`}
                        disabled
                        className="input input-bordered w-full p-2 mr-2"
                    />
                    <Button onClick={copyToClipboard}>Copy</Button>
                </div>
            </div> 

            <div className="mb-4">
                <Switch
                    {...register('acceptMessages')}
                    checked={acceptMessages}
                    onCheckedChange={handleSwitchChange}
                    disabled={isSwitchLoading}
                />
                <span className="ml-2">
                    Accept Messages: {acceptMessages ? 'On' : 'Off'}
                </span>
            </div>
            <Separator />

            <Button
                className="mt-4"
                variant="outline"
                onClick={(e) => {
                    e.preventDefault();
                    fetchMessages(true);
                }}
            >
                {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                    <RefreshCcw className="h-4 w-4" />
                )}
            </Button>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                {messages.length > 0 ? (
                    messages.map((message) => (
                        <MessageCard
                            key={message._id}
                            message={message}
                            onMessageDelete={handleDeleteMessage}
                        />
                    ))
                ) : (
                    <p>No messages to display.</p>
                )}
            </div>
        </div>
    );
}

export default UserDashboard;
