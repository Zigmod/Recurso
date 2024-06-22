"use client";

import React from "react";
import Link from "next/link";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export default function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-50 dark:text-white" />,
    },
    {
      name: "Add Movie",
      link: "/addTopic",
      icon: <IconUser className="h-4 w-4 text-neutral-50 dark:text-white" />,
    },
  ];

  return (

    <div className="relative w-full">
      <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
        <Link className="text-white font-bold" href={"/"}>
          Movies Reviews
        </Link>
        <FloatingNav navItems={navItems} />
        <Link className="bg-white p-2" href={"/addTopic"}>
          Add Movie
        </Link>
      </nav>
    </div>
  );
}
