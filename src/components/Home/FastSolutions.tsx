import React from "react";
import Container from "../ui/Container";
import FastSolutionsData from "../../../public/data/fastSolutionsData";
import Image from "next/image";

const FastSolutions = () => {
  return (
    <section className="bg-secondary  py-14 px-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
          {/* left part  */}
          <div className="text-white col-span-1 space-y-5">
            <h4 className=" text-lg font-semibold">Fast Solutions</h4>
            <h2 className="text-3xl md:text-5xl font-semibold">
              <span className="text-tertiary ">Solutions </span>for busy
              business owners
            </h2>
            <h3 className="text-lg md:text-xl">
              Drive revenue with email automation, boost SEO rankings, and
              optimize the customer journey effortlessly.
            </h3>
          </div>

          {/* right part  */}
          <div className="col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 ">
              {FastSolutionsData.map((data, index) => (
                <div
                  key={index}
                  className="bg-white px-5 py-12 space-y-3  rounded-md"
                >
                  <Image
                    src={data.image}
                    style={{ height: "300px" }}
                    className="mx-auto object-cover  w-full  "
                    alt="image"
                  ></Image>
                  <h2 className="text-xl font-semibold">{data.heading}</h2>
                  <h4 className="text-lg text-color1">{data.details}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FastSolutions;
