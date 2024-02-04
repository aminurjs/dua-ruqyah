"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import "./audio.css";

const Audio = ({ audio }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleDuration = () => {
    setDuration(audioRef.current.duration);
  };

  const handleRange = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };
  return (
    <div>
      <audio
        ref={audioRef}
        src={audio}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleDuration}
      />
      <div className="flex gap-3 items-center">
        <button onClick={handlePlayPause}>
          <Image
            src={
              isPlaying
                ? "https://duaruqyah.com/assets/others/pause.svg"
                : "https://duaruqyah.com/assets/others/audiobtn.svg"
            }
            alt="audio btn"
            width={45}
            height={45}
          />
        </button>
        {isPlaying && (
          <div className="w-1/3 h-1.5 relative flex items-center">
            <input
              type="range"
              value={currentTime}
              max={duration}
              onChange={handleRange}
            />
            <span
              style={{ width: `${(currentTime * 100) / duration}%` }}
              className="h-1.5 bg-title absolute left-0 top-0 rounded"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Audio;
