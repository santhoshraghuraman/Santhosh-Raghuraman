"use client";

import { useState, useRef } from "react";

export default function InteractiveCard({ children }) {
  const [coords, setCoords] = useState({ rotateX: 0, rotateY: 0, glossX: 50, glossY: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const dx = (x - xc) / xc;
    const dy = (y - yc) / yc;

    const rotateX = -dy * 8;
    const rotateY = dx * 8;

    const glossX = (x / rect.width) * 100;
    const glossY = (y / rect.height) * 100;

    setCoords({ rotateX, rotateY, glossX, glossY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ rotateX: 0, rotateY: 0, glossX: 50, glossY: 50 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform: isHovered 
          ? `perspective(1000px) rotateX(${coords.rotateX}deg) rotateY(${coords.rotateY}deg) translateY(-8px) scale(1.02)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)",
        transition: isHovered ? "none" : "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "12px",
      }}
      className="interactive-card-wrapper"
    >
      {children}
      {isHovered && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: "12px",
            pointerEvents: "none",
            background: `radial-gradient(circle 240px at ${coords.glossX}% ${coords.glossY}%, rgba(255, 255, 255, 0.45) 0%, rgba(37, 99, 235, 0.02) 40%, transparent 80%)`,
            zIndex: 10,
            mixBlendMode: "overlay",
          }}
        />
      )}
    </div>
  );
}
