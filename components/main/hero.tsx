import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex justify-center flex-col h-full w-full">
      {/* <video
        autoPlay
        muted
        loop
        className="rotate-0 absolute top-[-70px] left-[30%] w-[70vw] lg:w-full h-full -z-20"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video> */}

      <HeroContent />
    </div>
  );
};
