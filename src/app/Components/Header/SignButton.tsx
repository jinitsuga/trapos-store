"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function AuthBtn() {
  const { data: session } = useSession();

  if (session) {
    return (
      <nav className="flex gap-2">
        {session?.user?.name} <br />
        <button onClick={() => signOut()}>Salir</button>
        <Link href={"/admin"}>Admin</Link>
      </nav>
    );
  }

  return (
    <>
      <button onClick={() => signIn()}>Ingresar</button>
    </>
  );
}
