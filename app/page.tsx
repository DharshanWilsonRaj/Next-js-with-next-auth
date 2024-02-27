import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export default async function Home() {
  // get session 
  const session = await getServerSession(authOptions)
  return (
    <>
      {
        session && <h6>Home page</h6>
      }
      <Link href={'/api/auth/signin'}>Login</Link>
    </>
  );
}
