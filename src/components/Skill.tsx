import SkillsCard from "./reusable/SkillCard";

export default function Skills() {
  const skills = [
    {
      head: "Programming Languages",
      items: ["JavaScript", "TypeScript", "Python", "SQL"],
    },
    {
      head: "Frameworks & Libraries",
      items: [
        "Next.js",
        "React",
        "React Native",
        "Node.js",
        "Express.js",
        "Tailwind CSS",
      ],
    },
    {
      head: "Databases",
      items: ["PostgreSQL", "MongoDB", "Redis"],
    },
    {
      head: "Tools & Technologies",
      items: [
        "Git / GitHub",
        "Docker",
        "Supabase",
        "REST APIs",
        "Linux",
        "Figma",
        "Jira",
      ],
    },
    {
      head: "Learning",
      items: ["WebSockets", "Hardhat", "Solidity"],
    },
  ];
  return (
    <div className="text-white px-6 pl-20 sm:px-20 font-mono mt-10">
      <div className="flex items-center gap-10 ">
        <h1 className="text-2xl font-bold">
          <span className="text-[#c778df]">#</span>Skills
        </h1>
        <hr className="border-[#c778df] w-1/2 hidden md:block" />
      </div>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-5 mt-5">
        {skills.map((skill) => (
          <div key={skill.head} className=" break-inside-avoid mb-5">
            <SkillsCard head={skill.head} items={skill.items} />
          </div>
        ))}
      </div>
    </div>
  );
}
