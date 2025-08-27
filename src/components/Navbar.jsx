import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menu = [
    { id: 1, name: "Tentang", link: "hero" },
    { id: 2, name: "Pengalaman", link: "organisasi" },
    { id: 3, name: "Proyek", link: "proyek" },
    { id: 4, name: "Kemampuan", link: "tools" },
  ];

  return (
    <>
      {/* Navbar */}
      <div
        className={`navbar fixed top-0 left-0 w-full z-50 
        bg-transparent backdrop-blur-md border-b border-white/20 
        shadow-[0_0_10px_rgba(255,255,255,0.2)] 
        transition-all duration-300
        ${active ? "py-5" : "py-7"}`} // 🔥 versi kecil tetap agak besar
      >
        <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between px-8 md:px-16">
          {/* Logo */}
          <div className="logo hidden md:block">
            <h1
              className={`font-semibold text-white transition-all duration-300
              ${active ? "text-2xl" : "text-3xl"}`} // 🔥 versi kecil tetap lumayan besar
            >
              Fatimah Azzahra
            </h1>
          </div>

          {/* Menu */}
          <ul
            className={`menu flex items-center sm:gap-10 gap-6 md:static fixed left-1/2 -translate-x-1/2 
            md:-translate-x-0 md:opacity-100 md:bg-transparent 
            transition-all md:transition-none
            ${active ? "top-0 opacity-100" : "top-0 opacity-100"}`}
          >
            {menu.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className={`relative font-medium text-white cursor-pointer 
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 
                  after:w-full after:h-[2px] after:bg-white 
                  after:scale-x-0 after:origin-left after:transition-transform after:duration-300 
                  hover:after:scale-x-100 
                  ${active ? "sm:text-lg text-base" : "sm:text-xl text-lg"}`} // 🔥 menu juga agak besar
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Spacer mengikuti tinggi navbar */}
      <div className={`${active ? "h-20" : "h-24"}`}></div> {/* 🔥 lebih tinggi */}
    </>
  );
};

export default Navbar;
