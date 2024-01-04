import React from "react";

import { Button, Img, Line, Text } from "components";

const DesktopOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-end justify-end mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="md:h-[1024px] h-[1276px] pb-[252px] md:px-5 relative w-full">
            <Img
              className="absolute h-[1024px] inset-x-[0] mx-auto object-cover top-[0] w-full"
              src="images/img_miladfakurian.png"
              alt="miladfakurian"
            />
            <div className="absolute flex flex-col md:gap-10 gap-[114px] inset-x-[0] items-center justify-start mx-auto top-[15%] w-[34%]">
              <Img
                className="h-[92px] md:h-auto object-cover w-[91px] sm:w-full"
                src="images/img_logocomm1.png"
                alt="logocommOne"
              />
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="ml-1 md:ml-[0] text-black-900 text-sm"
                  size="txtInterBold14"
                >
                  Username
                </Text>
                <Img
                  className="h-[30px] md:h-auto md:ml-[0] ml-[421px] mt-[3px] object-cover w-[12%] sm:w-full"
                  src="images/img_user.png"
                  alt="user"
                />
                <Line className="bg-black-900 h-px mt-2 w-[99%]" />
                <div className="flex flex-row items-start justify-between ml-1 md:ml-[0] mt-[15px] w-[97%] md:w-full">
                  <Text
                    className="text-black-900 text-sm"
                    size="txtInterBold14"
                  >
                    Password
                  </Text>
                  <Img
                    className="h-[30px] md:h-auto mt-[11px] object-cover w-[30px]"
                    src="images/img_password.png"
                    alt="password_One"
                  />
                </div>
                <Line className="bg-black-900 h-px mt-2.5 w-[99%]" />
                <Text
                  className="md:ml-[0] ml-[347px] mt-[18px] text-black-900 text-sm underline"
                  size="txtInterBold14"
                >
                  Forget Password
                </Text>
                <Button className="cursor-pointer font-bold leading-[normal] min-w-[470px] sm:min-w-full mt-10 rounded-[29px] sm:text-[21px] md:text-[23px] text-[25px] text-center">
                  Register Now
                </Button>
              </div>
            </div>
            <div className="absolute bg-blue_gray-100 flex flex-col inset-x-[0] items-center justify-end mx-auto p-[76px] md:px-10 sm:px-5 rounded-[80px] shadow-bs top-[12%] w-[44%]">
              <Text
                className="mt-[65px] md:text-5xl text-[63px] text-white-A700"
                size="txtInterBold63"
              >
                Sign in
              </Text>
              <Text
                className="mt-[311px] text-base text-white-A700"
                size="txtInterBold16"
              >
                or Sign in using
              </Text>
              <div className="flex flex-row items-center justify-start mt-2.5 w-2/5 md:w-full">
                <Button
                  className="flex h-12 items-center justify-center my-[11px] w-12"
                  shape="circle"
                >
                  <Img src="images/img_google.svg" alt="google" />
                </Button>
                <Img
                  className="h-[62px] md:h-auto ml-2 object-cover w-[62px]"
                  src="images/img_facebookcircled.png"
                  alt="facebookcircled"
                />
                <Img
                  className="h-[71px] md:h-auto object-cover w-[71px]"
                  src="images/img_twittercircled.png"
                  alt="twittercircled"
                />
              </div>
            </div>
          </div>
        </div>
        <Img
          className="h-[832px] md:h-auto object-cover w-[83%]"
          src="images/img_macbookair1.png"
          alt="macbookairOne"
        />
      </div>
    </>
  );
};

export default DesktopOnePage;
