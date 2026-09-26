import { CategoryGrid } from "@/components/cards/CategoryGrid";
import { Header } from "@/components/layout/Header/Header";
import { Hero } from "@/components/layout/Hero/Hero";
import { HeroCollapseProvider } from "@/components/layout/HeroCollapseContext";

export default function Home() {
  return (
    <HeroCollapseProvider>
      <Header />
      <main className="bg-background text-foreground">
        <Hero />
        <CategoryGrid />
      </main>
    </HeroCollapseProvider>
  );
}
