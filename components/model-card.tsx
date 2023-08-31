"use client";

import { Box, Title, Image, Badge, Text } from "@mantine/core";
import { Avatar } from "@nextui-org/react";
import React, { useState } from "react";

export default function ModelCard({
  userFullName,
  imageUrl,
  content,
  full_name,
  id,
  language,
  epochs,
  version,
  created_at,
  tag,
  avatar_url,
}: {
  userFullName: string;
  imageUrl: string;
  content: string;
  full_name: string;
  id: string;
  language: string;
  epochs: string;
  version: string;
  created_at: string;
  tag: string;
  avatar_url: string;
}) {
  const formattedDate = new Date(created_at).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const [isLoaded, setIsLoaded] = React.useState(false);

  const toggleLoad = () => {
    setIsLoaded(!isLoaded);
  };
  const truncateTitle = (text: string, maxWords: number) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  console.log(content, language, epochs, version);
  return (
    <Box>
      <div className="mb-0">
        <div className="overflow-visible">
          <div className="w-100 h-120 relative object-fit">
            <div className="relative">
              <Image
                src={imageUrl}
                width={300}
                height={400}
                radius="md"
                alt="Picture of the model"
                style={{
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 1)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "20%",
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6))",
                  backdropFilter: "blur(1px)", 
                  opacity: 1, 
                  transition: "opacity 0.3s", 
                }}
              />
              <Title
                order={3}
                className="font-inter text-white leading-5 absolute bottom-0 left-0 right-0 p-4 text-xl"
                size="lg"
              >
                {truncateTitle(content, 4)}
              </Title>
              <Avatar
                src={avatar_url}
                className="absolute bottom-0 left-0 right-0 mb-12 ml-4 w-6 h-6 text-tiny"
                isBordered
                radius="full"
              />
              <Text
                fz="sm"
                className="font-inter text-white leading-5 absolute bottom-0 left-0 right-0 mb-8 p-4 ml-8 "
              >
                {userFullName}
              </Text>
            </div>

            <div className="absolute top-0 left-0 m-2 z-20 flex">
              {version !== "Unknown" && (
                <Badge
                  className="text-sm font-medium text-white rounded p-1"
                  radius="lg"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.32)",
                    marginRight: "8px",
                    fontSize: "12px",
                  }}
                >
                  {version}
                </Badge>
              )}
              {epochs !== "Unknown" && (
                <Badge
                  className="text-sm font-medium text-white rounded p-1"
                  radius="lg"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.32)",
                    marginRight: "8px",
                    fontSize: "12px",
                  }}
                >
                  {version === "SVC" ? `${epochs} Steps` : `${epochs} Epochs`}
                </Badge>
              )}
              {tag !== "Unknown" && (
                <Badge
                  className="text-sm font-medium text-white rounded p-1"
                  radius="lg"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.32)",
                    marginRight: "8px",
                    fontSize: "12px",
                  }}
                >
                  {tag}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
function setIsLoaded(arg0: boolean) {
  throw new Error("Function not implemented.");
}
