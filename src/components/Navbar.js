"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";


const navItems = [
  { title: "Sobre Mí", href: "/about-me" },
  { title: "Trabajos", href: "/work" },
  { title: "Contacto", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const activeIndex = navItems.findIndex((item) => item.href === pathname);
    if (containerRef.current && activeIndex !== -1) {
      const link = containerRef.current.children[activeIndex];
      setIndicatorStyle({ width: link.offsetWidth, left: link.offsetLeft });
    }
  }, [pathname]);

  return (
    <nav className="w-full h-14 sticky top-2 z-50 flex items-center">
      <div className="max-w-6xl mx-auto flex items-center px-6 w-full">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={120} height={32} />
        </Link>

        <div className="ml-auto flex items-center gap-4">
          <div
            ref={containerRef}
            className="relative hidden md:flex gap-6 md:gap-8"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1 font-medium transition-opacity duration-200 ${
                    isActive
                      ? "text-[#B9471C]"
                      : "text-[#B9471C] opacity-70 hover:opacity-100"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}

            <span
              className="absolute -bottom-2 h-1 bg-[#B9471C] rounded-full transition-all duration-300 ease-out"
              style={{ width: indicatorStyle.width, left: indicatorStyle.left }}
            />
          </div>

        

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#B9471C]"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <div className="flex flex-col items-center gap-6 py-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg font-medium transition-opacity ${
                    isActive ? "text-[#B9471C]" : "text-[#B9471C] opacity-70"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
