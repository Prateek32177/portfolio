import { HomeComponent } from "@/components/home/Home";
import { portfolioData } from "@/config";

export default function Home() {
  return <HomeComponent defaultTheme="emerald" data={portfolioData} />;
}
