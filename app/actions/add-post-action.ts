'use server'

import { cookies } from 'next/headers'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const addPost = async (formData: FormData) => {
  const content = formData.get('content');
  const image_url = formData.get('image_url');

  if (content === null || image_url === null) return;

  const supabase = createServerActionClient({ cookies });
  const { data: { user } } = await supabase.auth.getUser();
  if (user === null) return;

  await supabase.from('models').insert({ content, image_url, user_id: user.id });

  revalidatePath(`/?content=${content.toString()}&image_url=${image_url.toString()}`);
  redirect('/'); 
}
