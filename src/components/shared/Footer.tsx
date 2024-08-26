import React from "react";
import Container from "../ui/Container";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-16 bg-primary">
      <div className="mx-10 md:mx-0">
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
                    className="text-base text-[#242628BF] font-medium"
                  >
                    Page Builder
                  </Link>
                </p>
                <p>
                  <Link
                    href="/"
                    className="text-base text-[#242628BF] font-medium"
                  >
                    Theme Options
                  </Link>
                </p>
                <p>
                  <Link
                    href="/"
                    className="text-base text-[#242628BF] font-medium"
                  >
                    Theme Builder
                  </Link>
                </p>
                <p>
                  <Link
                    href="/"
                    className="text-base text-[#242628BF] font-medium"
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
                    className="text-base text-[#242628BF] font-medium"
                  >
                    Support Center
                  </Link>
                </p>
                <p>
                  <Link
                    href="/"
                    className="text-base text-[#242628BF] font-medium"
                  >
                    Documentation
                  </Link>
                </p>
                <p>
                  <Link
                    href="/"
                    className="text-base text-[#242628BF] font-medium"
                  >
                    Community
                  </Link>
                </p>
                <p>
                  <Link
                    href="/"
                    className="text-base text-[#242628BF] font-medium"
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
                    className="text-base text-[#242628BF] font-medium"
                  >
                    Behance
                  </Link>
                </p>
                <p>
                  <Link
                    href="/"
                    className="text-base text-[#242628BF] font-medium"
                  >
                    Dribble
                  </Link>
                </p>
                <p>
                  <Link
                    href="/"
                    className="text-base text-[#242628BF] font-medium"
                  >
                    Facebook
                  </Link>
                </p>
                <p>
                  <Link
                    href="/"
                    className="text-base text-[#242628BF] font-medium"
                  >
                    Instagram
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
    // <footer className="py-5">
    //   <Container>
    //     <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
    //       <div className="md:col-span-2">
    //         <h3 className="text-2xl font-bold mb-5">CreateHive</h3>
    //         <p className="text-[#242628BF] text-base max-w-64">
    //           Create stunning, modern landing pages that captivate your audience
    //           and drive conversions.
    //         </p>
    //       </div>

    //       <div className="space-y-3">
    //         <h4 className="text-xl font-medium ">Features</h4>
    //         <p>
    //           <Link href="/" className="text-base font-medium">
    //             Page Builder
    //           </Link>
    //         </p>
    //         <p>
    //           <Link href="/" className="text-base font-medium">
    //             Theme Options
    //           </Link>
    //         </p>
    //         <p>
    //           <Link href="/" className="text-base font-medium">
    //             Theme Builder
    //           </Link>
    //         </p>
    //         <p>
    //           <Link href="/" className="text-base font-medium">
    //             Template Library
    //           </Link>
    //         </p>
    //       </div>
    //       <div className="space-y-3">
    //         <h4 className="text-xl font-medium ">Resources</h4>
    //         <p>
    //           <Link href="/" className="text-base font-medium">
    //             Page Builder
    //           </Link>
    //         </p>
    //         <p>
    //           <Link href="/" className="text-base font-medium">
    //             Theme Options
    //           </Link>
    //         </p>
    //         <p>
    //           <Link href="/" className="text-base font-medium">
    //             Theme Builder
    //           </Link>
    //         </p>
    //         <p>
    //           <Link href="/" className="text-base font-medium">
    //             Template Library
    //           </Link>
    //         </p>
    //       </div>
    //     </div>
    //   </Container>
    // </footer>
  );
};

export default Footer;
