import {} from "lucide-react";
import { Contact } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Service() {
  return (
    <div className="flex flex-col-reverse gap-10 px-6 py-8 xl:flex-row lg:px-14 xl:px-24">
      <div className="space-y-8" data-aos="fade-right">
        <div className="text-center font-bold text-3xl text-primary md:text-left xl:text-5xl">Сервіс/Клінінг</div>

        <p>Важливість догляду за сонячною станцією неможливо переоцінити.</p>
        <p>Ми аналізуємо онлайн коректність роботи станції 24/7 та швидко реагуємо на позаштатні ситуації системи.</p>
        <p>Ваша станція буде надійно слугувати та приносити користь, а ми це проконтролюємо.</p>

        <div className="space-y-6 sm:flex sm:justify-normal sm:space-x-10 sm:space-y-0">
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
