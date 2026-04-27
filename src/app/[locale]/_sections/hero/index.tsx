import BackgroundGlow from "@/app/[locale]/_components/backgroundGlow";

export default function HeroSection() {


  return (
    <section
      id="home"
      className={`
        relative overflow-hidden
        min-h-[calc(100svh-3.5rem)]
        flex justify-center
      `}
    >
      <BackgroundGlow />
    </section>
  );
}
