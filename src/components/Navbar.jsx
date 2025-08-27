import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const menu = [
    { id: 1, name: "Tentang", link: "hero" },
    { id: 2, name: "Pengalaman", link: "organisasi" },
    { id: 3, name: "Proyek", link: "proyek" },
    { id: 4, name: "Kemampuan", link: "tools" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 w-full z-50 
        bg-transparent backdrop-blur-md border-b border-white/20 
        shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-all duration-300"
      >
        <div
          className="max-w-screen-xl mx-auto flex items-center 
          justify-center md:justify-between px-6 md:px-12 py-4"
        >
          {/* Logo (hanya tampil di layar md ke atas) */}
          <h1 className="hidden md:block text-xl md:text-2xl font-semibold text-white tracking-wide hover:text-indigo-400 transition-colors duration-300 cursor-pointer">
            Fatimah Azzahra
          </h1>

          {/* Menu */}
          <ul className="flex items-center gap-4 sm:gap-6 md:gap-10">
            {menu.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="relative text-sm sm:text-base md:text-lg font-medium text-white cursor-pointer 
                    transition-colors duration-300 
                    after:content-[''] after:absolute after:left-0 after:-bottom-1 
                    after:w-full after:h-[2px] after:bg-white
                    after:scale-x-0 after:origin-left after:transition-transform after:duration-300 
                    hover:after:scale-x-100"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
