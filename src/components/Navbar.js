"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { title: "About Me", href: "/about-me" },
  { title: "Work", href: "/work" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    left: 0,
  });

  useEffect(() => {
    const activeIndex = navItems.findIndex(
      (item) => item.href === pathname
    );

    if (containerRef.current && activeIndex !== -1) {
      const link = containerRef.current.children[activeIndex];
      setIndicatorStyle({
        width: link.offsetWidth,
        left: link.offsetLeft,
      });
    }
  }, [pathname]);

  return (
    <nav className="w-full h-14 sticky top-0 z-50 flex items-center">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 w-full">
        
        <div className="text-lg md:text-xl font-bold text-[#B9471C]">
          Mica Portfolio
        </div>
        
        <div className="relative flex gap-6 md:gap-8" ref={containerRef}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1 font-medium transition-opacity duration-200
                  ${isActive ? "text-[#B9471C]" : "text-[#B9471C] opacity-70 hover:opacity-100"}
                `}
              >
                {item.title}
              </Link>
            );
          })}

         
          <span
            className="absolute -bottom-2 h-1 bg-[#B9471C] rounded-full transition-all duration-300 ease-out"
            style={{
              width: indicatorStyle.width,
              left: indicatorStyle.left,
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
