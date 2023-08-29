"use client";

import {
  type Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";

export function AuthButton({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "discord",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <header className="mr-4">
      {session === null ? (
        <Button color="primary" variant="shadow" onClick={handleSignIn}>
          Login
        </Button>
      ) : (
        <Button color="danger" variant="bordered" onClick={handleSignOut}>
          Logout
        </Button>
      )}
    </header>
  );
}
