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
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-[#3c5622]"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="9" cy="12" r="2" />
            <circle cx="15" cy="12" r="2" />
          </svg>
          <span className="text-[#3c5622] text-2xl font-bold ml-2">DAGER</span>
        </div>
        <div className="hidden md:flex justify-end items-center mr-2 space-x-6 w-full">
          <NavLink href="/sobre-mi">Sobre Mí</NavLink>
          <NavLink href="/musica">Musica</NavLink>
          <NavLink href="/videos">Videos</NavLink>
          <NavLink href="/final">Final</NavLink>
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
