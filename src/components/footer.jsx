import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const icons = [
    {
      id: 1,
      icon: <FaInstagram />,
      link: "https://www.instagram.com/fraazzahra?igsh=ZXF1bzVhbHZub3ho",
    },
    { id: 2, icon: <FaGithub />, link: "https://github.com/rafatim" },
    { id: 3, icon: <FaEnvelope />, link: "mailto:frazahra08@gmail.com" },
  ];

  return (
    <footer className="w-full bg-zinc-900/80 backdrop-blur-sm border-t border-[#7A85C1]/40 shadow-[0_-1px_10px_rgba(122,133,193,0.2)]">
      {/* Konten utama */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-10 py-6 gap-6">
        
        {/* Kiri: Judul + Ikon Sosial */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <h1 className="text-lg font-semibold text-zinc-100">Fatimah Azzahra</h1>
          <div className="flex gap-3">
            {icons.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-500 text-zinc-200 hover:text-white hover:border-[#7A85C1] transition duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Kanan: Kontak */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-zinc-200 text-sm">
          <a
            href="https://wa.me/6287874080963"
            className="flex items-center gap-2 hover:text-[#7A85C1] transition"
          >
            <FaPhone /> +62 8787 4080 963
          </a>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt /> Bekasi, Jawa Barat
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full border-t border-zinc-700/40 py-3 text-center">
        <p className="text-xs text-zinc-400">
          © {new Date().getFullYear()} Fatimah Azzahra. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
