import React from "react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = ({ user }: SidebarProps) => {
  return (
    <section className="sidebar w-64 h-screen bg-gray-100 px-6 py-8 shadow-md">
      <nav className="flex flex-col gap-6">
        <Link href="/" className="mb-12 flex items-center gap-3">
          <Image src="/logo.svg" width={34} height={32} alt="logo" />
          <span className="text-xl font-bold text-gray-800">BankApp</span>
        </Link>

        <Link
          href="/"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Home
        </Link>
        <Link
          href="/"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          My Banks
        </Link>
        <Link
          href="/"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          My Transactions
        </Link>
        <Link
          href="/"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Transfer Fund
        </Link>
      </nav>
    </section>
  );
};

export default Sidebar;
