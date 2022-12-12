const BarNav = () => {
  return (
    <div>
      <div className="bg-[#fff] fixed py-[24px] px-0 flex min-h-[60px] items-center left-0 right-0 z-[111] ">
        <div className="max-w-[100%] my-0 mx-auto py-0 lg:px-[48px] w-[100%] sm:px-[16px]">
          <div className="flex items-center justify-between w-[100%] gap-x-[60px]">
            <div className="flex items-center">
              <div className="cursor-pointer">
                <img
                  alt="hirable"
                  src="/images/hirable logo (gradient).svg"
                  className="inline-block max-w-full border-0 h-7"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarNav;
