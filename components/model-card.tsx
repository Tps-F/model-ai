"use client"

import { Card, CardHeader, CardBody, Image, Chip } from "@nextui-org/react";

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
}) {
  const formattedDate = new Date(created_at).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  console.log(content, language, epochs, version);
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start rounded-s-lg">
        <p className="font-bold">{content}</p>
        <small className="text-default-500">Created by {userFullName}</small>
        <small className="text-default-500">Uploaded at {formattedDate}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <div className="w-100 h-100 relative">
          <Image
            loading="eager"
            alt="Card background"
            className="object-cover rounded-xl w-100 h-80 rounded-s-lg"
            src={imageUrl}
          />
          {version !== "Unknown" && (
            <div
              className="absolute top-0 left-0 m-2 z-20 text-sm font-medium text-white rounded p-1"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.50)",
                borderRadius: "4px", 
              }}
            >
              {version}
            </div>
          )}
          <div className="absolute bottom-0 right-0 mb-1 flex flex-row items-end z-10">
          {language === "English" && (
            <div className="w-10 h-7 mr-2" style={{
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
            <div className="w-10 h-7 mr-2" style={{
              backgroundColor: "rgba(0, 0, 0, 0.80)",
              borderRadius: "4px",
              display: "flex",        // 
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
            <div className="w-10 h-7 mr-2" style={{
              backgroundColor: "rgba(0, 0, 0, 0.80)",
              borderRadius: "4px",
              display: "flex",        // 
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
      </CardBody>
    </Card>
  );
}
