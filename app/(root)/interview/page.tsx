"use client";
import React from "react";
import Agent from "@/components/Agent";
import VantaBackground from "@/components/VantaBackground";

const Page = () => {
    return (
        <VantaBackground>
            {/* Navbar */}

            {/* Heading */}
            <header className="text-center mt-10 text-white">
                <h2 className="text-3xl font-semibold">Interview Generation</h2>
            </header>

            {/* Agent */}
            <main className="flex items-center justify-center mt-10">
                <Agent userName="You" />
            </main>
        </VantaBackground>
    );
};

export default Page;
