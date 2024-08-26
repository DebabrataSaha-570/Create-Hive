import React from "react";
import Container from "../ui/Container";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-5">
      <Container>
        <div>
          <div>
            <Link href="/">CreateHive</Link>
          </div>

          <div></div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
