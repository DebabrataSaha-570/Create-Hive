import React from "react";
import Container from "../ui/Container";
import ServicesData from "../../../public/data/servicesData";

const OurServices = () => {
  return (
    <section className="bg-primary py-14 px-10">
      <Container>
        <div className="flex flex-col items-center">
          <h5 className="text-secondary text-lg md:text-xl font-normal my-3 md:my-5">
            Our Services
          </h5>

          <h2 className="text-2xl md:text-5xl font-semibold mb-3 text-center">
            Your <span className="text-secondary">bespoke</span> service bundle
          </h2>
          <p className="max-w-[80%] md:max-w-[35%] text-center text-base md:text-lg text-color1">
            Unlock your business&apos;s full potential with our comprehensive
            suite of services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {ServicesData.map((service, index) => (
            <div
              key={index}
              className="p-10 bg-white rounded-md  group cursor-pointer"
            >
              <p className="p-7 inline-block bg-primary group-hover:bg-secondary cursor-pointer group-hover:text-white rounded-md transition-all duration-500">
                <span className="text-3xl">{<service.icon />}</span>
              </p>
              <h2 className="text-xl font-semibold my-4">{service.heading}</h2>
              <h3 className="text-base text-color1">{service.details}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurServices;
