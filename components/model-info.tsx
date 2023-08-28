"use client"
import { Database } from '@/app/types/database';
import { createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { createClient, PostgrestError } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { useEffect, useState } from 'react';
import { AiOutlineCloudDownload } from "react-icons/ai";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Image, Link, Spacer, Spinner, User } from '@nextui-org/react';

const supabase = createClientComponentClient<Database>()

interface ModelInfoProps {
  id: string; 
}

function Modelinfo({ id }: ModelInfoProps) {
    const [data, setData] = useState<any[] | null>(null);
  const [user, setUser] = useState<any | null>(null);
  const [error, setError] = useState<PostgrestError | null>(null);

  const handleDownloadClick = () => {
    if (data) {
      const modelUrl = data[0]?.model_url;

      if (modelUrl) {
        window.open(modelUrl, '_blank');
      }
    }
  };

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from('models')
        .select('*')
        .eq('id', id);

      if (error) {
        setError(error);
        return;
      }

      setData(data);

      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('avatar_url, full_name')
        .eq('id', data[0]?.user_id);

      if (userError) {
        setError(userError);
        return;
      }

      setUser(userData[0]);
    }

    fetchData();
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div className='flex items-center justify-center'><Spinner /></div>;
  }

  const modelUrl = data[0]?.model_url || '';
  return (
    <div className="flex">
      <Card className="max-w-[400px] mr-16 h-[100%] w-[100%] " >
        <CardHeader  className="flex gap-8 justify-center text-xl">
        <p>{data[0].content}</p>
        </CardHeader>
        <Divider/>
        <CardBody>
          <p>{data[0]?.description}</p>
        </CardBody>
        <Button 
        color="primary" 
        variant="shadow" 
        className='w-48 flex place-self-center text-lg mb-8 mt-8'  
        startContent={<AiOutlineCloudDownload/>} 
        onClick={handleDownloadClick}
        >
        Download
        </Button> 
        <Divider/>
        <CardFooter>
        <User   
            name={user?.full_name || "Anonymous"} 
            avatarProps={{
              src: user?.avatar_url
            }}
          />
        </CardFooter>
      </Card>
      <div className="flex flex-col flex-1 justify-end">
        <div className="flex-1"></div> 
        <div className="w-800 h-600 relative">
          <Image 
            isBlurred
            width={800}
            height={600}
            src={data[0].image_url}
            className="w-800 h-600  relative mr-4"
          />
          {/* <p>ID: {data[0].id}</p>
          <p>Content: {data[0].content}</p>
          <p>Name: {data[0].user_id}</p> */}
        </div>
      </div>
    </div>
  );
}

export default Modelinfo;