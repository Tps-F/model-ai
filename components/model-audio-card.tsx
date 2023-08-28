import React, { useState, useRef } from "react";
import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";

interface AudioProps {
  image_url: string;
  audio_url: string;
}

export default function ModelAudio(props: AudioProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
        audioRef.current.volume = volume;
      }
      setIsPlaying(!isPlaying);
      setIsPaused(false);
    }
  };

  const togglePause = () => {
    if (audioRef.current) {
      if (isPaused) {
        audioRef.current.play();
        audioRef.current.volume = volume;
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
      setIsPaused(!isPaused);
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[700px] m-8"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              shadow="md"
              src={props.image_url}
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex w-full items-center justify-center">
              <Button
                isIconOnly
                className="w-auto h-auto data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
                onClick={isPlaying ? togglePause : togglePlay}
              >
                {isPlaying ? (
                  <AiFillPauseCircle size={54} />
                ) : (
                  <AiFillPlayCircle size={54} />
                )}
              </Button>
            </div>

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="m-2"
            />
          </div>
        </div>
      </CardBody>
      <audio ref={audioRef} src={props.audio_url}></audio>
    </Card>
  );
}
