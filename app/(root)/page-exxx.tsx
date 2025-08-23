"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const TestVanta = () => {
    const vantaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let effect: any;
        if (vantaRef.current) {
            import("vanta/dist/vanta.net.min.js").then((VANTA) => {
                effect = VANTA.default({
                    el: vantaRef.current!,
                    THREE,
                });
            });
        }
        return () => {
            if (effect) effect.destroy();
        };
    }, []);

    return <div ref={vantaRef} style={{ height: "100vh", width: "100%" }} />;
};

export default TestVanta;