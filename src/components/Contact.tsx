import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div
      id="contact"
      className="text-white px-6 pl-20 sm:px-20 font-mono mt-10"
    >
      <div className="flex items-center gap-10 ">
        <h1 className="text-2xl font-bold">
          <span className="text-[#c778df]">#</span>Contact
        </h1>
        <hr className="border-[#c778df] w-1/2 hidden md:block" />
      </div>
      <div className="flex justify-between items-center md:items-start flex-col lg:flex-row">
        <p className="max-w-[800px] w-full p-4 mt-5">
          Have a project idea, collaboration opportunity, or just want to
          connect? Feel free to reach out anytime. I&apos;d be happy to discuss
          technology, development, and innovative ideas.
        </p>
        <div className="border rounded border-[#c778df] p-5 flex flex-col gap-5 max-w-[250px] w-full">
          <p className="">Message me here!</p>
          <div className="flex flex-col gap-3">
            <Link
              href={"https://wa.me/9779829077624?text=Hello!"}
              target="_blank"
              className="flex gap-3"
            >
              <FaWhatsapp size={24} /> WhatsApp
            </Link>
            <Link
              href={"mailto:mrprabeshlc@gmail.com"}
              target="_blank"
              className="flex gap-3"
            >
              <MdEmail size={24} /> Email
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
