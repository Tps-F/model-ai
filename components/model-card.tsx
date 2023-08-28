"use client"

import {Card, CardHeader, CardBody, Image} from "@nextui-org/react"; 

export default function ModelCard ({
    userFullName,
    imageUrl,
    content,
    full_name,
    id
  }: {
    userFullName: string
    imageUrl: string
    content: string
    full_name: string
    id: string
  }) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{content}</p>
            <small className="text-default-500">Subido por: {userFullName}</small>
          <small className="text-default-500">ID: {id}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
      <div className="w-100 h-100">
        <Image
          loading="eager"

          alt="Card background"
          className="object-cover rounded-xl w-100 h-80"
          src={imageUrl}
        />
        </div>
      </CardBody>
    </Card>
  );
}
