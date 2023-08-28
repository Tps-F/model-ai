"use client"
import { Database } from '@/app/types/database';
import { createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { createClient, PostgrestError } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { useEffect, useState } from 'react';
import { AiOutlineCloudDownload } from "react-icons/ai";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Image, Link, Spacer, Spinner, User } from '@nextui-org/react';
import model from '@/app/[id]/page';
import { title } from "@/components/primitives";

const supabase = createClientComponentClient<Database>()

interface ModelInfoProps {
  userFullName: string;
}

function Userinfo({ userFullName }: ModelInfoProps) {
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
      // Fetch user data based on full name
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('avatar_url, full_name, id')
        .eq('full_name', userFullName);

      if (userError) {
        setError(userError);
        return;
      }

      setUser(userData[0]);

      // Fetch models associated with the user's ID
      const { data: modelsData, error: modelsError } = await supabase
        .from('models')
        .select('*')
        .eq('user_id', userData[0]?.id);

      if (modelsError) {
        setError(modelsError);
        return;
      }

      setData(modelsData);
    }

    fetchData();
  }, [userFullName]);

  if (error) {
    return   <div className="flex items-center justify-center"><h1 className={title()}>The user does not exist or has not uploaded any model</h1></div>;
  }

  if (!data) {
    return <div className='flex items-center justify-center'><Spinner /></div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto max-w-5xl">
      {data.map((model) => ( 
        <Link key={model.id} href={`/${model.id}`}>
        <Card
          key={model.id}
          isFooterBlurred
          radius="lg"
          className="border-none"
        >
          <Image
            isZoomed
            alt="Model Image"
            className="object-cover rounded-xl w-100 h-80" 
            src={model.image_url}
          />
          <CardFooter className="text-small justify-between">
            <b>{model.content}</b>
          </CardFooter>
        </Card>
        </Link>
      ))}
    </div>
  );
}

export default Userinfo;
