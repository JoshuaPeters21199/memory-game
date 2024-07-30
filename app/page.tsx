import Hero from "@/components/Hero";
// import { motion } from "framer-motion";
import EasyGrid from "@/components/EasyGrid";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Hero />
      <EasyGrid />
    </main>
  );
}
