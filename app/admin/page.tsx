import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { Database } from '../types/database'
import UsersTable from '@/components/admin/admin-table'

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  } else {
    const { data: user } = await supabase
      .from('users')
      .select('full_name, role')
      .eq('id', session.user.id)
      .single()

    if (!user || user.role !== 'admin') {
      redirect('/404')
    } else {
      const { data: posts } = await supabase
        .from('posts')
        .select('*, user:users(name, avatar_url, user_name)')
        .order('created_at', { ascending: false })

      return (
        <main className="flex min-h-screen flex-col items-center justify-between">
          <h1>Test</h1>
        </main>
      )
    }
  }
}
