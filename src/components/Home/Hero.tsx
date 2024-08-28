"use client";
import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import userImage1 from "../../../public/assests/user-1.jpg";
import userImage2 from "../../../public/assests/user-2.jpg";
import userImage3 from "../../../public/assests/user-3.jpg";
import Image from "next/image";

import dynamic from "next/dynamic";
import animation1 from "../../../public/assests/animation-1.json";

const Hero = () => {
  const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
  return (
    <section className=" px-7 flex items-center  bg-primary mb-5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* left part  */}
          <div className=" flex flex-col justify-center items-start">
            <p className="text-secondary text-lg md:text-xl font-medium mb-3 md:mb-5">
              Start earning more traffic
            </p>

            <h2 className="text-3xl  md:text-4xl lg:text-6xl font-semibold mb-1 md:mb-2">
              Marketing revolution.
            </h2>

            <h2 className="text-3xl  md:text-4xl lg:text-6xl font-semibold">
              Unlimited success &#9996;
            </h2>

            <h4 className="max-w-[93%] md:max-w-[72%] text-color1 text-base md:text-lg my-3 md:my-5">
              Join us in revolutionizing your marketing strategies for unlimited
              success. Let&apos;s achieve your goals together.
            </h4>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-7 md:mt-10">
              <Button className="bg-tertiary w-[180px]">
                Free Consultation
              </Button>
              <div className="flex md:hidden lg:flex gap-1">
                <Image
                  src={userImage1}
                  width={50}
                  alt="userImage"
                  className="object-cover rounded-full border-2 border-secondary "
                ></Image>
                <Image
                  src={userImage2}
                  width={50}
                  alt="userImage"
                  className="object-cover rounded-full  ml-[-10px] border-2 border-secondary"
                ></Image>
                <Image
                  src={userImage3}
                  width={50}
                  alt="userImage"
                  className="object-cover rounded-full ml-[-10px] border-2 border-secondary"
                ></Image>
              </div>
              <p className="block md:hidden lg:block">Loved by thousands</p>
            </div>
          </div>

          {/* right side  */}
          <div className="flex justify-center items-center">
            <Lottie animationData={animation1}></Lottie>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
