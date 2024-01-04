import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const DesktopTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <div className="h-[2048px] md:px-5 relative w-full">
          <div className="h-[1227px] md:h-[739px] sm:h-[893px] mb-[-203.81px] mx-auto w-full z-[1]">
            <div className="absolute sm:h-[1096px] h-[1197px] md:h-[942px] inset-[0] justify-center m-auto w-full">
              <div className="absolute bg-white-A700 flex flex-col md:gap-10 gap-[118px] inset-x-[0] items-end justify-start mx-auto pb-[326px] top-[0] w-full">
                <div className="bg-blue-A200 h-[94px] w-full"></div>
                <div className="md:h-[482px] h-[485px] sm:h-[558px] relative w-[96%] md:w-full">
                  <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-[96%]">
                    <div className="flex sm:flex-col flex-row gap-[13px] items-start justify-between w-full">
                      <Text
                        className="md:text-5xl text-[73px] text-blue_gray-900 text-center"
                        size="txtInterBold73"
                      >
                        Welcome to
                      </Text>
                      <Img
                        className="h-[456px] md:h-auto sm:mt-0 mt-[26px] object-cover"
                        src="images/img_yellowleaves.png"
                        alt="yellowleaves"
                      />
                    </div>
                  </div>
                  <Img
                    className="absolute h-[68px] left-[0] object-cover top-[14%] w-[41%]"
                    src="images/img_communitytalks.png"
                    alt="communitytalks"
                  />
                  <div className="absolute bottom-[0] h-[63px] left-[12%] w-[17%]">
                    <Img
                      className="h-[63px] m-auto object-cover rounded-[31px] w-full"
                      src="images/img_rectangle6.png"
                      alt="rectangleSix"
                    />
                    <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-3 rounded-[22px]">
                      <Text
                        className="sm:text-[23px] md:text-[25px] text-[27px] text-blue_gray-900 text-center"
                        size="txtInterBold27"
                      >
                        Know More
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <header className="absolute bg-blue-A200 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto top-[0] w-full">
                <Text
                  className="mb-[5px] md:ml-[0] ml-[22px] md:mt-0 mt-[68px] text-[15px] text-white-A700"
                  size="txtInikaBold15"
                >
                  Community Talks
                </Text>
                <div className="flex md:flex-1 flex-col font-inter gap-1.5 items-center justify-start mb-[19px] md:ml-[0] ml-[229px] md:mt-0 mt-8 w-[6%] md:w-full">
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-blue_gray-900"
                    size="txtInterRegular26"
                  >
                    Home
                  </Text>
                  <Line className="bg-blue_gray-900 h-[3px] w-full" />
                </div>
                <Text
                  className="mb-[29px] md:ml-[0] ml-[52px] md:mt-0 mt-8 md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                  size="txtInterRegular26WhiteA700"
                >
                  Domains
                </Text>
                <Text
                  className="mb-[26px] md:ml-[0] ml-[78px] md:mt-0 mt-[35px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                  size="txtInterRegular26WhiteA700"
                >
                  Updates
                </Text>
                <Text
                  className="mb-[29px] md:ml-[0] ml-[73px] md:mt-0 mt-8 md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                  size="txtInterRegular26WhiteA700"
                >
                  Threads
                </Text>
                <Text
                  className="mb-[27px] md:ml-[0] ml-[91px] md:mt-0 mt-[34px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                  size="txtInterRegular26WhiteA700"
                >
                  Library
                </Text>
                <Button
                  className="common-pointer !text-blue_gray-900 cursor-pointer font-inter font-medium leading-[normal] mb-[21px] min-w-[142px] md:ml-[0] ml-[106px] mr-[41px] md:mt-0 mt-7 rounded-[22px] md:text-2xl sm:text-[22px] text-[26px] text-center"
                  onClick={() => navigate("/desktopone")}
                  size="xs"
                >
                  Sign in
                </Button>
              </header>
              <div
                className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col gap-2.5 h-[768px] justify-center p-[63px] md:px-10 sm:px-5 right-[0] w-[63%]"
                style={{ backgroundImage: "url('images/img_group16.png')" }}
              >
                <div className="bg-blue-A100 h-[25px] mr-[565px] mt-[387px] rounded-[108px] w-[28%]"></div>
                <div className="bg-blue-A100 h-[25px] mb-[195px] md:ml-[0] ml-[525px] mr-10 rounded-[108px] w-[28%]"></div>
              </div>
            </div>
            <Text
              className="absolute left-[3%] text-blue-A200 text-center text-xl top-[32%] w-[42%] sm:w-full"
              size="txtInterBold20"
            >
              <>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#39;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </>
            </Text>
            <Img
              className="absolute bottom-[0] h-[592px] left-[0] object-cover w-[23%]"
              src="images/img_plant.png"
              alt="plant"
            />
          </div>
          <div className="bg-blue-100 flex flex-col md:gap-10 gap-[98px] items-center justify-start mt-auto mx-auto p-[131px] md:px-10 sm:px-5 w-full">
            <Text
              className="md:text-5xl text-[73px] text-blue_gray-900 text-center"
              size="txtInterBold73"
            >
              Domains
            </Text>
            <div
              className="bg-cover bg-no-repeat md:h-[363px] sm:h-[441px] h-[517px] mb-14 p-1 relative w-[92%] md:w-full"
              style={{ backgroundImage: "url('images/img_group14.svg')" }}
            >
              <div className="absolute md:h-[307px] h-[342px] sm:h-[385px] left-[1%] top-[8%] w-[64%] md:w-full">
                <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[93%]">
                  <div className="flex flex-col gap-10 justify-start w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 gap-[172px] items-start justify-end md:ml-[0] ml-[63px] w-[90%] md:w-full">
                      <Text
                        className="mb-[3px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 text-center"
                        size="txtInterBold36"
                      >
                        Discussion
                      </Text>
                      <Text
                        className="sm:mt-0 mt-[3px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 text-center"
                        size="txtInterBold36"
                      >
                        Community
                      </Text>
                    </div>
                    <Img
                      className="h-[214px] md:h-auto object-cover w-[51%]"
                      src="images/img_remoteworkmeeting.png"
                      alt="remoteworkmeeti"
                    />
                  </div>
                </div>
                <Img
                  className="absolute bottom-[0] h-[307px] object-cover right-[0] w-[307px]"
                  src="images/img_businessmeeting.png"
                  alt="businessmeeting"
                />
              </div>
              <Text
                className="absolute right-[11%] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 text-center top-[8%]"
                size="txtInterBold36"
              >
                Chat
              </Text>
              <div className="absolute bottom-[9%] flex md:flex-col flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto w-[92%]">
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[241px] text-2xl md:text-[22px] text-center sm:text-xl"
                  shape="round"
                  color="indigo_900"
                >
                  Open Now
                </Button>
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[241px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                  shape="round"
                  color="blue_gray_900"
                >
                  Open Now
                </Button>
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[241px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                  shape="round"
                  color="blue_gray_900"
                >
                  Open Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1024px] sm:h-[1132px] md:h-[979px] max-w-[1404px] mx-auto md:px-5 relative w-full">
          <div className="absolute bg-white-A700 flex flex-col font-inter h-full inset-[0] items-center justify-center m-auto p-[47px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[82px] justify-start mt-[269px] w-[97%] md:w-full">
              <div className="flex flex-col gap-14 items-center justify-start w-full">
                <div className="flex flex-col gap-[15px] items-start justify-start w-[94%] md:w-full">
                  <Text
                    className="ml-1 md:ml-[0] sm:text-[29px] md:text-[31px] text-[33px] text-black-900 text-center"
                    size="txtInterRegular33"
                  >
                    Search
                  </Text>
                  <Line className="bg-black-900 h-px w-full" />
                </div>
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="bg-blue_gray-100_84 h-[111px] rounded-[10px] shadow-bs1 w-[46%]"></div>
                  <div className="bg-blue_gray-100_63 h-[111px] rounded-[10px] shadow-bs1 w-[46%]"></div>
                </div>
              </div>
              <div className="bg-blue_gray-100 flex flex-col items-center justify-start ml-4 md:ml-[0] mr-[359px] py-[62px] rounded-[10px] w-[71%] md:w-full">
                <Line className="bg-black-900 h-px mb-[227px] w-full" />
              </div>
            </div>
          </div>
          <Button
            className="absolute bottom-[26%] cursor-pointer font-almarai font-bold min-w-[366px] right-[0] rounded-[10px] text-[22px] text-center sm:text-lg md:text-xl"
            shape="round"
            color="black_900"
            size="md"
          >
            Ask the community!
          </Button>
        </div>
        <div className="font-hammersmithone md:h-[2254px] sm:h-[476px] h-[509px] md:px-5 relative w-full">
          <div className="absolute bg-gradient  flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-start mx-auto p-[21px] sm:px-5 top-[0] w-full">
            <div className="flex md:flex-1 flex-col font-hammersmithone gap-[11px] items-start justify-start md:ml-[0] ml-[42px] md:mt-0 mt-[25px] w-[18%] md:w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700 tracking-[0.28px]"
                size="txtHammersmithOneRegular28"
              >
                Contact Us
              </Text>
              <div className="bg-white-A700_7f flex flex-row items-start justify-between p-0.5 rounded-md w-full">
                <Text
                  className="ml-[7px] text-center text-pink-900 text-xs tracking-[0.12px]"
                  size="txtHammersmithOneRegular12"
                >
                  Name
                </Text>
                <Img
                  className="h-[18px] md:h-auto mr-1 object-cover w-[17px]"
                  src="images/img_user_18x17.png"
                  alt="user"
                />
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[113px] items-center justify-start p-[3px] w-full"
                style={{ backgroundImage: "url('images/img_group15.svg')" }}
              >
                <div className="flex flex-col gap-[23px] items-start justify-start mb-[53px] w-[98%] md:w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="text-center text-pink-900 text-xs tracking-[0.12px]"
                      size="txtHammersmithOneRegular12"
                    >
                      E-mail
                    </Text>
                    <Img
                      className="h-[15px] md:h-auto object-cover"
                      src="images/img_email.png"
                      alt="email_One"
                    />
                  </div>
                  <Text
                    className="text-center text-pink-900 text-xs tracking-[0.12px]"
                    size="txtHammersmithOneRegular12"
                  >
                    Write your message here
                  </Text>
                </div>
              </div>
              <Text
                className="bg-white-A700 h-[21px] justify-center pb-1 px-2.5 rounded-[10px] text-pink-900 text-xs tracking-[0.12px] w-[61px]"
                size="txtHammersmithOneRegular12"
              >
                Submit
              </Text>
            </div>
            <Line className="bg-indigo-900_51 h-[340px] md:h-px mb-[94px] md:ml-[0] ml-[93px] md:w-full w-px" />
            <div className="flex md:flex-1 flex-col font-helvetica gap-5 items-start justify-start md:ml-[0] ml-[45px] md:mt-0 mt-7 w-[11%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtHelveticaBold24"
              >
                Useful Links
              </Text>
              <div className="flex flex-col font-inter items-start justify-start">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtInterRegular24"
                >
                  About
                </Text>
                <Text
                  className="mt-[23px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtInterRegular24"
                >
                  News
                </Text>
                <Text
                  className="mt-[17px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtInterRegular24"
                >
                  Partners
                </Text>
                <Text
                  className="mt-5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtInterRegular24"
                >
                  Team
                </Text>
                <Text
                  className="mt-3.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtInterRegular24"
                >
                  Contacts
                </Text>
              </div>
            </div>
            <Line className="bg-indigo-900_56 h-[340px] md:h-px mb-[91px] md:ml-[0] ml-[156px] md:mt-0 mt-[3px] md:w-full w-px" />
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[51px] md:mt-0 mt-[27px]">
              <Text
                className="ml-1 md:ml-[0] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtAlmaraiBold24"
              >
                Help?
              </Text>
              <Text
                className="mt-[19px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtInterRegular24"
              >
                FAQ
              </Text>
              <a
                href="javascript:"
                className="mt-[22px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              >
                <Text size="txtInterRegular24">Terms & Conditions</Text>
              </a>
              <Text
                className="mt-[19px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtInterRegular24"
              >
                Reporting
              </Text>
              <Text
                className="mt-[17px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtInterRegular24"
              >
                Documentation
              </Text>
              <a
                href="javascript:"
                className="mt-[17px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              >
                <Text size="txtInterRegular24">Privacy</Text>
              </a>
            </div>
            <Line className="bg-indigo-900_56 h-[340px] md:h-px mb-[94px] md:ml-[0] ml-[81px] md:w-full w-px" />
            <Text
              className="md:ml-[0] ml-[46px] md:mt-0 mt-[25px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtAlmaraiBold24"
            >
              Recent Post
            </Text>
          </div>
          <div className="absolute bg-blue_gray-900 bottom-[0] flex md:flex-col flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto p-[11px] w-full">
            <div className="flex md:flex-1 sm:flex-col flex-row gap-2 items-start justify-center md:ml-[0] ml-[213px] w-[31%] md:w-full">
              <Img
                className="h-[30px] md:h-auto object-cover w-[29px] sm:w-full"
                src="images/img_copyright.png"
                alt="copyright"
              />
              <Text
                className="sm:mt-0 mt-0.5 md:text-2xl sm:text-[22px] text-[26px] text-deep_orange-100 tracking-[0.26px]"
                size="txtHammersmithOneRegular26"
              >
                All Copyrights reserved || 2023
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start mb-[34px] mr-7 w-1/5 md:w-full">
              <div className="flex flex-col justify-start w-full">
                <Line className="bg-indigo-900 h-px w-full" />
                <div className="flex flex-row items-center justify-start ml-1.5 md:ml-[0] mt-1 w-[79%] md:w-full">
                  <Img
                    className="h-[53px] md:h-auto object-cover w-[53px]"
                    src="images/img_facebook.png"
                    alt="facebook"
                  />
                  <Img
                    className="h-[53px] md:h-auto ml-[5px] object-cover w-[53px]"
                    src="images/img_linkedincircled.png"
                    alt="linkedincircled"
                  />
                  <Img
                    className="h-[47px] md:h-auto ml-1 object-cover w-[24%]"
                    src="images/img_instagramcircle.png"
                    alt="instagramcircle"
                  />
                  <div className="bg-deep_orange-100_01 flex flex-col h-[42px] items-center justify-start ml-2.5 my-[5px] pb-0.5 px-0.5 rounded-[50%] w-[42px]">
                    <Img
                      className="h-10 md:h-auto object-cover w-[87%]"
                      src="images/img_youtube.png"
                      alt="youtube"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTwoPage;
