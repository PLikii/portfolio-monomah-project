import Image from "next/image";

export default function InfoAboutUs() {
  return (
    <div>
      <div className="relative overflow-y-hidden">
        <Image
          src="/hero1.jpg"
          width={1920}
          height={1280}
          className="-z-10 absolute inset-0 h-full w-full object-cover"
          alt="about"
        />

        <div className="place-content-center space-y-8 px-6 py-32 text-muted xl:flex xl:items-center xl:space-x-20 xl:space-y-0 lg:px-14 xl:px-24 xl:py-40">
          <div className="space-y-4 text-center">
            <div className="font-bold text-2xl lg:text-3xl">
              Solar innovations for a strong country: effective solutions in challenging conditions{" "}
            </div>

            <div className="space-y-8 rounded-3xl bg-black/60 py-8 lg:flex lg:pt-0 lg:pb-0">
              <div className="grid h-full place-content-center lg:p-4">
                <Image
                  src="/AboutUs1.jpg"
                  width={256}
                  height={256}
                  className="rounded-3xl object-cover lg:min-h-64 lg:min-w-64"
                  alt="about"
                />
              </div>

              <div className="space-y-6 lg:p-6 lg:pb-0">
                <div className="font-semibold text-xl lg:text-left">
                  "Discover the limitless potential of solar technology with us! We believe that every ray of sunlight
                  can become a power source for your project. Contact us - we are ready to make your energy dreams a
                  reality!!"
                </div>
                <div className="flex items-center justify-center space-x-10 lg:justify-end">
                  <div>Placeholder P.L.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
