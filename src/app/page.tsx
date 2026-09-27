import { CategoryGrid } from "@/components/cards/CategoryGrid";
import { Hero } from "@/components/layout/Hero/Hero";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <CategoryGrid />
    </main>
  );
}
