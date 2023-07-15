import React from "react";

function Socials({ socialData }) {
  return (
    <div className="flex gap-x-[10px]">
      {socialData.map(({ href, icon }, index) => (
        <a
          href={href}
          key={index}
          className="border border-white/20 rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm hover:text-accent hover:border-accent transition-all"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}

export default Socials;
