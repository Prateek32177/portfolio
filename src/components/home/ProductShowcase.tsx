'use client';

import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProductShowcaseProps {
    videoSrc: string;
    title: string;
    description: string;
    link: string;
    linkLabel?: string;
    isYoutube?: boolean;
}

export function ProductShowcase({
    videoSrc,
    title,
    description,
    link,
    linkLabel = 'Explore',
    isYoutube = false,
}: ProductShowcaseProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container || isYoutube) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && videoRef.current) {
                    videoRef.current.play().catch(() => {});
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(container);
        return () => observer.disconnect();
    }, [isYoutube]);

    return (
        <div
            ref={containerRef}
            className="mb-12 relative overflow-hidden rounded-lg bg-gradient-to-b from-gray-50 to-white border border-gray-100 p-1"
        >
            <div className="relative bg-white rounded-lg overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
                {isYoutube ? (
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${videoSrc}?autoplay=1&controls=0&modestbranding=1`}
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="border-0"
                    />
                ) : (
                    <>
                        <video
                            ref={videoRef}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src={videoSrc} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </>
                )}
            </div>
            <div className="p-4">
                <h3 className="text-sm font-semibold text-teal-600 mb-1">{title}</h3>
                <p className="text-xs text-gray-600">{description}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-teal-600 hover:text-teal-700 mt-2"
                >
                    {linkLabel} <ArrowUpRight size={12} />
                </a>
            </div>
        </div>
    );
}
