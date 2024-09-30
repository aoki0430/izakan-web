import Link from "next/link";
import { BeerIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-16 w-full items-center px-4 md:px-6 border-b-primary border-2">
      <Link className="mr-4 hidden lg:flex" href="#">
        <BeerIcon />
      </Link>
      <div className="">Izakan</div>
    </header>
  );
}
