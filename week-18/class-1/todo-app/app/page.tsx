import Link from "next/link";

export default function Home() {
  return (
    <div className="text-lg w-screen h-screen flex items-center justify-center flex-col">
   <div>Todo App</div>
   <br />
   <div>
   <Link href="/signin" className="border-lime-100 border p-2 m-2 rounded-md">Sign In to Todo App</Link>
   </div>
   <br />
   <div>
   <Link href="/signup" className="border-lime-100 border p-2  m-2 rounded-md">Sign Up to Todo App</Link>
   </div>
   </div>
  );
}
