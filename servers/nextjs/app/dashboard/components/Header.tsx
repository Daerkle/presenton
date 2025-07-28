"use client";

import Wrapper from "@/components/Wrapper";
import React from "react";
import Link from "next/link";
import BackBtn from "@/components/BackBtn";
import { usePathname } from "next/navigation";
import HeaderNav from "@/app/(presentation-generator)/components/HeaderNab";
import { ThemeToggle } from "@/components/theme-toggle";
const Header = () => {
  const pathname = usePathname();
  return (
    <div className="bg-[#5146E5] dark:bg-gray-900 w-full shadow-lg sticky top-0 z-50 transition-colors">
      <Wrapper>
        <div className="flex items-center justify-between py-1">
          <div className="flex items-center gap-3">
            {pathname !== '/upload' && <BackBtn />}
            <Link href="/dashboard">
              <img
                src="/logo-white.png"
                alt="SCHWARM logo"
                className="h-16"
              />
            </Link>
          </div>
          <div className="flex items-center gap-3 sm:gap-5 md:gap-10">
            <HeaderNav />
            <ThemeToggle />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
