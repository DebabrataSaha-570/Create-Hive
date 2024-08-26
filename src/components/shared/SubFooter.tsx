import React from "react";
import Container from "../ui/Container";
import Link from "next/link";

const SubFooter = () => {
  return (
    <div className="pt-10">
      <hr />
      <div className="mt-5 flex flex-col md:flex-row justify-between">
        <p className="text-[#242628BF] py-3 md:py-0">
          © Debabrata Saha. All Rights Reserved.
        </p>

        <p className="flex gap-4">
          <Link
            href="/"
            className="inline-block hover:text-secondary transition-all duration-200"
          >
            Terms & Conditions
          </Link>

          <Link
            href="/"
            className="inline-block hover:text-secondary transition-all duration-200"
          >
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SubFooter;
