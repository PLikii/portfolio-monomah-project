import {} from "lucide-react";
import { Contact } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Benefits() {
  return (
    <div>
      <div className="gap-4 px-6 py-8 xl:grid xl:grid-cols-2 lg:px-14 xl:px-24">
        <div className="space-y-8" data-aos="fade-right">
          <h2 className="text-center font-bold text-3xl text-primary md:text-left xl:text-5xl">
            Benefits of solar power networks
          </h2>

          <p>
            You consume electricity, you have a roof/parking lot/land plot, you have the opportunity to integrate a
            solar station into your own energy system.
          </p>
          <p>
            Due to the simple principle of operation, affordable cost of equipment and work of our specialists, you will
            get your own generating plant, which will provide your production, warehouse, shopping mall, medical
            facility, gas station, service station, shop, farm or other industrial complex with free electricity from
            the sun for decades
          </p>

          <div className="grid items-center justify-center space-y-6 sm:flex sm:justify-normal sm:space-x-10 sm:space-y-0">
            <Button asChild>
              <Link href="for-business#contacts">
                <Contact size={22} color="white" />
                <div className="ml-2 text-xl">Our contacts</div>
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative mt-5 ml-5 flex justify-around">
          <div
            className="-bottom-4 absolute inset-x-0 h-[100px] w-[150px] sm:h-[200px] sm:w-[300px]"
            data-aos="fade-up-left"
          >
            <Image src="/benefits1.jpg" fill className="rounded-2xl object-cover" alt="benefits" />
          </div>
          <Image
            src="/benefits2.jpg"
            width={500}
            height={200}
            className="-z-10 rounded-2xl object-cover"
            alt="benefits"
            data-aos="fade-down-right"
          />
        </div>
      </div>
    </div>
  );
}
