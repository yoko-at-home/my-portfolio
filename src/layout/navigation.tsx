import Link from "next/link";
import { useState } from "react";
import { Burger } from "@mantine/core";

const items = [
  // { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];
export const Navigation = () => {
  return (
    <div className="flex leading-6">
      {items.map(({ href, label }) => {
        return (
          <Link key={href} href={href}>
            <a className="mr-2 whitespace-nowrap text-[18px] font-bold text-black">
              {label}
            </a>
          </Link>
        );
      })}
    </div>
  );
};
export const NavMobile = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <div className="text-white sm:hidden">
      <Burger
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        title={title}
      />
      <div
        className={`fixed top-0 right-0  z-10 h-full w-full transform overflow-auto bg-[#E64980] p-6  duration-300 ease-in-out ${
          opened ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          title={title}
          color="#fff"
        />
        <div className="flex flex-col">
          {items.map(({ href, label }) => {
            return (
              <Link key={href} href={href}>
                <a className="whitespace-nowrap text-[18px] font-bold leading-9">
                  {label}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
