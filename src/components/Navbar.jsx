"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Referencia para el contenedor del menú
  const linksRef = useRef([]); // Array para guardar las referencias a los enlaces

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMenuOpen) {
      // Animación de expansión hacia abajo para el contenedor del menú
      gsap.fromTo(
        menuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out" }
      );

      // Animación de los enlaces de izquierda a derecha con opacidad
      linksRef.current.forEach((link, index) => {
        gsap.fromTo(
          link,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            delay: index * 0.1,
            ease: "power2.out",
          }
        );
      });
    } else {
      // Animación de colapso hacia arriba para el contenedor del menú
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });

      // Hacer que los enlaces se deslicen hacia la izquierda y desaparezcan
      gsap.to(linksRef.current, {
        x: -100,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-1/2 transform md:w-[40rem] -translate-x-1/2 w-[20em] mt-6 bg-[#efffdf] p-4 px-6
      rounded-full border-[1.5px] border-primary/30 z-50 transition-all duration-0
      ${isMenuOpen ? "rounded-xl" : "rounded-xl"}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <svg
            width="133"
            height="22"
            viewBox="0 0 133 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35 21.557V0.442953H43.453C49.6691 0.442953 53.9732 4.54765 53.9732 11C53.9732 17.4523 49.6691 21.557 43.453 21.557H35ZM41.2161 16.4336H43.2389C46.1477 16.4336 47.6832 14.647 47.6832 11C47.6832 7.35302 46.1477 5.56644 43.2389 5.56644H41.2161V16.4336Z"
              fill="#23390D"
            />
            <path
              d="M59.4399 21.557H52.9211L59.6097 0.442953H68.0406L74.6258 21.557H67.9742L67.0144 17.5631H60.4218L59.4399 21.557ZM61.603 12.7497H65.8554L63.7513 4.01611L61.603 12.7497Z"
              fill="#23390D"
            />
            <path
              d="M79.8557 11C79.8557 15.0161 81.3322 17.002 84.1892 17.002C86.5369 17.002 88.2718 15.8651 88.4637 13.7758H84.0121V10.2617H94.3919V21.557H88.604V16.9799C87.3933 20.1248 84.9644 22 81.8342 22C77.1094 22 73.5658 17.6812 73.5658 11C73.5658 4.28926 78.0027 0 84.1228 0C89.2389 0 93.3879 3.16711 94.2443 8.34228H88.0725C87.5557 6.1349 86.0866 5.12349 84.1228 5.12349C81.3248 5.12349 79.8557 7.05772 79.8557 11Z"
              fill="#23390D"
            />
            <path
              d="M96.6071 0.442953H111.52V5.50738H102.838V8.68188H110.693V13.3329H102.838V16.4926H111.756V21.557H96.6071V0.442953Z"
              fill="#23390D"
            />
            <path
              d="M119.16 21.557H112.93V0.428187H123.597C128.876 0.428187 131.711 2.84228 131.711 6.98389C131.711 10.5497 129.437 12.8752 125.856 12.9933C127.628 13.1114 128.987 14.2262 129.932 16.3228L132.279 21.557H125.332L122.933 16.3376C122.128 14.5953 121.789 14.2336 120.748 14.2336H119.16V21.557ZM119.16 9.58255H122.925C124.564 9.58255 125.472 8.80738 125.472 7.4047C125.472 6.01678 124.572 5.25637 122.925 5.25637H119.16V9.58255Z"
              fill="#23390D"
            />
            <path
              d="M0 11.0982C0 4.96884 4.96884 0 11.0982 0C17.2276 0 22.1964 4.96884 22.1964 11.0982V20C22.1964 21.1046 21.301 22 20.1964 22H2C0.895432 22 0 21.1046 0 20V11.0982Z"
              fill="#3E611D"
            />
            <path
              d="M6.65136 8.19078C6.26153 6.40405 7.62238 4.71428 9.45114 4.71428H12.3907C14.5395 4.71428 16.172 6.64709 15.8125 8.76562C15.4268 10.0473 15.3941 11.4092 15.718 12.7079L15.8125 13.087L16.3079 14.8388C16.421 15.2384 16.249 15.6639 15.89 15.8727C15.5053 16.0965 15.339 16.5657 15.4969 16.9818L15.8125 17.8136C16.2677 19.155 16.5 20.5835 16.5 22H5.89285L6.34316 19.7641C6.62928 18.3434 6.62479 16.8796 6.32996 15.4607C6.04141 14.0721 6.0309 12.6401 6.29901 11.2474L6.66556 9.34337C6.73894 8.96218 6.73411 8.57005 6.65136 8.19078Z"
              fill="#4D7725"
            />
            <circle
              cx="6.58036"
              cy="14.0446"
              r="3.63393"
              fill="white"
              stroke="#2A490D"
              stroke-width="0.392857"
            />
            <circle
              cx="15.8125"
              cy="14.0446"
              r="3.63393"
              fill="white"
              stroke="#2A490D"
              stroke-width="0.392857"
            />
          </svg>
        </div>
        <div className="hidden md:flex justify-end items-center mr-2 space-x-6 w-full">
          <NavLink href="#sobre-mi">Sobre Mí</NavLink>
          <NavLink href="#musica">Musica</NavLink>
          <NavLink href="#videos">Videos</NavLink>
          <NavLink href="#final">Final</NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#3c5622]">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <div
        ref={menuRef} // Referencia al contenedor del menú
        className={`md:hidden font-General-Medium text-xl space-y-2 overflow-hidden`} // Aseguramos overflow hidden para animaciones
        style={{ height: 0 }} // Altura inicial para la animación
      >
        <NavLink
          href="/sobre-mi"
          mobile
          ref={(el) => (linksRef.current[0] = el)}
        >
          Sobre Mí
        </NavLink>
        <NavLink href="/musica" mobile ref={(el) => (linksRef.current[1] = el)}>
          Musica
        </NavLink>
        <NavLink href="/videos" mobile ref={(el) => (linksRef.current[2] = el)}>
          Videos
        </NavLink>
        <NavLink href="/final" mobile ref={(el) => (linksRef.current[3] = el)}>
          Final
        </NavLink>
      </div>
    </nav>
  );
};

const NavLink = React.forwardRef(({ href, children, mobile = false }, ref) => (
  <Link
    href={href}
    ref={ref}
    className={`text-[#3c5622] hover:text-[#5a8033] transition-colors ${
      mobile ? "block py-2 px-4" : ""
    }`}
  >
    {children}
  </Link>
));

NavLink.displayName = "NavLink";

export default Navbar;
