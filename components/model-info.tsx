"use client";
import { Database } from "@/app/types/database";
import {
  createClientComponentClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { createClient, PostgrestError } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { useEffect, useState } from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Image,
  Link,
  Spacer,
  Spinner,
  Textarea,
  User,
} from "@nextui-org/react";
import ModelAudio from "./model-audio-card";
import { IconHeadphonesFilled } from '@tabler/icons-react';

const supabase = createClientComponentClient<Database>();

interface ModelInfoProps {
  id: string;
}

function Modelinfo({ id }: ModelInfoProps) {
  const [data, setData] = useState<any[] | null>(null);
  const [user, setUser] = useState<any | null>(null);
  const [error, setError] = useState<PostgrestError | null>(null);
  const [comments, setComments] = useState<string | null>(null)

  const handleDownloadClick = () => {
    if (data) {
      const modelUrl = data[0]?.model_url;

      if (modelUrl) {
        window.open(modelUrl, "_blank");
      }
    }
  };

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("models")
        .select("*")
        .eq("id", id);
  
      if (error) {
        setError(error);
        return;
      }
  
      setData(data);
  
      const { data: userData, error: userError } = await supabase
        .from("users")
        .select("avatar_url, full_name, id")
        .eq("id", data[0]?.user_id);
  
      if (userError) {
        setError(userError);
        return;
      }
  
      setUser(userData[0]);
    }
    
  
    fetchData();
  }, [id]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center text-blue-500">
          Oops! The page you are looking for was not found
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          It seems like the model you re looking for does not exist.
        </p>
        <a href="/" className="mt-4 text-blue-500 hover:underline">
          Go back to the homepage
        </a>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );
  }
  const modelUrl = data[0]?.model_url || "";
  const audio_url = data[0]?.audio_url || "Unknown";
  return (
    <div className="mt-20">
    <div className="flex items-center justify-center">
      <Card className="max-w-[400px] mr-16 mb-20 h-[100%] w-[100%] ">
        <CardHeader className="flex gap-8 justify-center text-xl">
          <p>{data[0].content}</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>{data[0]?.description}</p>
          <Divider className="my-8" />
          <p>Technology: {data[0]?.version}</p>
          <p>Epochs: {data[0].epochs}</p>
          <p>Language: {data[0].language}</p>
          <p>Tag: {data[0].tag}</p>
          <p>
            Uploaded at{" "}
            {new Date(data[0].created_at).toLocaleString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </CardBody>
        <Button
          color="primary"
          variant="shadow"
          className="w-48 flex place-self-center text-lg mb-8 mt-8"
          startContent={<AiOutlineCloudDownload />}
          onClick={handleDownloadClick}
        >
          Download
        </Button>
        <Divider />
        {audio_url === "Unknown" ? (
          <div className="flex flex-col items-center justify-center">
          <p className="m-4">No audio available</p>
          <IconHeadphonesFilled size={48} className="m-4"/> 
          </div>
      ) : (
      <ModelAudio
        image_url={data[0].image_url}
        audio_url={data[0].audio_url}
      />
    )}
        <Divider />
        <CardFooter>
          <User
            name={<span style={{ fontSize: "18px" }}>{user?.full_name}</span>}
            description={
              <Link href={`/users/${user?.full_name}`} size="sm" isExternal>
                @{user?.full_name}
              </Link>
            }
            avatarProps={{
              src: user?.avatar_url,
            }}
          />
        </CardFooter>
      </Card>
      <div className="flex flex-col flex-1 justify-end">
        <div className="flex-1"></div>
        <Image
          isBlurred
          width={800}
          height={600}
          alt="Picture of the model"
          src={data[0].image_url}
          className="hidden md:block w-800 h-600 relative mr-4 max-w-full max-h-[400px]"
          classNames={{
            blurredImg: "filter blur-xl",
          }}
        />
    </div>
    </div>
    <div className="flex flex-col flex-1 ">
  <div className="flex-1"></div>
  
  <Card>
    <CardBody>
      <Textarea
        labelPlacement="outside"
        placeholder="Here you can comment on your opinion of the model"
        className="mx-auto max-w-full max-h-full text-center"
        variant="bordered"
      />

      <Button
              color="primary"
              variant="shadow"
              className="w-10 h-10  flex place-self-center text-lg mt-4 ml-[70rem]"
            >
              Send
            </Button>
    </CardBody>
    
  </Card>
</div>
<Card className="my-8">
      <CardBody>
        <p>{comments || "Be the first to comment!"}</p>
      </CardBody>
    </Card>
</div>
    
  );  
}

export default Modelinfo;
