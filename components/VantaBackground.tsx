"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import type { Engine } from "tsparticles-engine";

const VantaBackground = ({ children }: { children: React.ReactNode }) => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadStarsPreset(engine);
    }, []);

    return (
        <div style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh", zIndex: 0 }}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    preset: "stars",
                    background: { color: "#121124" },
                    particles: {
                        color: { value: "#ffffff" },
                        number: { value: 80, density: { enable: true, area: 800 } },
                        opacity: { value: 0.7 },
                        size: { value: 1.1 },
                        move: {
                            enable: true,
                            speed: 3, // Fast movement for stars
                            direction: "right",
                            random: false,
                            straight: false,
                            outModes: { default: "out" },
                        },
                        twinkle: {
                            particles: {
                                enable: true,
                                color: "#fff",
                                frequency: 0.04,
                                opacity: 0.8,
                            },
                        },
                    },
                    fullScreen: false,
                }}
                style={{ position: "absolute", width: "100vw", height: "100vh", zIndex: 0 }}
            />
            <div style={{ position: "relative", zIndex: 1, width: "100vw", height: "100vh" }}>
                {children}
            </div>
        </div>
    );
};

export default VantaBackground;