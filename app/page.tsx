import Image from 'next/image';
import Home from "./components/home";


export default async function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Home />
    </main>
  )
}
