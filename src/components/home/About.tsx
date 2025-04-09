import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="container flex flex-col gap-3 md:flex-row" data-aos="fade-up">
      <div className="relative h-96">
        <Image src="/about.jpg" width={1920} height={1280} className="h-96 rounded-3xl object-cover" alt="about" />
        <span className="absolute inset-x-2 bottom-2 text-balance rounded-3xl bg-primary/75 p-5 text-right text-primary-foreground text-xl backdrop-blur duration-300 lg:text-3xl md:text-2xl">
          Продуктивність, якість і надійність
        </span>
      </div>
      <div className="space-y-8 p-3">
        <div className="text-center lg:text-left">
          <h2 className="text-muted-foreground capitalize">Про компанію</h2>
          <span className="font-bold text-3xl text-primary xl:text-5xl">Quantum Solar</span>
        </div>
        <div className="space-y-4 text-balance text-muted-foreground">
          <p>Наша компанія створена в 2019 році, з провідних фахівців в галузі сонячної енергетики.</p>
          <p>Для нас важливі високий рівень кваліфікації кожного спеціаліста та втілення світових трендів в Україні.</p>
          <p>
            Ми розробляємо індивідуальне рішення для кожного проекту та реалізовуємо концепти різного рівня складності.
          </p>
        </div>
      </div>
    </div>
  );
}
