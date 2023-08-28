"use client"
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button, Spinner, Divider } from "@nextui-org/react";
import { Database } from '@/app/types/database';
import { createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { createClient, PostgrestError } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { useEffect, useState } from 'react';
import { title } from "@/components/primitives";

const supabase = createClientComponentClient<Database>()

interface ModelInfoProps {
  userFullName: string;
}


function Follow({ userFullName }: ModelInfoProps) {
    const [data, setData] = useState<any[] | null>(null);
    const [user, setUser] = useState<any | null>(null);
    const [error, setError] = useState<PostgrestError | null>(null);

    useEffect(() => {
        async function fetchData() {
          // Fetch user data based on full name
          const { data: userData, error: userError } = await supabase
            .from('users')
            .select('*')
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
            return   <div className="flex items-center justify-center"></div>;
        }

        if (!data) {
            return <div className='flex items-center justify-center m-8'></div>;
        }
    
      return (
        <div>
       <h1 className="text-center mt-4 text-4xl">{userFullName}</h1>
        <div className="flex justify-center items-center mx-auto my-8">
            <Card>
            <CardBody>
                <p>{user.biography}</p>
            </CardBody>
            </Card>
        </div>
        </div>
  );
}
export default Follow;
