import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import MasukHeader from "components/MasukHeader";

const MasukPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-monasans sm:gap-10 md:gap-10 gap-[139px] items-center justify-start mx-auto w-full">
        <MasukHeader className="bg-gray-50 flex sm:flex-col flex-row md:gap-10 h-[105px] md:h-auto items-center justify-between max-w-[1440px] md:px-10 px-40 sm:px-5 w-full" />
        <div className="md:h-[587px] h-[780px] md:px-5 relative w-full">
          <Img
            className="absolute bottom-[0] h-[587px] inset-x-[0] mx-auto object-cover md:w-full"
            src="images/img_vector1.png"
            alt="vectorOne"
          />
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-[39%]">
            <div className="bg-white-A700 flex flex-col items-center justify-center p-20 md:px-10 sm:px-5 rounded-[10px] shadow-bs w-full">
              <div className="flex flex-col items-center justify-start my-0.5 w-full">
                <div className="flex flex-col gap-9 items-center justify-start w-auto sm:w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.72px] w-auto"
                    size="txtMonaSansBold36Black900"
                  >
                    Selamat Datang!
                  </Text>
                  <div className="flex flex-col gap-9 items-center justify-start w-full">
                    <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-gray-900 text-xl tracking-[-0.40px] w-auto"
                          size="txtMonaSansBold20Gray900"
                        >
                          Email
                        </Text>
                        <Input
                          name="frameEleven"
                          placeholder="Email anda"
                          className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                          wrapClassName="w-full"
                          type="email"
                          color="gray_50"
                          size="md"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-gray-900 text-xl tracking-[-0.40px] w-auto"
                          size="txtMonaSansBold20Gray900"
                        >
                          Password
                        </Text>
                        <Input
                          name="frameEleven_One"
                          placeholder="Password anda"
                          className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                          wrapClassName="w-full"
                          type="password"
                          color="gray_50"
                          size="md"
                        ></Input>
                      </div>
                    </div>
                    <Button
                      className="common-pointer !text-white-A700 cursor-pointer font-bold leading-[normal] text-center text-lg w-[400px]"
                      onClick={() => navigate("/bengkelprofile")}
                      shape="round"
                      color="red_600"
                      size="md"
                      variant="fill"
                    >
                      Masuk
                    </Button>
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

export default MasukPage;
