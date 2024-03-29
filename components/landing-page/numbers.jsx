import Image from "next/image";
import React from "react";

const Numbers = () => {
  return (
    <section className="relative pt-28 pb-32 bg-blue-600 overflow-hidden">
      <Image
        width={500}
        height={500}
        alt=""
        className="absolute top-0 left-1/2 transform -translate-x-1/2"
        src="/vault-assets/images/numbers/gradient2.svg"
      />
      <div className="relative z-10 container px-4 mx-auto">
        <div className="mb-20 border-b border-white border-opacity-10">
          <h2 className="pb-20 text-5xl md:text-6xl xl:text-7xl text-white font-bold tracking-px-n leading-none md:max-w-3xl">
            Suscipit sunt facilis aliquam.
          </h2>
        </div>
        <div className="flex flex-wrap -m-8">
          <div className="w-full md:w-1/3 p-8">
            <p className="mb-6 text-gray-200 font-semibold leading-normal">
              Satisfied Clients
            </p>
            <h3 className="mb-4 text-4xl md:text-5xl xl:text-6xl text-white font-bold tracking-px-n leading-none">
              84,900
            </h3>
            <p className="text-gray-300 font-medium leading-relaxed md:w-56">
              Qui iure voluptatem quam 15k+ users.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-8">
            <p className="mb-6 text-gray-200 font-semibold leading-normal">
              Libero sunt
            </p>
            <h3 className="mb-4 text-4xl md:text-5xl xl:text-6xl text-white font-bold tracking-px-n leading-none">
              3.2M+
            </h3>
            <p className="text-gray-300 font-medium leading-relaxed md:w-56">
              Qui iure voluptatem quam 15k+ users.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-8">
            <p className="mb-6 text-gray-200 font-semibold leading-normal">
              Customer Reviews
            </p>
            <h3 className="mb-4 text-4xl md:text-5xl xl:text-6xl text-white font-bold tracking-px-n leading-none">
              21,394
            </h3>
            <p className="text-gray-300 font-medium leading-relaxed md:w-56">
              Qui iure voluptatem quam 15k+ users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
