import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  className?: string;
}

export default function Logo({ className }: IProps) {
  return (
    <Link href="/" className={cn("w-28", className)}>
      <Image src="/placeholder.png" width={256} height={77} alt="Logo" className="h-10" />
    </Link>
  );
}
