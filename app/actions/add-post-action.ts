'use server'
import { cookies } from 'next/headers'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


export const addPost = async (formData: FormData) => {

  const content = formData.get('content');
  const image_url = formData.get('image_url');
  const description = formData.get('description');
  const model_url = formData.get('model_url');
  const language = formData.get('language');
  const epochs = formData.get('epochs');
  const version = formData.get('version');
  const audio_url = formData.get('audio_url');

  if (content === null || image_url === null || image_url === null || description === null || model_url === null || audio_url === null || epochs === null || version === null || language === null ) return;


  const supabase = createServerActionClient({ cookies });


  const { data: { user } } = await supabase.auth.getUser();


  if (user === null) return;


  await supabase.from('models').insert({ content, image_url, description, model_url, audio_url, epochs, version, language, user_id: user.id }); 


  revalidatePath(`/?content=${content.toString()}&image_url=${image_url.toString()}&description=${description.toString()}&model_url=${model_url.toString()}&audio_url=${model_url.toString()}&epochs=${language.toString()}&version=${language.toString()}`); 

  redirect('/');
}
