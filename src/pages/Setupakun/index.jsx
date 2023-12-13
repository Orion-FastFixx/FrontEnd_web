import React, { useState } from "react";

import { Button, Img, Input, Text } from "components";
import { Navigate, useNavigate } from "react-router-dom";
const SetupakunPage = () => {
  const [selectedJenis, setSelectedJenis] = useState(null);
const navigate = useNavigate()
  const handleJenisButtonClick = (jenis) => {
    setSelectedJenis(jenis === selectedJenis ? null : jenis);
  };

  return (
    <>
      <div className="bg-gray-50 font-monasans h-[1024px] mx-auto pt-[132px] relative w-full">
        <Img
          className="absolute bottom-[0] h-[587px] inset-x-[0] mx-auto object-cover md:w-full"
          src="images/img_vector1.png"
          alt="vectorOne"
        />
        <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[72px] md:px-5 rounded-[10px] shadow-bs w-[39%]">
          <div className="flex flex-col gap-9 items-center justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-3 items-center justify-start w-auto">
              <Img
                className="h-[116px] md:h-auto rounded-[50%] w-[116px]"
                src="images/img_ellipse2.png"
                alt="ellipseTwo"
              />
              <Button
                className="!text-gray-900 cursor-pointer leading-[normal] min-w-[175px] shadow-bs text-base text-center"
                shape="round"
                color="gray_50"
                size="sm"
                variant="fill"
              >
                Upload foto profil
              </Button>
            </div>
            <div className="flex flex-col gap-9 items-center justify-start w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-gray-900 text-xl tracking-[-0.40px] w-auto"
                    size="txtMonaSansBold20Gray900"
                  >
                    Jenis
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-[29px] items-start justify-start w-auto sm:w-full">
                    <Button
                      className={`cursor-pointer leading-[normal] min-w-[175px] shadow-bs text-base text-center ${
                        selectedJenis === "mitra" ? "bg-red-600" : "bg-gray-50"
                      }`}
                      shape="round"
                      color={selectedJenis === "mitra" ? "red_600" : "gray_50"}
                      size="lg"
                      variant="fill"
                      onClick={() => handleJenisButtonClick("mitra")}
                      
                    >
                      Mitra Bengkel
                    </Button>
                    <Button
                      className={`!text-gray-900 cursor-pointer leading-[normal] min-w-[196px] shadow-bs text-base text-center ${
                        selectedJenis === "montir" ? "bg-red-600" : "bg-gray-50"
                      }`}
                      shape="round"
                      color={selectedJenis === "montir" ? "red_600" : "gray_50"}
                      size="lg"
                      variant="fill"
                      onClick={() => handleJenisButtonClick("montir")}
                    >
                      Montir Individual
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-gray-900 text-xl tracking-[-0.40px] w-auto"
                    size="txtMonaSansBold20Gray900"
                  >
                    Nama
                  </Text>
                  <Input
                    name="frameEleven"
                    placeholder="Bengkel Mitra Raya"
                    className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                    wrapClassName="w-full"
                    color="gray_50"
                    size="md"
                  ></Input>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-gray-900 text-xl tracking-[-0.40px] w-auto"
                    size="txtMonaSansBold20Gray900"
                  >
                    No Telp
                  </Text>
                  <Input
                    name="email"
                    placeholder="mitraraya.contact@gmail.com"
                    className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                    wrapClassName="w-full"
                    type="email"
                    color="gray_50"
                    size="md"
                  ></Input>
                </div>
              </div>
              <Button
                className="!text-white-A700 cursor-pointer font-bold h-[47px] leading-[normal] text-center text-lg w-[400px]"
                shape="round"
                color="red_600"
                size="md"
                variant="fill"
                onClick={() => navigate("/masuk")}
              >
                Selanjutnya
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetupakunPage;
