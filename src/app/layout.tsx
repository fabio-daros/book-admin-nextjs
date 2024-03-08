import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Link from "next/link";
import React, { PropsWithChildren } from "react";
import Head from "next/head";
import { SearchIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Admin",
  description: "Web application for managing the book database.",
};

export default function Layout({ children }: PropsWithChildren) {
  return (

    <div className="bg-[#f5f0e1] px-10 py-8">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-4xl font-bold italic text-[#8b5f26]">Book Store</h1>
        <nav className="flex space-x-4">
          <Link
            className="text-base font-medium text-[#8b5f26] hover:text-[#bd1e59]" href="/">
            Home
          </Link>
          <Link className="text-base font-medium text-[#8b5f26] hover:text-[#bd1e59]" href="/pages/admin/books">
            Admin
          </Link>
        </nav>
      </header>
      {children}
      <br>
      </br>
      <footer className="mt-auto flex justify-center space-x-8 mt-8">
        <hr></hr>
        <h1 className="text-base font-medium text-[#8b5f26] hover:text-[#bd1e59]"><Link href="https://github.com/fabio-daros/">Developed by Fabio Daros</Link></h1>
      </footer>
    </div>

  )
}
