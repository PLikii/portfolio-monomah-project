"use client";

import { useEffect, useRef } from "react";

export default function VideoSection() {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    ref.current
      ?.play()
      .then((_) => {})
      .catch((_) => {
        console.error("Failed to play video");
      });
  }, []);

  return (
    <div className="relative h-[500px]">
      <video ref={ref} preload="none" muted loop className="h-full w-full object-cover brightness-75">
        <source src="/main-video/vp9.webm" type="video/webm; codecs=vp9" />
        <source src="/main-video/1080p.mp4" type="video/mp4" />
      </video>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute inset-1/2 flex min-w-[450px] flex-col items-center justify-center">
        <h1 className="mb-5 font-extrabold text-2xl text-primary-foreground drop-shadow-lg lg:text-5xl">Lorem Ipsum</h1>
        <p className="text-balance text-center text-primary-foreground/80 drop-shadow-lg">
          Lorem Ipsum - it is a "fish" text used in typography and design. Lorem Ipsum has, in fact, been the standard
          "fish" since the 16th century
        </p>
      </div>
    </div>
  );
}
