import React from 'react';
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AgentProps {
    userName: string;
}

enum CallStatus {
    INACTIVE = 'INACTIVE',
    CONNECTING = 'CONNECTING',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED',
}

const Agent = ({ userName }: AgentProps) => {
    const callStatus = CallStatus.FINISHED;
    const isSpeaking = true;
    const messages = [
        'Whats your name?',
        'My name is Zaina Azam , nice to meet you!'
    ];
    const lastMessage = messages[messages.length - 1];

    return (
        <div className="flex flex-col gap-6 w-full items-center">
            {/* Top cards: Interviewer & User */}
            <div className="call-view w-full flex flex-col sm:flex-row gap-6 justify-center">
                <div className="card-interviewer border-2">
                    <div className="avatar">
                        <Image
                            src="/ai-avatar.png"
                            alt="vapi"
                            width={65}
                            height={54}
                            className="object-cover"
                        />
                        {isSpeaking && <span className="animate-speak"></span>}
                    </div>
                    <h3 style={{ color: "white" }}>An Interviewer</h3>
                </div>

                <div className="card-border outline-none">
                    <div className="card-content outline-none">
                        <Image
                            src="/user-avatar.png"
                            alt="user avatar"
                            width={540}
                            height={540}
                            className="rounded-full object-cover size-[120px]"
                        />
                        <h3 style={{ color: "white" }}>{userName}</h3>
                    </div>
                </div>
            </div>

            {/* Message Box */}
            {messages.length > 0 && (
                <div className="transcript-border w-full max-w-xl">
                    <div className="transcript">
                        <p
                            key={lastMessage}
                            className={cn(
                                'transition-opacity duration-500 opacity-0',
                                'animate-fadeIn opacity-100'
                            )}
                        >
                            {lastMessage}
                        </p>
                    </div>
                </div>
            )}

            {/* Call Button */}
            <div className="w-full flex justify-center">
                {callStatus !== CallStatus.ACTIVE ? (
                    <button className="relative btn-call">
                        <span
                            className={cn(
                                'absolute animate-ping rounded-full opacity-75',
                                callStatus !== CallStatus.CONNECTING ? 'hidden' : ''
                            )}
                        />
                        <span>
                            {callStatus === CallStatus.INACTIVE || callStatus === CallStatus.FINISHED
                                ? 'CALL'
                                : '...'}
                        </span>
                    </button>
                ) : (
                    <button className="btn-disconnect">
                        END
                    </button>
                )}
            </div>
        </div>
    );
};

export default Agent;
