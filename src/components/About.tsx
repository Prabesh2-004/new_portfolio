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
              Passionate and self-driven full-stack developer with hands-on
              experience building responsive, secure, and scalable web
              applications using modern technologies such as Next.js,
              TypeScript, React, and Node.js. I enjoy transforming ideas into
              real-world digital solutions with clean UI/UX design and efficient
              backend architecture.
            </p>
            <p>
              Over the years, I have worked on multiple projects including
              eCommerce platforms, AI-powered applications, authentication
              systems with role-based access control (RBAC), and modern web
              applications focused on performance and user experience. I am
              highly interested in software engineering, problem solving, and
              continuously improving my development skills by exploring new
              tools and technologies.
            </p>
            <p>
              Currently, I am expanding my knowledge in Ethereum blockchain and
              Web3 development while also exploring AI/ML integration in modern
              applications. I enjoy learning new technologies, building
              innovative products, and challenging myself with projects that
              create meaningful impact. My goal is to grow as a developer by
              building scalable, user-focused applications and contributing to
              modern digital solutions that combine creativity, technology, and
              innovation.
            </p>
          </div>
        </div>
        <video
          src="vide-bg2.0.mp4"
          width={500}
          height={300}
          className="rounded-xl hidden lg:block"
          autoPlay
          loop
        ></video>
        {/* <img src="frieren2.0.jpg" alt="loop" /> */}
      </div>
    </div>
  );
}
