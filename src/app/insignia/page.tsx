"use client";

import { useRef, useState } from "react";
import { Header, Footer, FadeIn, containerStyle } from "@/components/shared";

export default function Insignia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh" }}>
      <Header />

      {/* Video Section */}
      <section
        style={{
          background: "#000",
          color: "#fff",
          minHeight: "100svh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div style={containerStyle}>
          <FadeIn>
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/9",
                borderRadius: "1rem",
                overflow: "hidden",
              }}
            >
              <video
                ref={videoRef}
                src="https://kota-content.b-cdn.net/app/uploads/2026/06/insignia_video.mp4"
                poster="https://kota-content.b-cdn.net/app/uploads/2026/06/image-2.png"
                playsInline
                controls
                preload="metadata"
                aria-label="Play Insignia"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onLoadedData={() => setIsLoaded(true)}
              />
              {!isLoaded && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#111",
                  }}
                >
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      border: "3px solid rgba(255,255,255,0.2)",
                      borderTopColor: "#fff",
                      borderRadius: "50%",
                      animation: "spin 1s linear infinite",
                    }}
                  />
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <Footer />
    </main>
  );
}
