import React from "react";
import { CLIPS } from "../data/clips";

interface FilmBackdropProps {
  videoRefs: React.MutableRefObject<Record<string, HTMLVideoElement | null>>;
  progressBarRef: React.RefObject<HTMLSpanElement | null>;
  onVideoMetadata?: (file: string, video: HTMLVideoElement) => void;
}

export function FilmBackdrop({
  videoRefs,
  progressBarRef,
  onVideoMetadata,
}: FilmBackdropProps) {
  return (
    <>
      <div className="film" aria-hidden="true">
        {CLIPS.map((clip, index) => (
          <video
            key={clip.file}
            ref={(el) => {
              videoRefs.current[clip.file] = el;
            }}
            data-file={clip.file}
            poster={clip.posterSrc}
            muted
            playsInline
            preload={index === 0 ? "auto" : "none"}
            disablePictureInPicture
            onLoadedMetadata={(e) => {
              onVideoMetadata?.(clip.file, e.currentTarget);
            }}
          />
        ))}
        <div className="shade" />
        <div className="shade ends" />
      </div>
      <div className="progress" aria-hidden="true">
        <span ref={progressBarRef} />
      </div>
    </>
  );
}
