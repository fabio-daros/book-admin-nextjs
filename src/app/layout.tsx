import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Text from "next/link";
import React, { PropsWithChildren } from "react";

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
          <Link href="/" legacyBehavior>
            <a className="text-base font-medium text-[#8b5f26] hover:text-[#bd1e59]">Home</a>
          </Link>
          <Link href="/pages/admin/books" legacyBehavior>
            <a className="text-base font-medium text-[#8b5f26] hover:text-[#bd1e59]">Admin</a>
          </Link>
        </nav>
      </header>
      {children}
      <br>
      </br>
      <footer className="mt-auto flex justify-center space-x-8 mt-8 border-t border-gray-300 py-4">
        <Text className="text-base font-medium text-[#8b5f26] hover:text-[#bd1e59]" href={""}>
          <Link href="https://github.com/fabio-daros/">
            © Developed by Fabio Daros
          </Link>
        </Text>
      </footer>
    </div>

  )
}
