import { APP_CONFIG } from "@/lib/constants";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container p-2 mx-auto">
      <h1 className="text-4xl text-center">{APP_CONFIG.name}</h1>
      <h3>{APP_CONFIG.description}</h3>
      <footer className="text-center text-gray-500 text-sm fixed bottom-2 w-full">
        <Link href="/dashboard">Dashboard</Link>
      </footer>
    </div>
  )
}