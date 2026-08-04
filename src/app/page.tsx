import { FeaturedGame } from "@/components/home/FeaturedGame";
import { GamesPreview } from "@/components/home/GamesPreview";
import { Hero } from "@/components/home/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedGame />
      <GamesPreview />
    </main>
  );
}