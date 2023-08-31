import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Database } from '../types/database';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import BugsTable from '@/components/admin/bugs-table';

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: { session } } = await supabase.auth.getSession();
  
  let content = []; 

  if (session === null) {
    redirect('/login');
  } else {
    const { data: user } = await supabase
      .from('users')
      .select('full_name, role')
      .eq('id', session.user.id)
      .single();

    if (!user || user.role !== 'admin') {
      redirect('/404');
    } else {
      const { data: fetchedBugs } = await supabase
        .from('bugs')
        .select('*')
        .order('created_at', { ascending: false });

      content = fetchedBugs || []; 
    }
  }

  return (
    <main >
      <h1>Test</h1>
    </main>
  );
}
