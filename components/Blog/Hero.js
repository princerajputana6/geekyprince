import React from "react";

export default function Hero() {
  return (
    <div>
      <div class="md:mx-auto md:container px-4">
        <div class="pt-10 md:pt-40">
          <div class="container mx-auto">
            <div class="flex flex-wrap items-center pb-12">
              <div class="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                <div class="py-2 text-color">
                  <h1
                    role="heading"
                    class="text-2xl dark:text-white  lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black"
                  >
                    Boost adoption of product and services
                  </h1>
                  <p
                    role="contentinfo"
                    class="text-lg dark:text-white lg:text-3xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8"
                  >
                    Here at Globex we take special care of what your
                    organization needs instead of selling you a mass market tool
                    that takes a one size fits all approach. I personally review
                    each and every client business and oversee the team that
                    tailores a solution
                  </p>
                  <button class="flex items-center cursor-pointer pb-4 md:pb-0 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
                    <span
                      aria-label="lets get started"
                      role="button"
                      class="focus outline-none f-f-r text-lg lg:text-2xl font-semibold underline text-indigo-700 dark:text-indigo-400"
                    >
                      Lets Get Started
                    </span>
                    <div class="pl-2">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg1.svg"
                        alt="arrow"
                      />
                    </div>
                  </button>
                </div>
              </div>
              <div class="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                <img
                  class="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                  src="https://cdn.tuk.dev/assets/templates/prodify/ProductAdoption.png"
                  alt="A girl enjoying in sunlight"
                  role="img"
                />
                <div class="relative z-10 bg-white rounded shadow p-6 w-10/12 -mb-20">
                  <div class="flex items-center justify-between w-full sm:w-full mb-8">
                    <div class="flex items-center">
                      <div class="p-4 bg-yellow-200 rounded-md">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg2.svg"
                          alt="icon"
                        />
                      </div>
                      <div class="ml-6">
                        <p class="mb-1 leading-5 text-gray-800 font-bold text-2xl">
                          2,330
                        </p>
                        <p class="text-gray-600 dark:text-gray-200 text-sm tracking-normal font-normal leading-5">
                          Avg Sales
                        </p>
                      </div>
                    </div>
                    <div>
                      <div class="flex items-center pl-3 text-green-400">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg3.svg"
                          alt="arrow"
                        />
                        <p class="text-green-700 text-xs tracking-wide font-bold leading-normal pl-1">
                          7.2%
                        </p>
                      </div>
                      <p class="font-normal text-xs text-right leading-4 text-green-700 tracking-normal">
                        Increase
                      </p>
                    </div>
                  </div>
                  <div class="relative mb-3">
                    <hr class="h-1 rounded-sm bg-gray-200" />
                    <hr class="absolute top-0 h-1 w-7/12 rounded-sm bg-indigo-700" />
                  </div>
                  <h2 class="text-base text-gray-600 dark:text-gray-200 font-normal tracking-normal leading-5">
                    Yearly Goal
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pb-32 pt-16">
          <div class="mx-auto">
            <div class="flex flex-wrap flex-row-reverse items-center">
              <div class="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                <div class="py-2 text-color">
                  <div>
                    <h1
                      role="heading"
                      class="text-2xl dark:text-white lg:text-6xl tracking-tighter md:leading-snug f-f-l font-black"
                    >
                      Easily manage sales through our invoicing system
                    </h1>
                  </div>
                  <p
                    role="contentinfo"
                    class="text-lg dark:text-white lg:text-3xl leading-7 md:leading-10 f-f-r py-8"
                  >
                    Here at Globex we take special care of what your
                    organization needs instead of selling you a mass market tool
                    that takes a one size fits all approach. I personally review
                    each and every client business and oversee the team that
                    tailores a solution
                  </p>
                  <button class="flex items-center cursor-pointer pb-4 md:pb-0 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
                    <span
                      aria-label="lets get started"
                      role="button"
                      class="focus outline-none f-f-r text-lg lg:text-2xl font-semibold underline text-indigo-700 dark:text-indigo-400"
                    >
                      Lets Get Started
                    </span>
                    <div class="pl-2">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg1.svg"
                        alt="arrow"
                      />
                    </div>
                  </button>
                </div>
              </div>
              <div class="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                <img
                  class="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                  src="https://cdn.tuk.dev/assets/templates/prodify/invoicing-system.png"
                  alt="A group of three having a meeting"
                  role="img"
                />
                <div class="relative z-10 p-4 bg-white shadow rounded mx-auto w-9/12 -mb-20">
                  <p class="text-gray-800 font-normal text-md leading-4 tracking-normal mb-2">
                    Invoice # 35RD87
                  </p>
                  <p class="text-gray-600 dark:text-gray-200 text-xs leading-3 font-normal">
                    Assigned to: Josh Rollins
                  </p>
                  <div class="mt-4 flex items-center">
                    <span class="text-gray-600 dark:text-gray-200">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg4.svg"
                        alt="account"
                      />
                    </span>
                    <p class="ml-1 text-sm text-gray-800 leading-3 tracking-normal font-normal">
                      Specter Consultancy
                    </p>
                  </div>
                  <div class="mt-3 flex items-center">
                    <span class="text-gray-600 dark:text-gray-200">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg5.svg"
                        alt="dollar"
                      />
                    </span>
                    <p class="ml-1 text-sm text-gray-800 leading-3 tracking-normal font-normal">
                      2,354 USD
                    </p>
                  </div>
                  <button
                    class="relative focus:outline-none mt-4 py-2 pr-10 bg-indigo-700 text-white tracking-normal text-xs pl-3 cursor-pointer hover:opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
                    role="button"
                  >
                    View Invoice
                    <img
                      class="absolute inset-0 m-auto mr-3 icon icon-tabler icon-tabler-arrow-right"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg6.svg"
                      alt="arrow"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
