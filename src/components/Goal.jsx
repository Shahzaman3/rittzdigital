import React from "react";

const Included = () => {
  return (
    <div className="w-full bg-pink-800 xl:h-[200vh] xl:overflow-y-scroll hide-scrollbar py-8 grid grid-cols-1 xl:grid-cols-2  scroll-container z-0">
      <div className="flex flex-col justify-items-start">
        <div className="absolute xl:mt-12 h-6 bg-[#bbecff] w-[180px] items-center rounded-2xl flex gap-2 mx-6 py-2 px-4 ">
          <div className="h-4 w-4  ml-1 ">
            <svg
              fill="#000000"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"></path>
              </g>
            </svg>
          </div>
          <span className="font-sans text-sm font-light text-black uppercase">
            OUR GOALS
          </span>
        </div>
        <h1 className="absolute text-pink-200 font-serif font-light text-3xl md:text-5xl px-6 py-10 xl:mt-12 leading-tight">
          From concept to code, <br />
          We design for growth <br />
          And build for impact.
        </h1>
      </div>
      <div className="">
        <div className="flex mt-17 md:mt-[12rem] lg:mt-[13rem] xl:ml-[1rem] xl:mt-[1rem] pb-7 items-center">
          <div className="hidden md:block mx-6 w-[20vw] h-[20vh] md:w-[110px] md:h-[110px] xl:w-[130px] xl:h-[110px] rounded-full ">
            <img className="object-cover" src="/assets/arrow.png" alt="arrow" />
          </div>
          <h4 className="font-sans w-[70%] font-light md:text-2xl px-6 pt-25 md:mt-11 md:py-2 mb-6">
            We bring clarity with tailored strategies that enhance user
            experience, elevate your brand, and drive lasting impact.
          </h4>
        </div>
        <div className="relative bg-[#f3d7ea] w-[90%] border-black border-1 mx-auto shadow-md mb-6 px-6 md:px-26">
          <img
            className="absolute object-cover top-0 left-0 h-12 w-12 md:h-16 md:w-16 bg-[#bbecff] p-4"
            src="https://peekinsights.co/wp-content/uploads/2024/09/icon-magnifying-glass.svg"
            alt=""
          />
          <h2 className="font-serif text-xl md:text-3xl md:mt-2 mt-12 py-2 mb-6">
            Strategic Website Insights
          </h2>
          <p className="font-sans text-sm md:text-xl py-0 font-light mb-9">
            We perform a strategic breakdown of your core pages to uncover
            friction points, user drop-offs, and untapped growth opportunities.
            Our audits are designed to optimize performance, boost engagement,
            and drive more conversions.
          </p>
          <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-4 md:mb-6">
            <div className="h-4 w-4 md:h-5 md:w-5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="#292D32"
                    stroke-width="0.792"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M7.75 12L10.58 14.83L16.25 9.17004"
                    stroke="#292D32"
                    stroke-width="0.792"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <span className="text-sm md:text-xl font-sans font-light">
              Navigation & user flow review
            </span>
          </div>
          <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-4 md:mb-6">
            <div className="h-4 w-4 md:h-5 md:w-5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="#292D32"
                    stroke-width="0.792"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M7.75 12L10.58 14.83L16.25 9.17004"
                    stroke="#292D32"
                    stroke-width="0.792"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <span className="text-sm md:text-xl font-sans font-light">
              Homepage structure & messaging
            </span>
          </div>
          <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-4 md:mb-6">
            <div className="h-4 w-4 md:h-5 md:w-5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="#292D32"
                    stroke-width="0.792"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M7.75 12L10.58 14.83L16.25 9.17004"
                    stroke="#292D32"
                    stroke-width="0.792"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <span className="text-sm md:text-xl font-sans font-light">
              Collection layout & usability
            </span>
          </div>
          <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-4 md:mb-6">
            <div className="h-4 w-4 md:h-5 md:w-5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="#292D32"
                    stroke-width="0.792"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M7.75 12L10.58 14.83L16.25 9.17004"
                    stroke="#292D32"
                    stroke-width="0.792"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <span className="text-sm md:text-xl font-sans font-light">
              Product page content & hierarchy
            </span>
          </div>
          <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-4 md:mb-6">
            <div className="h-4 w-4 md:h-5 md:w-5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="#292D32"
                    stroke-width="0.792"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M7.75 12L10.58 14.83L16.25 9.17004"
                    stroke="#292D32"
                    stroke-width="0.792"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <span className="text-sm md:text-xl font-sans font-light">
              Cart & checkout friction analysis
            </span>
          </div>
        </div>
        <div className="relative bg-[#f3d7ea] w-[90%] border-black border-1 mx-auto shadow-md mb-6 px-6 md:px-26">
          <img
            className="absolute top-0 left-0 object-cover h-12 w-12 md:h-16 md:w-16 bg-[#ffd3c0] p-4"
            src="https://peekinsights.co/wp-content/uploads/2024/09/icon-opacity.svg"
            alt=""
          />
          <h2 className="font-serif text-xl mt-12 md:text-3xl md:mt-2 py-2 mb-6">
            Conversion-Driven Redesign Concepts
          </h2>
          <p className="font-sans text-sm md:text-xl py-0 font-light mb-9">
            Explore high-impact redesign concepts with clear, side-by-side
            comparisons that show exactly how your site can perform better. We
            focus on optimizing layout, content, and flow — all tailored to
            increase user engagement and drive conversions.
          </p>
          <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-6">
            <div className="h-4 w-4 md:h-5 md:w-5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="#292D32"
                    stroke-width="0.792"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M7.75 12L10.58 14.83L16.25 9.17004"
                    stroke="#292D32"
                    stroke-width="0.792"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <span className="text-sm md:text-xl font-sans font-light">
              Redesign of 10+ key pages
            </span>
          </div>
          <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-6">
            <div className="h-4 w-4 md:h-5 md:w-5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="#292D32"
                    stroke-width="0.792"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M7.75 12L10.58 14.83L16.25 9.17004"
                    stroke="#292D32"
                    stroke-width="0.792"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <span className="text-sm md:text-xl font-sans font-light">
              Before/After mockups with expert notes
            </span>
          </div>
          <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-6">
            <div className="h-4 w-4 md:h-5 md:w-5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="#292D32"
                    stroke-width="0.792"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M7.75 12L10.58 14.83L16.25 9.17004"
                    stroke="#292D32"
                    stroke-width="0.792"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <span className="text-sm md:text-xl font-sans font-light leading-tight">
              Dev-ready files for smooth handoff
            </span>
          </div>
        </div>
        <div className="relative bg-[#f3d7ea] w-[90%] border-black border-1 mx-auto shadow-md mb-6 px-6 md:px-26">
          <img
            className="absolute top-0 left-0 object-cover h-12 w-12 md:h-16 md:w-16 bg-[#f7d681] p-4"
            src="https://peekinsights.co/wp-content/uploads/2024/09/icon-checklist.svg"
            alt=""
          />
          <h2 className="font-serif text-xl md:text-3xl mt-12 md:mt-2 py-2 mb-6">
            Strategic Fixes That Drive Results
          </h2>
          <p className="font-sans text-sm md:text-xl  font-light mb-7">
            A curated checklist packed with quick wins and high-impact
            improvements to elevate your site’s performance and user journey.
          </p>
          <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-6">
            <div className="h-4 w-4 md:h-5 md:w-5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="#292D32"
                    stroke-width="0.792"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M7.75 12L10.58 14.83L16.25 9.17004"
                    stroke="#292D32"
                    stroke-width="0.792"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <span className="text-sm md:text-xl font-sans font-light">
              40+ tailored site optimizations
            </span>
          </div>
          <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-6">
            <div className="h-4 w-4 md:h-5 md:w-5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="#292D32"
                    stroke-width="0.792"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M7.75 12L10.58 14.83L16.25 9.17004"
                    stroke="#292D32"
                    stroke-width="0.792"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <span className="text-sm md:text-xl font-sans font-light">
              Top 5 quick-priority actions
            </span>
          </div>
          <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-6">
            <div className="h-4 w-4 md:h-5 md:w-5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="#292D32"
                    stroke-width="0.792"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M7.75 12L10.58 14.83L16.25 9.17004"
                    stroke="#292D32"
                    stroke-width="0.792"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <span className="text-sm md:text-xl font-sans font-light leading-tight">
              Guidance across CRO, UX & revenue levers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Included;
