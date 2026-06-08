"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [mounted, setMounted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setFadeOut(true), 800);
    const hideTimer = setTimeout(() => setMounted(false), 1200);
    return () => { clearTimeout(timer); clearTimeout(hideTimer); };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gray-950 transition-opacity duration-400 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/dark-theme-logo.png"
          alt="شرمب كابشن"
          fetchPriority="high"
          className="h-16 w-auto animate-pulse"
        />
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-500 [animation-delay:0ms]" />
          <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-500 [animation-delay:150ms]" />
          <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-500 [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
}
