import React from "react";
import Container from "../ui/Container";
import Link from "next/link";
import SubFooter from "./SubFooter";

const Footer = () => {
  return (
    <>
      <footer className="py-16 bg-primary">
        <div className="mx-10 ">
          <Container>
            <div className="flex justify-between flex-col md:flex-row">
              <div className="flex-1 mb-10 md:mb-0">
                <h3 className="text-2xl font-bold mb-5">CreateHive</h3>
                <p className="text-[#242628BF] text-base max-w-64">
                  Create stunning, modern landing pages that captivate your
                  audience and drive conversions.
                </p>
              </div>

              <div className="flex gap-5 md:gap-16 flex-col md:flex-row">
                <div className="space-y-2 md:space-y-3">
                  <h4 className="text-xl font-medium ">Features</h4>
                  <p>
                    <Link
                      href="/"
                      className="text-base text-[#242628BF] font-medium hover:text-secondary transition-all duration-200"
                    >
                      Page Builder
                    </Link>
                  </p>
                  <p>
                    <Link
                      href="/"
                      className="text-base text-[#242628BF] font-medium hover:text-secondary transition-all duration-200"
                    >
                      Theme Options
                    </Link>
                  </p>
                  <p>
                    <Link
                      href="/"
                      className="text-base text-[#242628BF] font-medium hover:text-secondary transition-all duration-200"
                    >
                      Theme Builder
                    </Link>
                  </p>
                  <p>
                    <Link
                      href="/"
                      className="text-base text-[#242628BF] font-medium hover:text-secondary transition-all duration-200"
                    >
                      Template Library
                    </Link>
                  </p>
                </div>
                <div className="space-y-2 md:space-y-3">
                  <h4 className="text-xl font-medium ">Resources</h4>
                  <p>
                    <Link
                      href="/"
                      className="text-base text-[#242628BF] font-medium hover:text-secondary transition-all duration-200"
                    >
                      Support Center
                    </Link>
                  </p>
                  <p>
                    <Link
                      href="/"
                      className="text-base text-[#242628BF] font-medium hover:text-secondary transition-all duration-200"
                    >
                      Documentation
                    </Link>
                  </p>
                  <p>
                    <Link
                      href="/"
                      className="text-base text-[#242628BF] font-medium hover:text-secondary transition-all duration-200"
                    >
                      Community
                    </Link>
                  </p>
                  <p>
                    <Link
                      href="/"
                      className="text-base text-[#242628BF] font-medium hover:text-secondary transition-all duration-200"
                    >
                      Hosting
                    </Link>
                  </p>
                </div>
                <div className="space-y-2 md:space-y-3">
                  <h4 className="text-xl font-medium ">Social</h4>
                  <p>
                    <Link
                      href="/"
                      className="text-base text-[#242628BF] font-medium hover:text-secondary transition-all duration-200"
                    >
                      Behance
                    </Link>
                  </p>
                  <p>
                    <Link
                      href="/"
                      className="text-base text-[#242628BF] font-medium hover:text-secondary transition-all duration-200"
                    >
                      Dribble
                    </Link>
                  </p>
                  <p>
                    <Link
                      href="/"
                      className="text-base text-[#242628BF] font-medium hover:text-secondary transition-all duration-200"
                    >
                      Facebook
                    </Link>
                  </p>
                  <p>
                    <Link
                      href="/"
                      className="text-base text-[#242628BF] font-medium hover:text-secondary transition-all duration-200"
                    >
                      Instagram
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <SubFooter></SubFooter>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;
