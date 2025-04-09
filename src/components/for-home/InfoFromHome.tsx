import Image from "next/image";

export default function InfoFromHome() {
  return (
    <div className="relative">
      <Image
        src="/hero1.jpg"
        width={1920}
        height={1280}
        className="-z-10 absolute inset-0 h-full w-full object-cover"
        alt="about"
      />

      <div className="place-content-center space-y-8 px-6 py-32 text-muted xl:flex xl:items-center xl:space-x-20 xl:space-y-0 lg:px-14 xl:px-24 xl:py-40">
        <div className="space-y-4 text-center">
          <div className="font-bold text-3xl xl:text-5xl">For home</div>
          <div className="font-semibold xl:text-xl">A necessity during war, a useful solution after war</div>
          <div className="font-medium text-white/70 xl:text-lg">
            A system that eliminates dependence on the quality, availability and cost of electricity from today for many
            years to come
          </div>
        </div>
      </div>
    </div>
  );
}
