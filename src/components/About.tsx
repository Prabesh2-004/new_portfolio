export default function About() {
  return (
    <div
      id="about-me"
      className="text-white px-6 pl-20 sm:px-20 font-mono mt-10"
    >
      <div className="flex items-center gap-10 ">
        <h1 className="text-2xl font-bold">
          <span className="text-[#c778df]">#</span>About Me
        </h1>
        <hr className="border-[#c778df] w-1/2 hidden md:block" />
      </div>
      <div className="flex">
        <div className="flex-1">
          <p className="px-5 py-10">Hello, I&apos;m Prabesh Lamichhane!</p>
          <div className="max-w-[800px] w-full mx-5 flex flex-col gap-5 px-2">
            <p>
              Passionate and self-driven software engineer with hands-on experience building responsive, secure, and scalable applications using modern technologies such as Java, Next.js, TypeScript, React, and Node.js. I enjoy transforming complex ideas into reliable digital solutions with clean UI/UX design, robust backend architecture, and strong computational foundations.
            </p>
            <p>
              Over the years, I have worked on diverse projects including eCommerce platforms, AI-powered tools, authentication systems with role-based access control (RBAC), and high-performance web applications focused on optimal user experience. I am deeply interested in software engineering principles, system design, and algorithmic problem-solving.
            </p>
            <p>
              Currently, I am expanding my technical expertise by deepening my knowledge in Java and Data Structures & Algorithms (DSA) while exploring practical AI/ML integration in modern systems. Driven by continuous learning and software craftsmanship, my goal is to build scalable, high-impact software solutions that combine technical precision, performance, and innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
