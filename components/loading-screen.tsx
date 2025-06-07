"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LoadingScreenProps {
    onLoadingComplete: () => void;
}

export function LoadingScreen({ }: LoadingScreenProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <div className="flex flex-col items-center gap-6">
                <div className="relative">
                    <Image
                        src="/Me.gif"
                        alt="Scotty Peterson - Loading"
                        width={100}
                        height={100}
                        className="rounded-lg"
                        priority
                        unoptimized
                    />
                </div>

                <div className="flex flex-col items-center gap-2">
                    <h2 className="text-lg font-medium text-foreground">
                        Scotty Peterson
                    </h2>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                        <span>Loading portfolio...</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
} 