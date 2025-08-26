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
        className="navbar py-4 fixed top-0 left-0 w-full z-50 
        bg-transparent backdrop-blur-md border-b border-white/20 
        shadow-[0_0_10px_rgba(255,255,255,0.2)]"
      >
        <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between px-6 md:px-12">
          {/* Logo */}
          <div className="logo hidden md:block">
            <h1 className="text-xl font-semibold text-white">
              Fatimah Azzahra
            </h1>
          </div>

          {/* Menu */}
          <ul
            className={`menu flex items-center sm:gap-8 gap-4 md:static fixed left-1/2 -translate-x-1/2 
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
                  offset={-80} // supaya tidak ketutup navbar
                  className="relative sm:text-base text-sm font-medium text-white 
                    cursor-pointer
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
      </div>

      {/* Spacer supaya body tidak ketiban navbar */}
      <div className="mb-10"></div>
    </>
  );
};

export default Navbar;
