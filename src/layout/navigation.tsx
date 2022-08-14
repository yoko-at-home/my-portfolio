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
            <a className="mr-2 whitespace-nowrap text-lg font-semibold text-black">
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
        className={`duration-0 fixed top-0  right-0 z-10 h-full w-full transform overflow-auto bg-[#E64980] px-6 pt-6 ${
          opened ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          title={title}
          color="#fff"
        />
        <div className="mt-6 flex flex-col">
          {items.map(({ href, label }) => {
            return (
              <Link key={href} href={href}>
                <a className="whitespace-nowrap text-2xl font-semibold leading-relaxed">
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
