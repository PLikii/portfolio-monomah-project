import { menu } from "@/lib/menu";
import { map } from "lodash";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
import Logo from "../Logo";
import { Button } from "../ui/button";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white py-3 shadow-md">
      <div className="container flex flex-row items-center justify-between">
        <Logo />
        <ul className="hidden flex-row items-center gap-3 md:flex">
          {map(menu, (item) => (
            <li key={item.id} className="duration-500 hover:scale-110 hover:border-b-2">
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-row items-center gap-2">
          <LanguageSwitcher className="hidden md:flex" />
          <div className="hidden flex-row items-center gap-1 md:flex">
            <Button size="icon" asChild>
              <Link href="tel:+380501234567">
                <PhoneCall size={16} color="white" />
              </Link>
            </Button>
            <span className="hidden text-xl xl:block">+38 (050) 123 45 67</span>
          </div>
          <MobileMenu />
          {/* TODO: Add language switcher */}
        </ul>
      </div>
    </header>
  );
}
