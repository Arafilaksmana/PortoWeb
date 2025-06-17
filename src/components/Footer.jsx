import { useState } from "react";
import { MdContentCopy } from "react-icons/md";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "arfilaks.dev@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2s
    });
  };

  return (
    <div className="lg:pt-15 pb-6 px-4 lg:px-8 bg-black text-white">
      <div className="w-fit mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl tracking-tight lg:w-[500px] leading-12 lg:leading-14">
          Let's Discuss Your Projects With Me
        </h2>
        <div className="flex justify-center mt-8">
          <button
            onClick={handleCopy}
            className="px-4 py-3 bg-white/95 rounded-sm flex items-center gap-2 group transition-all duration-200"
          >
            <div className="text-sm text-black">
              {copied ? "Copied!" : email}
            </div>
            <MdContentCopy className="text-black group-hover:scale-110 transition-transform duration-200" />
          </button>
        </div>
      </div>

      <div className="mt-12 mb-2 flex flex-col lg:flex-row gap-3 lg:gap-0 items-center justify-between font-[Mono] uppercase text-[12px]">
        <span>©2025 ARLAKS</span>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/arlaks" className="underline">Instagram,</a>
          <a href="#" className="underline">LinkedIn,</a>
          <a href="https://github.com/Arafilaksmana" className="underline">Github</a>
        </div>
      </div>
    </div>
  );
}
