import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';
import { title } from "@/components/primitives";
import ModelCard from "@/components/model-card";
import { Database } from "./types/database";
import { ComposeModel } from "@/components/compose-model";
import { Post } from "./types/posts";
import { UploadModel } from "@/components/upload-model";
import { Link } from "@nextui-org/link";


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
			version,
			epochs,
			language,
			image_url: imageUrl,
			created_at: created_at,
		  } = post;
		  const {
			full_name: userFullName,
		  } = user;

		  const modelSlug = id;

		  return (
			<Link href={`/${id}`} key={id}>
				<ModelCard
				content={content}
				userFullName={userFullName}
				imageUrl={imageUrl}
				full_name={userFullName}
				id={id}
				version={version}
				epochs={epochs}
				language={language}
				created_at={created_at}
				/>
			</Link>
		  );
		})}
	  </section>
	);
  }