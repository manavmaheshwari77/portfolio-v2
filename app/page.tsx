import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { TechStack } from "@/components/main/tech-stack";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <TechStack />
        <Encryption />
        {/* <Projects /> */}
      </div>
    </main>
  );
}
