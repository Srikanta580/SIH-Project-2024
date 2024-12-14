// import React from "react";
import FAQ from "../components/FAQ";
import support from "../assets/support.jpg";
import supportData from "../../public/data/supportData.json";

const Support = () => {
  return (
    <div>
      <div className="p-10 bg-white flex flex-row items-center dashboard-box max-h-[28rem]">
        <div className="basis-4/6 self-start h-full flex flex-col gap-y-8">
          <h1 className="text-3xl mb-6 font-semibold">
            Welcome to AYUSH Startup Support
          </h1>
          <p className="w-4/5 text-xl capitalize">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odio
            quasi repellat eum ab similique tempore quae ullam cumque
            doloremque! Rerum, officiis. Corrupti, accusantium quaerat culpa
            quisquam, dolorem eligendi obcaecati eos laudantium natus suscipit
            officia dolores voluptate excepturi facere quasi aliquid magni.
            Beatae tenetur nam dicta cum repellat dolorum nihil.
          </p>
          <form className="w-1/2 ">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                placeholder="How can we help you...?"
                required
              />
              <button
                type="submit"
                className="absolute end-2.5 bottom-2.5 btn-primary"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="basis-2/6 h-full">
          <img src={support} alt="support_img" className="h-[25rem]" />
        </div>
      </div>
      <div className="py-10 flex flex-col gap-y-3">
        <h1 className="text-3xl font-semibold">
          Need help ? We&apos;ve got your back
        </h1>
        <p className="text-md font-normal">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, maxime
          beatae.
        </p>
        <div className="w-full h-auto grid grid-cols-4 grid-rows-2 gap-8 bg-transparent">
          {supportData.map((support, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-y-5 px-10 py-8 bg-white dashboard-box capitalize"
            >
              <img src={support.icon} alt="help_icon" className="size-20" />
              <h2 className="text-xl text-violet-600 font-medium">
                {support.heading}
              </h2>
              <p>{support.description}</p>
            </div>
          ))}
        </div>
      </div>
      <FAQ />
    </div>
  );
};

export default Support;
