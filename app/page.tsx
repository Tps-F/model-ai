import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import ModelCard from "@/components/model-card";
import { Database } from "./types/database";
import { Link } from "@nextui-org/link";

export default async function HomePage() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const { data: posts } = await supabase
    .from("models")
    .select("*, user:users(*)");

  return (
    
<section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-5 py-8 md:py-10">
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
          tag,
        } = post;
        const { full_name: userFullName, avatar_url: avatarUrl } = user;

        const modelSlug = id;

        return (
          <Link href={`/${id}`} key={id}>
            <div  className="flex items-center mx-auto"> 
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
                tag={tag}
                avatar_url={avatarUrl}
              />
            </div>
          </Link>
        );
      })}
    </section>
  );
}
