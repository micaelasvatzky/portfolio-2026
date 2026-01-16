"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/contexts/LanguageContext";

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

  const { language, toggleLanguage } = useLanguage(); // <-- usamos el contexto

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
            onClick={toggleLanguage}
            className="text-[#B9471C] hover:text-[#B9471C]/80"
            aria-label="Toggle Language"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              className="bi bi-translate"
              viewBox="0 0 16 16"
            >
              <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z" />
              <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31" />
            </svg>
          </button>

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
