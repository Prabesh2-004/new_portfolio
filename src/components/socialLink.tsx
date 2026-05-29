import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const SocialLink = () => {
  return (
    <div className="fixed left-[-80] z-10 flex flex-col rotate-90 items-center">
      <hr className="w-64 border-white" />

      <span className="mt-2 absolute top-[-60] right-[-80] text-white">
        <div className="rotate-270 flex flex-col gap-5">
          <Link href={'https://www.youtube.com/@60s_MV'}><FaYoutube size={24} /></Link>
          <Link href={'https://github.com/Prabesh2-004'}><FaGithub size={24} /> </Link>
          <Link href={'https://linkedin.com/in/prabesh-lamichhane-55819a375'}><FaLinkedin size={24} /></Link>
        </div>
      </span>
    </div>
  );
};

export default SocialLink;