import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex justify-center flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-90 absolute top-[-200px] left-[30%] w-[50vw] h-full object-cover -z-20"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};
