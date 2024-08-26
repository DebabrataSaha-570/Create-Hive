"use client";
import React, { useState } from "react";
import Container from "../ui/Container";
import Link from "next/link";
import Button from "../ui/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="py-7 mx-7">
      <Container>
        <div className="flex justify-between items-center gap-3">
          <div className="space-x-5 flex justify-center items-center">
            <Link href="/" className="text-2xl font-bold mr-4">
              CreateHive
            </Link>
            <div className="space-x-5 hidden md:block ">
              <Link href="/">Company</Link>
              <Link href="/">Solutions</Link>
              <Link href="/">Pricing</Link>
              <Link href="/">Resources</Link>
              <Link href="/">Contact</Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex  justify-between items-center gap-3">
              <Button className="bg-tertiary">Free Consultant</Button>
              <Button className="bg-secondary text-white">
                Let&apos;s Connect
              </Button>
            </div>
          </div>

          {/* menu icons  */}
          <div className="block md:hidden ">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className={`transition-all duration-500 ${
                navOpen ? "duration-200" : ""
              }`}
            >
              {navOpen ? (
                <IoMdClose className="text-3xl font-light" />
              ) : (
                <RxHamburgerMenu className="text-3xl font-light" />
              )}
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
