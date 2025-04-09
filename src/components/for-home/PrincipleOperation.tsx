import {} from "lucide-react";
import { Contact } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function PrincipleOperation() {
  return (
    <div className="gap-4 px-6 py-8 xl:grid xl:grid-cols-2 lg:px-14 xl:px-24">
      <div className="space-y-8" data-aos="fade-right">
        <div className="text-center font-bold text-3xl text-primary md:text-left xl:text-5xl">
          Принцип роботи сонячної станції
        </div>

        <p>
          Ви споживаєте електроенергію, у Вас є дах/парковка/земельна ділянка, перед Вами відкривається можлитвість
          інтегрувати сонячну станцію у власну енергосистему.
        </p>
        <p>
          За рахунок простого принципу роботи, доступної вартості обладнання та роботи наших спеціалістів, Ви отримаєте
          власну генеруючу установку, яка буде забезпечувати Ваше виробництво, складське приміщення, ТРЦ, медичний
          заклад, АЗС, СТО, магазин, ферму чи інший промисловий комплекс, безкоштовною електроенергією від сонця
          протягом десятиліть
        </p>

        <div className="grid items-center justify-center space-y-6 sm:flex sm:justify-normal sm:space-x-10 sm:space-y-0">
          <Button asChild>
            <Link href="for-business#contacts">
              <Contact size={22} color="white" />
              <div className="ml-2 text-xl">Наші контакти</div>
            </Link>
          </Button>
        </div>
      </div>

      <div className="relative mt-5 ml-5 flex justify-around">
        <div
          className="-bottom-4 absolute inset-x-0 h-[100px] w-[150px] sm:h-[200px] sm:w-[300px]"
          data-aos="fade-up-left"
        >
          <Image src="/benefits2.jpg" fill className="rounded-2xl object-cover" alt="benefits" />
        </div>
        <Image
          src="/benefits1.jpg"
          width={500}
          height={200}
          className="-z-10 rounded-2xl object-cover"
          alt="benefits"
          data-aos="fade-down-right"
        />
      </div>
    </div>
  );
}
