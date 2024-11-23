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
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="133"
              height="22"
              fill="none"
              viewBox="0 0 133 22"
            >
              <path
                fill="#23390D"
                d="M35 21.557V.443h8.453c6.216 0 10.52 4.105 10.52 10.557s-4.304 10.557-10.52 10.557zm6.216-5.123h2.023c2.909 0 4.444-1.787 4.444-5.434s-1.535-5.434-4.444-5.434h-2.023zM59.44 21.557H52.92L59.61.443h8.43l6.586 21.114h-6.652l-.96-3.994h-6.592zm2.163-8.807h4.252l-2.104-8.734zM79.856 11c0 4.016 1.476 6.002 4.333 6.002 2.348 0 4.083-1.137 4.275-3.226h-4.452v-3.514h10.38v11.295h-5.788V16.98c-1.21 3.145-3.64 5.02-6.77 5.02-4.725 0-8.268-4.319-8.268-11 0-6.71 4.437-11 10.557-11 5.116 0 9.265 3.167 10.121 8.342h-6.171c-.517-2.207-1.986-3.219-3.95-3.219-2.798 0-4.267 1.935-4.267 5.877M96.607.443h14.913v5.064h-8.682v3.175h7.855v4.65h-7.855v3.16h8.918v5.065H96.607zM119.16 21.557h-6.23V.428h10.667c5.279 0 8.114 2.414 8.114 6.556 0 3.566-2.274 5.891-5.855 6.01 1.772.117 3.131 1.232 4.076 3.329l2.347 5.234h-6.947l-2.399-5.22c-.805-1.742-1.144-2.103-2.185-2.103h-1.588zm0-11.974h3.765c1.639 0 2.547-.776 2.547-2.178 0-1.388-.9-2.149-2.547-2.149h-3.765z"
              ></path>
              <path
                fill="#3E611D"
                d="M0 11.098C0 4.968 4.969 0 11.098 0s11.098 4.969 11.098 11.098V20a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z"
              ></path>
              <path
                fill="#4D7725"
                d="M6.651 8.19a2.866 2.866 0 0 1 2.8-3.476h2.94a3.47 3.47 0 0 1 3.422 4.052 7.44 7.44 0 0 0-.095 3.942l.095.379.495 1.752a.91.91 0 0 1-.418 1.034.91.91 0 0 0-.393 1.109l.316.832A13.1 13.1 0 0 1 16.5 22H5.893l.45-2.236c.286-1.42.282-2.884-.013-4.303-.289-1.389-.3-2.82-.031-4.214l.367-1.904a2.9 2.9 0 0 0-.015-1.152"
              ></path>
              <circle
                cx="6.58"
                cy="14.045"
                r="3.634"
                fill="#fff"
                stroke="#2A490D"
                strokeWidth="0.393"
              ></circle>
              <circle
                cx="15.813"
                cy="14.045"
                r="3.634"
                fill="#fff"
                stroke="#2A490D"
                strokeWidth="0.393"
              ></circle>
            </svg>
          </Link>
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
          href="#sobre-mi"
          mobile
          ref={(el) => (linksRef.current[0] = el)}
        >
          Sobre Mí
        </NavLink>
        <NavLink href="#musica" mobile ref={(el) => (linksRef.current[1] = el)}>
          Musica
        </NavLink>
        <NavLink href="#videos" mobile ref={(el) => (linksRef.current[2] = el)}>
          Videos
        </NavLink>
        <NavLink href="#final" mobile ref={(el) => (linksRef.current[3] = el)}>
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
