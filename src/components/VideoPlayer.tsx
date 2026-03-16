"use client";

import { useRef, useState, useCallback } from "react";

interface VideoPlayerProps {
  src: string;
  className?: string;
}

export default function VideoPlayer({ src, className = "" }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
      setHasStarted(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  const handleEnded = useCallback(() => {
    setIsPlaying(false);
  }, []);

  return (
    <div
      className={`relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl ${className}`}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        preload="metadata"
        playsInline
        onEnded={handleEnded}
        className="w-full h-auto block"
      />

      <div
        className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${
          isPlaying
            ? "opacity-0 group-hover:opacity-100"
            : "opacity-100"
        }`}
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
          {isPlaying ? (
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 text-kifd-dark"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 text-kifd-dark ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </div>
      </div>

      {!hasStarted && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-24 pointer-events-none" />
      )}
    </div>
  );
}
