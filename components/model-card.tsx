"use client"

import { Image } from "@nextui-org/react";
import React from "react";

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
  tag
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
  tag: string
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


  console.log(content, language, epochs, version);
  return (
    <div className="py-4" >
      <div className="overflow-visible py-2">
        <div className="w-100 h-120 relative object-fit">
          <Image
            loading="eager"
            alt="Card background"
            className="object-cover w-100 h-80 max-w-full max-h-full  "
            src={imageUrl}
            isBlurred
            shadow="lg"
            onLoad={toggleLoad}   
            isZoomed
            radius="md"
            
          />
           <p className="font-bold text-white">{content}</p>
          <div className="absolute top-0 left-0 m-2 z-20 flex">
          {version !== "Unknown" && (
              <div
                className="text-sm font-medium text-white rounded p-1"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.50)",
                  borderRadius: "4px",
                  marginRight: "8px",
                }}
              >
                {version}
              </div>
            )}
            {epochs !== "Unknown" && (
              <div
                className="text-sm font-medium text-white rounded p-1"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.50)",
                  borderRadius: "4px",
                  marginRight: "8px", 
                }}
              >
                {version === "SVC" ? `${epochs} Steps` : `${epochs} Epochs`}
              </div>
            )}
            {tag !== "Unknown" && (
              <div
                className="text-sm font-medium text-white rounded p-1"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.50)",
                  borderRadius: "4px",
                }}
              >
                {tag}
            </div>
          )}
          </div>
          <div className="absolute bottom-0 right-0 mb-1 flex flex-row items-end z-10">
          {language === "English" && (
            <div className="w-10 h-7 mb-6 mr-2" style={{
              backgroundColor: "rgba(0, 0, 0, 0.80)",
              borderRadius: "4px",
              display: "flex",        // 
              alignItems: "center",  
              justifyContent: "center" 
            }}>
              <img 
                src="https://i.imgur.com/iQWEY3Z.png" 
                alt="English Icon"    
                className="w-6 h-4"
              />
            </div>
          )}
          {language === "Spanish" && (
            <div className="w-10 h-7 mb-6 mr-2" style={{
              backgroundColor: "rgba(0, 0, 0, 0.80)",
              borderRadius: "4px",
              display: "flex",        
              alignItems: "center",  
              justifyContent: "center" 
            }}>
              <img 
                src="https://imgs.search.brave.com/9GPsrsch4P2p5nj1Nz8Ma_eutXor-L54fZzajRNRgFQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxMi8w/NC8xMS8xNS8zMy9z/cGFpbi0yODUzMF82/NDAucG5n" 
                alt="Spanish Icon"    
                className="w-6 h-4"
              />
            </div>
          )}
          {language === "Other" && (
            <div className="w-10 h-7 mb-6 mr-2" style={{
              backgroundColor: "rgba(0, 0, 0, 0.80)",
              borderRadius: "4px",
              display: "flex",        
              alignItems: "center",  
              justifyContent: "center" 
            }}>
              <img 
                src="https://imgs.search.brave.com/wpKcSvJlyO-gcF3juyVUK2v9w0XbI8IDATawRMAvl1Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/cmVzdW1lbi1zdXBl/cmZpY2llLXRleHR1/cmFzLW11cm8tcGll/ZHJhLWhvcm1pZ29u/LWJsYW5jb183NDE5/MC04MTg5LmpwZz9z/aXplPTYyNiZleHQ9/anBn" 
                alt="Other Icon"    
                className="w-6 h-4"
              />
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
function setIsLoaded(arg0: boolean) {
  throw new Error("Function not implemented.");
}

