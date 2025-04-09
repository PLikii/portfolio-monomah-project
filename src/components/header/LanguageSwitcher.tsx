"use client";
import { UA, UK } from "@/icons/circle-flags";
import { cn } from "@/lib/utils";
import { setCookie } from "cookies-next";
import { map } from "lodash";
import { useLocale } from "next-intl";
import { twMerge } from "tailwind-merge";

const defaultProps = {
  fontSize: 28,
};

const locales = [
  {
    id: "uk",
    name: "Українська",
    icon: <UA {...defaultProps} />,
  },
  {
    id: "en",
    name: "English",
    icon: <UK {...defaultProps} />,
  },
];

export default function LanguageSwitcher({
  className,
}: { className?: string }) {
  const locale = useLocale();

  async function changeLocale(locale: string) {
    setCookie("NEXT_LOCALE", locale);
    window.location.reload();
  }

  return (
    <div className={twMerge("flex flex-row gap-2", className)}>
      {map(locales, item => (
        <button
          type="button"
          key={item.id}
          onClick={() => changeLocale(item.id)}
          className={cn(
            "overflow-hidden rounded-full",
            locale === item.id && "hidden",
          )}
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
}
