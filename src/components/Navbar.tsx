"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, Target } from "lucide-react";
import Dropdown from "./DropdownMenu";

const links = [
  { href: "#skills", title: "Skills" },
  { href: "#projects", title: "Projects" },
  { href: "#about-me", title: "About Me" },
  { href: "#contact", title: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="flex z-100 bg-[#000000] text-white justify-between items-center font-mono px-15 md:px-20 py-5 w-full h-20">
      <Link href={"/"} className="text-xl flex items-center gap-3 cursor-pointer font-bold">
        <Target /> Portfolio
      </Link>
      <ul className="max-w-96 hidden md:block">
        {links.map((link) => (
          <Link key={link.title} href={link.href}>
            <Button variant={"link"} className="cursor-pointer text-white">
              {link.title}
            </Button>
          </Link>
        ))}
      </ul>  
      <Link href={"mailto:mrprabeshlc@gmail.com"} className="py-2.5 hidden md:block px-5 rounded bg-secondary text-primary">Work with Me</Link>
    </nav>
  );
};

export default Navbar;
