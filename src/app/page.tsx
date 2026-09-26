import { CategoryGrid } from "@/components/cards/CategoryGrid";
import { Header } from "@/components/layout/Header/Header";
import { Hero } from "@/components/layout/Hero/Hero";
import { HeaderScrollProvider } from "@/components/layout/HeaderScrollContext";

export default function Home() {
  return (
    <HeaderScrollProvider>
      <Header />
      <main className="bg-background text-foreground">
        <Hero />
        <CategoryGrid />
      </main>
    </HeaderScrollProvider>
  );
}
