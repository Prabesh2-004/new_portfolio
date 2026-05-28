import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface Card {
  name: string;
  description: string;
  image: string;
  tools: string[];
  slug: string;
}

export default function Card({ image, slug, name, tools, description }: Card) {
  return (
    <div className="flex flex-col border border-[#c778df] rounded overflow-hidden pb-4 h-full">
      <div className="w-full h-60 aspect-video overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex gap-5 px-3 py-2 border border-[#c778df]">
        {tools.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <h1 className="text-xl px-3 py-2">{name}</h1>
      <p className="px-3 py-2 flex-1">{description}</p>
      <Link href={slug} className="mx-3">
        <Button
          variant={"outline"}
          className="border-[#c778df] px-6 py-5 hover:bg-[#c778df]"
        >
          Live <ArrowRight />
        </Button>
      </Link>
    </div>
  );
}
