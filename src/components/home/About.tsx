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
          <h2 className="font-semibold text-muted-foreground capitalize">About the company</h2>
          <span className="font-bold text-3xl text-primary xl:text-5xl">Lorem Ipsum</span>
        </div>
        <div className="space-y-4 text-balance text-muted-foreground">
          <p>it is a "fish" text used in typography and dh" since the 16th century</p>
          <p>it is a "fish" text used in typography and design. Lorem Ipsum ndard "fish" since the 16th century.</p>
          <p>it is a "fish" text used in typography and design. Lorem Ipsum has, in fact,</p>
        </div>
      </div>
    </div>
  );
}
