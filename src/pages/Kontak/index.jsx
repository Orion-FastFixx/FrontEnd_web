import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Footer from "components/Footer";

const KontakPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-monasans items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <header className="bg-gray-50 flex md:flex-col md:gap-10 h-[105px] md:h-auto items-center justify-between px-40 md:px-5 w-full">
            <Img
              className="h-[50px] w-[140px]"
              src="images/img_layerx00201.svg"
              alt="layerx00201"
            />
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 items-center justify-center w-auto sm:w-full">
              <Button
                className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[72px] text-center text-gray-900 text-lg"
                onClick={() => navigate("/beranda")}
                size="xs"
              >
                Beranda
              </Button>
              <Button
                className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[116px] text-center text-gray-900 text-lg"
                onClick={() => navigate("/tentangkami")}
                size="xs"
              >
                Tentang Kami
              </Button>
              <div className="flex flex-col items-center justify-center w-auto">
                <Text
                  className="text-gray-900 text-lg w-auto"
                  size="txtMonaSansRegular18"
                >
                  Kontak
                </Text>
              </div>
              <Button
                className="border border-red-600 border-solid cursor-pointer font-bold leading-[normal] min-w-[117px] text-center text-lg"
                shape="round"
                color="gray_50"
                size="md"
                variant="fill"
              >
                Masuk
              </Button>
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[106px] text-center text-lg"
                shape="round"
                color="red_600"
                size="md"
                variant="fill"
              >
                Daftar
              </Button>
            </div>
          </header>
          <div className="bg-gray-900 flex md:flex-col flex-row md:gap-10 items-center justify-between pt-[127px] md:px-10 sm:px-5 px-[127px] w-full">
            <div className="flex sm:flex-1 flex-col gap-3 items-start justify-center ml-9 md:ml-[0] w-auto sm:w-full">
              <Text
                className="md:text-5xl text-[64px] text-gray-50 tracking-[-1.28px] w-auto"
                size="txtMonaSansBold64Gray50"
              >
                Kontak kami
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-gray-200 sm:text-xl tracking-[-0.48px] w-auto"
                size="txtMonaSansBold24Gray200"
              >
                Kami ada disini untukmu.
              </Text>
            </div>
            <Img
              className="h-[260px] md:h-auto mr-[35px] object-cover rounded-[10px]"
              src="images/img_unsplashvdxmsixn6m.png"
              alt="unsplashvdxmsix"
            />
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1038px] mt-[101px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-[25px] items-start justify-start w-auto md:w-full">
              <div className="flex flex-col gap-6 items-start justify-center max-w-[780px] w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900 tracking-[-0.96px] w-auto"
                  size="txtMonaSansBold48"
                >
                  Hubungi kami
                </Text>
                <Text
                  className="max-w-[780px] md:max-w-full text-2xl md:text-[22px] text-gray-600 text-justify sm:text-xl tracking-[-0.48px]"
                  size="txtMonaSansBold24"
                >
                  Jangan ragu untuk mengirimkan pertanyaan, umpan balik, dan
                  saran apa pun yang mungkin Anda miliki.
                </Text>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-auto"
                    size="txtMonaSansBold24Gray900"
                  >
                    Nama
                  </Text>
                  <Text
                    className="bg-gray-50 justify-center sm:px-5 px-[35px] py-[23px] rounded-[10px] text-gray-600 text-lg text-shadow-ts w-auto"
                    size="txtMonaSansRegular18Gray600"
                  >
                    Nama anda
                  </Text>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-auto"
                    size="txtMonaSansBold24Gray900"
                  >
                    Email
                  </Text>
                  <Text
                    className="bg-gray-50 justify-center sm:px-5 px-[35px] py-[23px] rounded-[10px] text-gray-600 text-lg text-shadow-ts w-auto"
                    size="txtMonaSansRegular18Gray600"
                  >
                    Email anda
                  </Text>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-auto"
                    size="txtMonaSansBold24Gray900"
                  >
                    Pesan
                  </Text>
                  <div className="bg-gray-50 flex flex-col items-center justify-center md:px-10 px-12 sm:px-5 py-6 rounded-[10px] shadow-bs w-auto md:w-full">
                    <Text
                      className="text-gray-600 text-lg w-[147px]"
                      size="txtMonaSansRegular18Gray600"
                    >
                      Pesan anda disini
                    </Text>
                  </div>
                </div>
              </div>
              <Button
                className="cursor-pointer font-bold leading-[normal] max-w-[779px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.56px] w-full"
                shape="round"
                color="red_600"
                size="xl"
                variant="fill"
              >
                Kirim Pesan
              </Button>
            </div>
            <div className="bg-gray-900 flex flex-col items-start justify-start mb-[452px] md:mt-0 mt-[284px] p-7 sm:px-5 rounded-[42px] w-auto">
              <Img
                className="h-[29px] w-8"
                src="images/img_user.svg"
                alt="user"
              />
            </div>
          </div>
          <Footer className="bg-gray-50 flex h-[186px] md:h-auto items-center justify-between mt-[90px] px-40 md:px-5 py-[61px] w-full" />
        </div>
      </div>
    </>
  );
};

export default KontakPage;
