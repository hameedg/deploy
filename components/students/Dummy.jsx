const Dummy = () => {
  return (
    <>
      <footer className="relative bg-white">
        <h2 className="sr-only">Footer</h2>
        <div className="mx-auto max-w-7xl py-16 px-8 lg:px-10 lg:py-16 ">
          <div className="flex grid-flow-col flex-col md:grid md:gap-8">
            <div className="col-span-2 grid grid-flow-col grid-cols-2 gap-y-10 gap-x-10 lg:grid-cols-3 ">
              <div>
                <h3 className="md:text-[18px] text-base tracking-[-0.014em] antialiased font-semibold leading-[24px] md:leading-[26px]">
                  Hirable
                </h3>
                <ul className="mt-4 space-y-3 md:space-y-4">
                  <li>
                    <div className="text-[14px] cursor-pointer leading-5 text-[#1e1928cc] hover:text-[#1e1928] md:text-[16px] md:leading-6 tracking-[-0.006em] md:-[-0.011em] antialiased">
                      For students
                    </div>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[14px] leading-5 text-[#1e1928cc] hover:text-[#1e1928] md:text-[16px] md:leading-6 tracking-[-0.006em] md:-[-0.011em] antialiased"
                    >
                      For companies
                    </a>
                  </li>
                  <li>
                    <div className="text-[14px] cursor-pointer leading-5 text-[#1e1928cc] hover:text-[#1e1928] md:text-[16px] md:leading-6 tracking-[-0.006em] md:-[-0.011em] antialiased">
                      For colleges
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="md:text-[18px] text-base tracking-[-0.014em] antialiased font-semibold leading-[24px] md:leading-[26px]">
                  Company
                </h3>
                <ul className="mt-4 space-y-3 md:space-y-4">
                  <li>
                    <div className="text-[14px] cursor-pointer leading-5 text-[#1e1928cc] hover:text-[#1e1928] md:text-[16px] md:leading-6 tracking-[-0.006em] md:-[-0.011em] antialiased">
                      About
                    </div>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[14px] leading-5 text-[#1e1928cc] hover:text-[#1e1928] md:text-[16px] md:leading-6 tracking-[-0.006em] md:-[-0.011em] antialiased"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div className="row-span-2 md:row-span-1">
                <h3 className="md:text-[18px] text-base tracking-[-0.014em] antialiased font-semibold leading-[24px] md:leading-[26px]">
                  Resources
                </h3>
                <ul className="mt-4 space-y-3 md:space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-[14px] leading-5 text-[#1e1928cc] hover:text-[#1e1928] md:text-[16px] md:leading-6 tracking-[-0.006em] md:-[-0.011em] antialiased"
                    >
                      Student Leaders
                    </a>
                  </li>
                  <li>
                    <div className="text-[14px] cursor-pointer leading-5 text-[#1e1928cc] hover:text-[#1e1928] md:text-[16px] md:leading-6 tracking-[-0.006em] md:-[-0.011em] antialiased">
                      Campus Ambassadors
                    </div>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[14px] leading-5 text-[#1e1928cc] hover:text-[#1e1928] md:text-[16px] md:leading-6 tracking-[-0.006em] md:-[-0.011em] antialiased"
                    >
                      Placement Coordinators
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="my-12 border-plum-16 md:hidden" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Dummy;
