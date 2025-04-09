import Image from "next/image";

export default function InfoFromBusiness() {
  return (
    <div>
      <div className="relative">
        <Image
          src="/hero1.jpg"
          width={1920}
          height={1280}
          className="-z-10 absolute inset-0 h-full w-full object-cover"
          alt="about"
        />

        <div className="place-content-center space-y-8 px-6 py-32 text-muted xl:flex xl:items-center xl:space-x-20 xl:space-y-0 lg:px-14 xl:px-24 xl:py-40">
          <div className="space-y-4">
            <div className="font-bold text-3xl xl:text-5xl">For business</div>
            <div className="text-muted">Get a tool to manage your personal energy and economic security</div>
          </div>

          <div className="basis-4/5 space-y-4">
            <div className="font-bold text-3xl xl:text-5xl">Рішення доступне та вигідне</div>
            <div className="text-muted">
              In 2000, the cost of solar panels was around $3-4 per watt, while in 2024 this cost could be around $0.3
              per watt or even lower, depending on the technology and manufacturing quality. This significant decline in
              cost has stimulated the widespread adoption of solar technologies and significantly increased their
              accessibility.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
