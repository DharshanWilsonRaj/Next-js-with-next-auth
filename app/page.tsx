import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <>
      {session && <div className="flex gap-3 my-24 items-center justify-center"> <h6 className="text-center p-3 border text-rose-50"> Welcome to logged User</h6> <Link href={'/api/auth/signout'} className="bg-red-400 p-3 border rounded">Logout</Link></div>}
      <Link href={'/api/auth/signin'}>Login</Link>
    </>
  );
}
