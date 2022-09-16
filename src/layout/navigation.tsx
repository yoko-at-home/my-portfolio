import { Burger } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";

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
            <a className="text-gradient-sub mr-2 whitespace-nowrap text-lg font-semibold">
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
        className={`duration-0 fixed top-0 right-0 z-50 h-full w-full transform overflow-auto px-6 pt-6 ${
          opened ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0), rgba(100,100,333)),
  url('')`,
        }}
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
