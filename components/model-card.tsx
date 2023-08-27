"use client"

import {Card, CardHeader, CardBody, Image} from "@nextui-org/react"; 

export default function ModelCard ({
    userFullName,
    imageUrl,
    content,
    full_name
  }: {
    userFullName: string
    imageUrl: string
    content: string
    full_name: string
  }) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{content}</p>
            <small className="text-default-500">Subido por: {userFullName}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          isZoomed
          alt="Card background"
          className="object-cover rounded-xl"
          src={imageUrl}
        />
      </CardBody>
    </Card>
  );
}
