import React from "react";
import Link from "next/link";

export default function Logo() {
  return (
    <span className="font-semibold text-xl tracking-tight text-white">
      <Link href="/">
        <p>Logo Here</p>
      </Link>
    </span>
  );
}
