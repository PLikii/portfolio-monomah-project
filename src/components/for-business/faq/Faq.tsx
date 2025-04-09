"use client";
import { faq } from "@/lib/business/faq";
import { map } from "lodash";
import Image from "next/image";
import { useState } from "react";
import FaqItem from "./FaqItem";

export default function Faq() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <div>
      <div className="space-y-8 bg-gray/10 px-6 py-8 lg:grid lg:grid-cols-2 lg:justify-around lg:gap-10 lg:space-y-0 lg:px-14 xl:px-24">
        <div className="relative my-8 h-72 lg:h-auto" data-aos="zoom-in-up">
          <Image src="/fqaBusiness.jpg" fill className="rounded-3xl object-cover xl:mr-96" alt="fqaBusiness" />

          <span className="absolute inset-x-2 bottom-2 text-balance rounded-3xl bg-primary/75 p-5 text-right text-primary-foreground text-xl backdrop-blur duration-300 lg:text-3xl md:text-2xl">
            Frequently asked questions
          </span>
        </div>

        <div className="space-y-6 p-6" data-aos="zoom-in-left">
          <div className="text-center lg:text-left">
            <div className="font-semibold text-muted-foreground capitalize">
              WHAT IS THE MOST FREQUENTLY ASKED QUESTIONS?
            </div>

            <div className="font-bold text-3xl text-primary xl:text-5xl">FAQ</div>
          </div>

          <div className="min-h-80">
            {map(faq, (service, index) => (
              <FaqItem
                key={index}
                title={service.title}
                description={service.description}
                index={service.id}
                setActive={setActiveFaq}
                active={activeFaq}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
