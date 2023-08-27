import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';
import { title } from "@/components/primitives";
import ModelCard from "@/components/model-card";
import { Database } from "./types/database";
import { ComposeModel } from "@/components/compose-model";
import { Post } from "./types/posts";
import { UploadModel } from "@/components/upload-model";

export default async function HomePage() {
	const supabase = createServerComponentClient<Database>({ cookies });
	const { data: { session } } = await supabase.auth.getSession();
	const { data: posts } = await supabase
	  .from('models')
	  .select('*, user:users(*)');
  
	return (
	  <section className="grid grid-cols-1 md:grid-cols-4 gap-4 py-8 md:py-10">
		{posts?.map((post: any) => { 
		  const {
			id,
			user,
			content,
			image_url: imageUrl,
		  } = post;
		  const {
			full_name: userFullName,
		  } = user;
		  return (
			<ModelCard
			  content={content}
			  key={id}
			  userFullName={userFullName}
			  imageUrl={imageUrl} 
			  full_name={userFullName}
			/>		
		  );
		})}
	  </section>
	);
  }