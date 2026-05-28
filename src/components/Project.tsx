import { MoveRight } from "lucide-react";
import Link from "next/link";
import Card from "./reusable/Card";

const projects = [
  {
    name: "E-Commerce",
    slug: "e-commerce",
    description: "User can buy and sell items",
    tools: ["NextJS", "PostgreSQL", "Astro", "NodeJS"],
    image: "ecommerce.png",
  },
  {
    name: "Real Time Chat app",
    slug: "chat-app",
    description: "user can chat with registered user",
    tools: ["NextJS", "WebSocket", "NodeJS", "PostgreSQL"],
    image: "chatapp2.png",
  },
  {
    name: "Rich text editor",
    slug: "text-editor",
    description: "User can read, write and update files",
    tools: ["NextJS", "NodeJS", "TipTap"],
    image: "texteditor.png",
  },
];

export default function Projects() {
  return (
    <div className="text-white px-6 pl-20 sm:px-20 font-mono mt-10">
      <div className="flex items-center justify-between gap-10 ">
        <Link href={"/projects"} className="text-2xl font-bold">
          <span className="text-[#c778df]">#</span>Projects
        </Link>
        <hr className="border-[#c778df] w-1/2 hidden md:block" />
        <Link href={"/projects"} className="flex gap-3 ">
          View All <MoveRight />{" "}
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {projects.map((item) => (
          <div key={item.slug} className="">
            <Card
              name={item.name}
              description={item.description}
              slug={item.slug}
              tools={item.tools}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
