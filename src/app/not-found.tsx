import { Rabbit } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-20 mb-20 grid w-full place-items-center px-6 lg:mt-60 md:mt-40">
      <Rabbit className="size-40 animate-bounce text-primary" data-aos="zoom-out" />
      <div className="mb-10 text-center font-bold text-3xl text-primary xl:text-5xl" data-aos="flip-up">
        Схоже сторінку не знайдено
      </div>

      <Link
        href="/"
        data-aos="flip-up"
        className="group relative me-2 mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 font-medium text-gray-900 text-sm group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white hover:text-white focus:outline-none dark:focus:ring-blue-800 focus:ring-4 focus:ring-blue-300"
      >
        <span className="relative rounded-md bg-white px-5 py-2.5 text-xl transition-all duration-75 ease-in dark:bg-gray-900 group-hover:bg-opacity-0">
          Повернутися на головну
        </span>
      </Link>
    </div>
  );
}
