import { menu } from "@/lib/menu";
import dayjs from "dayjs";
import { map } from "lodash";
import Link from "next/link";
import Logo from "./Logo";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="mt-4">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <Logo />
          <ul className="mb-6 flex flex-wrap items-center font-medium text-muted-foreground text-sm sm:mb-0">
            {map(menu, (item) => (
              <li key={item.id}>
                <Link href={item.href} className="me-4 md:me-6 hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator className="mt-3" />
        <span className="block text-gray-500 text-sm sm:text-center dark:text-gray-400">
          {`© ${dayjs().format("YYYY")} `}
          <Link href="/" className="hover:underline">
            Placeholder
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
