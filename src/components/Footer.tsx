import { Target } from "lucide-react";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export default function Footer() {
    const today = new Date();
  return (
    <div className="mt-10 text-white">
      <hr className="text-[#c778df]" />
      <div className="text-white font-mono flex flex-col gap-5 items-center justify-center w-full py-20">
        <div>
          <Link
            href={"/"}
            className="text-xl flex items-center gap-3 cursor-pointer font-bold"
          >
            <Target /> Portfolio
          </Link>
        </div>
        <div className="flex gap-5">
          <Link href={"https://x.com/Prabesh_2004"} className="text-2xl">
            {" "}
            <FaXTwitter />
          </Link>
          <Link href={"https://linkedin.com/in/prabesh-lamichhane-55819a375"} target="_blank" className="text-2xl">
            {" "}
            <BsLinkedin />
          </Link>
          <Link href={"https://github.com/Prabesh2-004"} target="_blank" className="text-2xl">
            {" "}
            <BsGithub />
          </Link>
          <Link href={"mailto:mrprabeshlc@gmail.com"} className="text-2xl">
            {" "}
            <SiGmail />
          </Link>
        </div>
        <p>Copyright © {today.getFullYear()} Prabesh Lamichhane. All rights reserved.</p>
      </div>
    </div>
  );
}
