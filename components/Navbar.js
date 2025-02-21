import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  console.log({ session });
  return (
    <nav style={{ display: "flex", direction: "row" }}>
      <ul>
        <Link href="/news">
          <li>News</li>
        </Link>
        <Link href="/posts">
          <li>Posts</li>
        </Link>
        <Link href="/document">
          <li>Document</li>
        </Link>
        <Link href="/dashboard">
          <li>Dashboard</li>
        </Link>
        {session ? (
          <>
            <h3>Signed in as {session.user.email}</h3>
            <button onClick={() => signOut()}>SignOut</button>
          </>
        ) : (
          <button onClick={() => signIn()}>SignIn</button>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
