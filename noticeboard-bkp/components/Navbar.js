import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="navbar text-center bg-gray-900  p-4">
      <Link href="/students">
        <a className="mx-4 bg-gray-300 rounded-md px-4 py-2 text-gray-800 font-bold">
          STUDENTS PAGE
        </a>
      </Link>
      <Link href="/teachers">
        <a className="mx-4 bg-gray-300 rounded-md px-4 py-2 text-gray-800 font-bold">
          TEACHERS PAGE
        </a>
      </Link>
    </div>
  );
}
