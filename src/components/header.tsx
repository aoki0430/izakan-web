import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BeerIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-20 w-full items-center px-4 md:px-6">
      <Link className="mr-4 hidden lg:flex" href="#">
        <BeerIcon />
        <span className="sr-only">ShadCN Inc</span>
      </Link>
      <div className="">Izakan</div>

      <div className="ml-auto flex gap-2">
        <Button variant="outline">Sign in</Button>
        <Button>Sign Up</Button>
      </div>
    </header>
  );
}
