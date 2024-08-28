"use client";
import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import Link from "next/link";
import Button from "../ui/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <nav
      className={`py-5 px-7  sticky top-0 ${bg ? "bg-white" : "bg-primary"} `}
    >
      <Container>
        <div className="flex justify-between items-center gap-3">
          <div className="space-x-5 flex justify-center items-center">
            <Link href="/" className="text-2xl font-bold mr-4">
              CreateHive
            </Link>
            <div className="space-x-5 hidden md:block ">
              <Link href="/company">Company</Link>
              <Link href="/solutions">Solutions</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/resources">Resources</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex  justify-between items-center gap-3">
              <Button className="bg-tertiary">Free Consultation</Button>
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

        {/* mobile navbar  */}
        <div
          className={`${
            !navOpen
              ? "hidden "
              : " h-screen mt-10 z-10     flex  flex-col items-start  space-y-5 text-normal text-lg font-normal lg:hidden"
          } `}
        >
          <p onClick={() => setNavOpen(!navOpen)} className="">
            <Link href="/company">Company</Link>
          </p>
          <p onClick={() => setNavOpen(!navOpen)}>
            <Link href="/solutions">Solutions</Link>
          </p>
          <p onClick={() => setNavOpen(!navOpen)}>
            <Link href="/pricing">Pricing</Link>
          </p>
          <p onClick={() => setNavOpen(!navOpen)}>
            <Link href="/resources">Resources</Link>
          </p>
          <p onClick={() => setNavOpen(!navOpen)}>
            <Link href="/contact">Contact</Link>
          </p>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
