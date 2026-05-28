import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const SocialLink = () => {
  return (
    <div className="fixed left-[-80] z-10 flex flex-col rotate-90 items-center">
      <hr className="w-64 border-white" />

      <span className="mt-2 absolute top-[-60] right-[-80] text-white">
        <div className="rotate-270 flex flex-col gap-5">
          <Link href={'/'}><FaYoutube size={24} /></Link>
          <Link href={'/'}><FaGithub size={24} /> </Link>
          <Link href={'/'}><FaLinkedin size={24} /></Link>
        </div>
      </span>
    </div>
  );
};

export default SocialLink;