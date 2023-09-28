import React from "react";
import Link from "next/link";
import Logo from "./LHD.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <Image src={Logo} alt="Picture of Lotta" width={70} />

      <h1>Lotta HelpDesk</h1>
      <Link href="/"> Dashboard</Link>
      <Link href="/Tickets"> Tickets</Link>
    </nav>
  );
}
