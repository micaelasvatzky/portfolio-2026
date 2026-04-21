"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { useTheme } from "@/app/contexts/ThemeContext";
import { translations } from "@/translations";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/about", label: t.nav.about },
    { href: "/work", label: t.nav.work },
    { href: "/contact", label: t.nav.contact },
  ];

  const getLinkHref = (label) => {
    if (label === t.nav.about) return "/about";
    if (label === t.nav.work) return "/work";
    return "/contact";
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 px-4 md:px-12 py-3 md:py-4 z-50 bg-white/[0.03] dark:bg-black/[0.03] backdrop-blur-2xl flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4">
          <div className="w-12 h-10 md:w-14 md:h-12 bg-black text-white flex items-center justify-center text-lg md:text-xl font-black tracking-tighter">
            MS
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link key={link.href} href={getLinkHref(link.label)} className="nav-link">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6 border-l border-black/10 dark:border-white/10 pl-12">
            <button
              onClick={toggleLanguage}
              className="text-[10px] font-black uppercase hover:opacity-100 opacity-40 transition-all cursor-pointer"
              title="Toggle Language"
            >
              {language}
            </button>

            <button
              onClick={toggleTheme}
              className="hover:scale-110 transition-transform cursor-pointer"
              title="Toggle Theme"
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-[10px] font-black uppercase opacity-40 transition-all cursor-pointer"
            >
              {language}
            </button>

            <button
              onClick={toggleTheme}
              className="hover:scale-110 transition-transform cursor-pointer"
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-1 cursor-pointer"
              aria-label="Open Menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] backdrop-blur-3xl flex flex-col">
          <div className="flex justify-between items-center p-4">
            <Link href="/" className="flex items-center gap-4" onClick={() => setIsMenuOpen(false)}>
              <div className="w-12 h-10 bg-black text-white flex items-center justify-center text-lg font-black tracking-tighter">
                MS
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="text-[10px] font-black uppercase opacity-40 transition-all cursor-pointer"
              >
                {language}
              </button>

              <button
                onClick={toggleTheme}
                className="cursor-pointer"
              >
                {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
              </button>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-1 cursor-pointer"
                aria-label="Close Menu"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-black uppercase tracking-tighter opacity-50 hover:opacity-100 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;