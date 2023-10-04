'use client'
import Image from 'next/image';
import { BrainIcon } from "./icons/brain"
import { IconButton } from "./components/button";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div>Welcome to Nextjs</div>
        <div>
          <BrainIcon />
        </div>
      </div>
    </main>
  )
}
