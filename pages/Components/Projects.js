import Image from "next/image";
import React, { useState } from "react";
import img1 from "../../public/vercel.svg";
function Projects(props) {
  const { products } = props;
  //   console.log(products);

  const [isHovering, setIsHovering] = useState(false);
  const [idPro, setidPro] = useState(0);
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <>
      <div id="blog" className="bg-gray-100 px-4 xl:px-0 py-12">
        <div className="mx-auto container">
          <h1 className="text-center font-bold text-3xl lg:text-5xl tracking-wider text-gray-900">
            My Projects
          </h1>
          <div className="mt-12 lg:mt-24">
            <div className="">
              <div>
                <div className="mt-10 grid sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8">
                  {products.map((product) => {
                    return (
                      <div
                        key={product.id}
                        className="transition hover:scale-105 hover:opacity-60 hover:-translate-y-1 "
                        onClick={(e) => {
                          console.log(product.id);
                          setIsHovering(true);
                          setidPro(product.id);
                        }}
                      >
                        <img
                          className="w-full "
                          src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(2).png"
                          alt="games"
                          title="mammals"
                        />
                        <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-bold">
                          See demo
                        </div>
                        <div className="py-2 px-4 w-full flex justify-between bg-indigo-700 ">
                          <p className="text-sm text-white font-semibold tracking-wide">
                            {product.name}
                          </p>
                          <p className="text-sm text-white font-semibold tracking-wide">
                            13TH Oct, 2020
                          </p>
                        </div>
                        <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                          <h1 className="text-lg text-gray-900 font-semibold tracking-wider">
                            Transactions
                          </h1>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {isHovering && (
                  <div>
                    <button onClick={handleMouseOut}>Back</button>
                    <a
                      href="#"
                      className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <Image
                        className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src={img1}
                        alt=""
                      />
                      <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                          Here are the biggest enterprise technology
                          acquisitions of 2021 so far, in reverse chronological
                          order.
                        </p>
                      </div>
                    </a>

                    {products[idPro - 1].name}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
