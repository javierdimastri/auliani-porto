"use client";

import { useEffect } from "react";

interface LightboxProps {
  image: {
    id: number;
    src: string;
    alt: string;
    category: string;
  };
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({ image, onClose, onNext, onPrev }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-pink-light transition-colors text-4xl leading-none"
        aria-label="Close"
      >
        ×
      </button>

      {/* Previous Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-6 text-white hover:text-pink-light transition-colors text-4xl"
        aria-label="Previous"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-6 text-white hover:text-pink-light transition-colors text-4xl"
        aria-label="Next"
      >
        ›
      </button>

      {/* Image */}
      <div
        className="max-w-7xl max-h-[90vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="max-w-full max-h-[90vh] object-contain"
        />
        <div className="mt-4 text-center">
          <p className="text-white text-sm uppercase tracking-wider">
            {image.category}
          </p>
        </div>
      </div>
    </div>
  );
}
