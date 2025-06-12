import { MdContentCopy } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="py-6 px-4 lg:px-8 bg-black text-[#e0e0e0]">
      <div className="flex gap-2 items-center">
        <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
        <h3 className="font-[IBM] uppercase tracking-tight">Contact Me</h3>
      </div>

      <div className="mt-6 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl lg:text-5xl tracking-tight lg:w-[500px] leading-12 lg:leading-14">
            Let's Discuss Your Projects With Me
          </h2>

          <button className="mt-6 border border-dashed border-white/50 w-fit px-5 py-3 rounded-full flex items-center gap-2">
            <div>arfilaks.dev@gmail.com</div>
            <MdContentCopy />
          </button>
        </div>
        <div className="w-full lg:w-1/2 justify-center lg:justify-end">
          <div className="flex gap-6 mt-8 text-2xl items-center lg:self-end">
            <FaInstagram />
            <CiLinkedin />
            <FaGithub />
          </div>
        </div>
      </div>
    </div>
  );
}
