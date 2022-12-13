const Canvas = () => {
  return (
    <>
      {/* sm:max-w-[512px] md:max-w-[770px] lg:max-w-[1024px] */}
      <div className="container rounded-md max-w-container mt-5 p-0 mx-auto bg-white mb-8">
        <div className="p-3.8 border border-border rounded-sm">
          <p className="text-xsm uppercase font-medium mb-3.8 text-light">
            new Job on canvas
          </p>
          <div className="grid grid-cols-3 gap-3.8">
            <div className="border p-3.8 group bg-white rounded-md hover:shadow-lg duration-150 ease-in cursor-pointer">
              <button type="button" className="text-left w-full">
                <div className="flex justify-between mb-2.5">
                  <img
                    width="90"
                    height="90"
                    className="rounded-md"
                    src="https://jumpstart-static.s3.amazonaws.com/backend/organizations/organization/0unx3UBmQyq6mXkH0PtAuw.png"
                    alt="company_logo"
                  ></img>
                  <div className="mb-1 pt-0 inline-block px-2 h-6 bg-level-badge text-center text-black text-level-badge-fs leading-level-badge-lh rounded-4xl">
                    Internship
                  </div>
                </div>
                <h4 className="font-medium text-base leading-snug mb-2">
                  Product Manager
                </h4>
                <div className="flex items-center cursor-pointer mb-3 break-words truncate">
                  <p className="hover:underline hover:text-highlight leading-4 text-sm">
                    Samsung Research America
                  </p>
                </div>
              </button>
              <hr className="my-[0.9375rem] mx-[calc(-0.9375rem)] bg-border"></hr>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="shadow-sm space-x-1.5 bg-white border self-center duration-150 ease-in border-black px-4 flex items-center justify-center rounded font-semibold text-sm leading-[18.2px] antialiased h-10 select-none hover:shadow-md hover:-translate-y-0.5"
                >
                  <svg
                    data-v-4a7785f2=""
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="bookmark"
                    role="img"
                    width="10.5"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className=" inline-block"
                  >
                    <path
                      data-v-4a7785f2=""
                      fill="currentColor"
                      d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm16 456.287l-160-93.333-160 93.333V48c0-8.822 7.178-16 16-16h288c8.822 0 16 7.178 16 16v408.287z"
                    ></path>
                  </svg>
                  <span className="inline-block">Save</span>
                </button>
                <button
                  type="button"
                  className="shadow-sm space-x-1.5 text-white bg-blue-600 border self-center duration-150 ease-in border-blue-500 px-4 flex items-center justify-center rounded font-semibold text-sm leading-[18.2px] antialiased h-10 select-none hover:shadow-md hover:-translate-y-0.5"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="bolt"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className=" overflow-hidden inline-block h-4 mr-2 align-[-0.125em]"
                  >
                    <path
                      fill="white"
                      d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"
                      className=""
                    ></path>
                  </svg>
                  Get Referral
                </button>
              </div>
            </div>
            <div className="border p-3.8 group bg-white rounded-md hover:shadow-lg duration-150 ease-in cursor-pointer">
              <button type="button" className="text-left w-full">
                <div className="flex justify-between mb-2.5">
                  <img
                    width="90"
                    height="90"
                    className="rounded-md"
                    src="https://jumpstart-static.s3.amazonaws.com/backend/organizations/organization/0unx3UBmQyq6mXkH0PtAuw.png"
                    alt="company_logo"
                  ></img>
                  <div className="mb-1 pt-0 inline-block px-2 h-6 bg-level-badge text-center text-black text-level-badge-fs leading-level-badge-lh rounded-4xl">
                    Internship
                  </div>
                </div>
                <h4 className="font-medium text-base leading-snug mb-2">
                  Product Manager
                </h4>
                <div className="flex items-center cursor-pointer mb-3 break-words truncate">
                  <p className="hover:underline hover:text-highlight leading-4 text-sm">
                    Samsung Research America
                  </p>
                </div>
              </button>
              <hr className="my-[0.9375rem] mx-[calc(-0.9375rem)] bg-border"></hr>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="shadow-sm space-x-1.5 bg-white border self-center duration-150 ease-in border-black px-4 flex items-center justify-center rounded font-semibold text-sm leading-[18.2px] antialiased h-10 select-none hover:shadow-md hover:-translate-y-0.5"
                >
                  <svg
                    data-v-4a7785f2=""
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="bookmark"
                    role="img"
                    width="10.5"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className=" inline-block"
                  >
                    <path
                      data-v-4a7785f2=""
                      fill="currentColor"
                      d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm16 456.287l-160-93.333-160 93.333V48c0-8.822 7.178-16 16-16h288c8.822 0 16 7.178 16 16v408.287z"
                    ></path>
                  </svg>
                  <span className="inline-block">Save</span>
                </button>
                <button
                  type="button"
                  className="shadow-sm space-x-1.5 text-white bg-blue-600 border self-center duration-150 ease-in border-blue-500 px-4 flex items-center justify-center rounded font-semibold text-sm leading-[18.2px] antialiased h-10 select-none hover:shadow-md hover:-translate-y-0.5"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="bolt"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className=" overflow-hidden inline-block h-4 mr-2 align-[-0.125em]"
                  >
                    <path
                      fill="white"
                      d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"
                      className=""
                    ></path>
                  </svg>
                  Get Referral
                </button>
              </div>
            </div>
            <div className="border p-3.8 group bg-white rounded-md hover:shadow-lg duration-150 ease-in cursor-pointer">
              <button type="button" className="text-left w-full">
                <div className="flex justify-between mb-2.5">
                  <img
                    width="90"
                    height="90"
                    className="rounded-md"
                    src="https://jumpstart-static.s3.amazonaws.com/backend/organizations/organization/0unx3UBmQyq6mXkH0PtAuw.png"
                    alt="company_logo"
                  ></img>
                  <div className="mb-1 pt-0 inline-block px-2 h-6 bg-level-badge text-center text-black text-level-badge-fs leading-level-badge-lh rounded-4xl">
                    Internship
                  </div>
                </div>
                <h4 className="font-medium text-base leading-snug mb-2">
                  Product Manager
                </h4>
                <div className="flex items-center cursor-pointer mb-3 break-words truncate">
                  <p className="hover:underline hover:text-highlight leading-4 text-sm">
                    Samsung Research America
                  </p>
                </div>
              </button>
              <hr className="my-[0.9375rem] mx-[calc(-0.9375rem)] bg-border"></hr>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="shadow-sm space-x-1.5 bg-white border self-center duration-150 ease-in border-black px-4 flex items-center justify-center rounded font-semibold text-sm leading-[18.2px] antialiased h-10 select-none hover:shadow-md hover:-translate-y-0.5"
                >
                  <svg
                    data-v-4a7785f2=""
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="bookmark"
                    role="img"
                    width="10.5"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className=" inline-block"
                  >
                    <path
                      data-v-4a7785f2=""
                      fill="currentColor"
                      d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm16 456.287l-160-93.333-160 93.333V48c0-8.822 7.178-16 16-16h288c8.822 0 16 7.178 16 16v408.287z"
                    ></path>
                  </svg>
                  <span className="inline-block">Save</span>
                </button>
                <button
                  type="button"
                  className="shadow-sm space-x-1.5 text-white bg-blue-600 border self-center duration-150 ease-in border-blue-500 px-4 flex items-center justify-center rounded font-semibold text-sm leading-[18.2px] antialiased h-10 select-none hover:shadow-md hover:-translate-y-0.5"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="bolt"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className=" overflow-hidden inline-block h-4 mr-2 align-[-0.125em]"
                  >
                    <path
                      fill="white"
                      d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"
                      className=""
                    ></path>
                  </svg>
                  Get Referral
                </button>
              </div>
            </div>
            <div className="border p-3.8 group bg-white rounded-md hover:shadow-lg duration-150 ease-in cursor-pointer">
              <button type="button" className="text-left w-full">
                <div className="flex justify-between mb-2.5">
                  <img
                    width="90"
                    height="90"
                    className="rounded-md"
                    src="https://jumpstart-static.s3.amazonaws.com/backend/organizations/organization/0unx3UBmQyq6mXkH0PtAuw.png"
                    alt="company_logo"
                  ></img>
                  <div className="mb-1 pt-0 inline-block px-2 h-6 bg-level-badge text-center text-black text-level-badge-fs leading-level-badge-lh rounded-4xl">
                    Internship
                  </div>
                </div>
                <h4 className="font-medium text-base leading-snug mb-2">
                  Product Manager
                </h4>
                <div className="flex items-center cursor-pointer mb-3 break-words truncate">
                  <p className="hover:underline hover:text-highlight leading-4 text-sm">
                    Samsung Research America
                  </p>
                </div>
              </button>
              <hr className="my-[0.9375rem] mx-[calc(-0.9375rem)] bg-border"></hr>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="shadow-sm space-x-1.5 bg-white border self-center duration-150 ease-in border-black px-4 flex items-center justify-center rounded font-semibold text-sm leading-[18.2px] antialiased h-10 select-none hover:shadow-md hover:-translate-y-0.5"
                >
                  <svg
                    data-v-4a7785f2=""
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="bookmark"
                    role="img"
                    width="10.5"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className=" inline-block"
                  >
                    <path
                      data-v-4a7785f2=""
                      fill="currentColor"
                      d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm16 456.287l-160-93.333-160 93.333V48c0-8.822 7.178-16 16-16h288c8.822 0 16 7.178 16 16v408.287z"
                    ></path>
                  </svg>
                  <span className="inline-block">Save</span>
                </button>
                <button
                  type="button"
                  className="shadow-sm space-x-1.5 text-white bg-blue-600 border self-center duration-150 ease-in border-blue-500 px-4 flex items-center justify-center rounded font-semibold text-sm leading-[18.2px] antialiased h-10 select-none hover:shadow-md hover:-translate-y-0.5"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="bolt"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className=" overflow-hidden inline-block h-4 mr-2 align-[-0.125em]"
                  >
                    <path
                      fill="white"
                      d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"
                    ></path>
                  </svg>
                  Get Referral
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Canvas;
