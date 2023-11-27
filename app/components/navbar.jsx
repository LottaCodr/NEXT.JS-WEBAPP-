import React from "react";
import Link from "next/link";
import Logo from "./LHD.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex space-x-3 justify-between items-center p-3">
      {/* <Image src={Logo} alt="Picture of Lotta" width={70} /> */}
      <h1>Cuddle</h1>
      <div className="flex space-x-9 justify-between items-center  ">
        <Link href="/"> Investment</Link>
        <Link href="/affiliate"> Affiliate</Link>
        <select id="dropdown" name="dropdown">
          <option value="Learn">Learn</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <Link href="/contact"> Contact</Link>
      </div>

      <div className="flex space-x-4 justify-between items-center ">
        <Link href="/signin"> Sign In</Link>
        <button className="btn-primary">Get Started</button>
      </div>
    </nav>
  );
}
