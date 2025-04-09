"use client";

import { menu } from "@/lib/menu";
import { map } from "lodash";
import { Menu, PhoneCall } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden" asChild>
        <Button size="icon">
          <Menu size={16} color="white" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex h-dvh flex-col gap-2 pb-16">
          <SheetTitle>Меню</SheetTitle>
          <ul className="flex flex-1 flex-col items-center gap-3">
            {map(menu, (item) => (
              <li key={item.id} className="duration-500 hover:scale-110 hover:border-b-2">
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            <li>
              <Button asChild>
                <Link href="tel:+380501234567">
                  <PhoneCall size={16} color="white" />
                  <span className="ml-2">+38 (050) 123 45 67</span>
                </Link>
              </Button>
            </li>
          </ul>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
