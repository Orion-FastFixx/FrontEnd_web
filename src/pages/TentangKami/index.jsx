import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const TentangKamiPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-monasans justify-start mx-auto pb-[1289px] w-full">
        <div className="flex flex-col items-center w-full">
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
              <div className="flex flex-col items-center justify-center w-auto">
                <Text
                  className="text-gray-900 text-lg w-auto"
                  size="txtMonaSansRegular18"
                >
                  Tentang Kami
                </Text>
              </div>
              <Button
                className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[60px] text-center text-gray-900 text-lg"
                onClick={() => navigate("/kontak")}
                size="xs"
              >
                Kontak
              </Button>
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
          <div className="flex flex-col gap-6 items-center justify-start max-w-[930px] mt-16 mx-auto md:px-5 w-full">
            <Text
              className="md:text-5xl text-[64px] text-black-900 tracking-[-1.28px] w-auto"
              size="txtMonaSansBold64"
            >
              <span className="text-black-900 font-monasans text-left font-bold">
                Kami adalah{" "}
              </span>
              <span className="text-red-600 font-monasans text-left font-bold">
                Fastfixx
              </span>
            </Text>
            <Text
              className="max-w-[930px] md:max-w-full text-2xl md:text-[22px] text-center text-gray-600 sm:text-xl tracking-[-0.48px]"
              size="txtMonaSansBold24"
            >
              kami adalah solusi terpercaya untuk mitra bengkel yang ingin
              meningkatkan bisnisnya dan pengendara yang membutuhkan bantuan
              cepat di jalan.
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1120px] mt-[97px] mx-auto md:px-5 rounded-[10px] shadow-bs w-full">
            <Img
              className="h-[455px] md:h-auto object-cover rounded-[10px] w-full"
              src="images/img_unsplash1dzykzufy.png"
              alt="unsplash1dzykzu"
            />
          </div>
        </div>
        <div className="flex flex-col items-end md:px-10 sm:px-5 px-[72px] w-full">
          <div className="bg-gray-900 flex flex-col items-start justify-start p-7 md:px-5 rounded-[42px] w-auto">
            <Img
              className="h-[29px] w-8"
              src="images/img_user.svg"
              alt="user"
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-2 md:px-10 sm:px-5 px-[200px] w-full">
          <div className="flex flex-col gap-9 items-end justify-start max-w-[1013px] mx-auto w-full">
            <div className="flex flex-col items-start justify-start max-w-[1013px] w-full">
              <div className="flex flex-col gap-6 items-center justify-start max-w-[1005px] w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-0.96px] w-auto"
                  size="txtMonaSansBold48Black900"
                >
                  Visi
                </Text>
                <Text
                  className="max-w-[1004px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-800 text-justify tracking-[-0.56px]"
                  size="txtMonaSansMedium28"
                >
                  menjadi mitra utama bagi bengkel-bengkel terkemuka dan menjadi
                  aplikasi yang sangat dibutuhkan oleh pengendara di seluruh
                  Indonesia.{" "}
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-center justify-start w-auto md:w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-0.96px] w-auto"
                size="txtMonaSansBold48Black900"
              >
                Misi
              </Text>
              <Text
                className="max-w-[1013px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-800 text-justify tracking-[-0.56px]"
                size="txtMonaSansMedium28"
              >
                Menghubungkan mitra bengkel dan montir individual dengan
                pelanggan, memberdayakan pertumbuhan bisnis, mengutamakan
                kualitas layanan dan kepercayaan, terus berinovasi, mendukung
                komunitas, berkomitmen pada keberlanjutan lingkungan, dan
                memprioritaskan kepuasan pelanggan.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TentangKamiPage;
