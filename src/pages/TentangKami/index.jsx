import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Footer from "components/Footer";

const TeamMember = ({ name, role, imageSrc }) => (
  <div className="w-[407px] h-[90px] relative">
    <div className="h-[120px] p-3 bg-gray-50 rounded-[10px] justify-start items-center gap-8 inline-flex">
      <div className="w-24 h-24 bg-gray-700 rounded-[50px] shadow">
        <img
          className="w-full h-full object-cover rounded-[50px]"
          src={imageSrc}
          alt={`Foto Profil ${name}`}
        />
      </div>
      <div className="w-[249px] flex-col justify-start items-start gap-2 inline-flex">
        <div className="w-[249px] text-gray-900 text-2xl font-bold font-['Roboto']">{name}</div>
        <div className="w-[238px] text-gray-500 text-xl font-normal font-['Mona Sans']">{role}</div>
      </div>
    </div>
  </div>
);
const TentangKamiPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-monasans justify-start mx-auto pb-[1289px] w-full">
      <header className="fixed top-0 z-50 bg-gray-50 flex flex-row md:gap-10 h-fit px-40 py-5 items-center justify-between md:px-45 w-full border-2 shadow shadow-md">
          <Img
            className="h-[50px] w-[140px]"
            src="images/img_layerx00201.svg"
            alt="layerx00201"
          />
          <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 items-center justify-center w-auto sm:w-full">
            <div className="flex flex-col items-center justify-center w-auto">
              <Button
                className="text-md w-auto cursor-pointer bg-tranparent"
                size="txtMonaSansRegular18"
                onClick={() => navigate("/beranda")}
              >
                Beranda
              </Button>
            </div>
            <Text
              className="text-red-600 common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[116px] text-center text-gray-900 hover:text-red-600 text-md"
              onClick={() => navigate("/tentangkami")}
              size="xs"
            >
              Tentang Kami
            </Text>
            <Button
              className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[60px] text-center text-gray-900 text-md hover:text-red-600"
              onClick={() => navigate("/kontak")}
              size="xs"
            >
              Kontak
            </Button>
            {/* <Button
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
            </Button> */}
          </div>
        </header>
          <div className="flex flex-col gap-6 items-center justify-start max-w-[930px] mt-16 mx-auto md:px-5 w-full">
            <Text
              className="text-black-900 tracking-[-1.28px] w-auto"
              size="txtMonaSansBold64"
            >
              <span className="text-black-900 font-monasans text-left font-bold text-3xl">
                Kami adalah{" "}
              </span>
              <span className="text-red-600 font-monasans text-left font-bold text-3xl">
                Fastfixx
              </span>
            </Text>
            <Text
              className="max-w-[930px] md:max-w-full text-lg md:text-[22px] text-center text-gray-600 sm:text-xl tracking-[-0.48px]"
              size="txtMonaSansBold24"
            >
              kami  solusi terpercaya untuk mitra bengkel yang ingin
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
        <div className="flex flex-col items-end md:px-10 sm:px-5 px-[72px] w-full">
       
        </div>
        <div className="flex flex-col items-center mt-32 md:px-10 sm:px-5 px-[200px] w-full">
          <div className="flex flex-col gap-9 items-end justify-start max-w-[1013px] mx-auto w-full">
            <div className="flex flex-col items-start justify-start max-w-[1013px] w-full">
              <div className="flex flex-col gap-6 items-center justify-start max-w-[1005px] w-full">
                <Text
                  className="text-3xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-0.96px] w-auto"
                  size="txtMonaSansBold48Black900"
                >
                  Visi
                </Text>
                <Text
                  className="max-w-[1004px] md:max-w-full text-lg text-blue_gray-800 text-justify tracking-[-0.56px]"
                  size="txtMonaSansMedium28"
                >
                  Menjadi mitra utama bagi bengkel-bengkel terkemuka dan menjadi
                  aplikasi yang sangat dibutuhkan oleh pengendara di seluruh
                  Indonesia.{" "}
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-7 items-center justify-start w-auto md:w-full">
              <Text
                className="text-3xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-0.96px] w-auto"
                size="txtMonaSansBold48Black900"
              >
                Misi
              </Text>
              <Text
                className="max-w-[1013px] md:max-w-full text-lg text-blue_gray-800 text-justify tracking-[-0.56px]"
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
          <div className="w-[910px] h-[10px] flex-col justify-center items-center gap-16 mx-auto mt-16 mb-0">
        <h1 className="text-3xl font-bold mb-8 text-center">Tim Kami</h1>
  <div className="flex justify-center items-center gap-16">
    {/* Left Column */}
    <div className="flex-col mr-4">
      <TeamMember name="Adzhimatinur Azzahra" role="Project Manager" imageSrc="public/images/zahra.PNG" />
      <br />
      <TeamMember name="Nurul Fatma Putri Lazira" role="Scrum Master & Hacker" imageSrc="public/images/rul.PNG" />
      <br />
      <TeamMember name="Muhammad Ikram Jundulloh" role="Hacker" imageSrc="public/images/gw.PNG" />
      <br />
      <TeamMember name="Rayhan Illyas A" role=" Hacker" imageSrc="public/images/ray.PNG" />
      <br />
      <TeamMember name="Raynaldi Nugroho" role="Hacker" imageSrc="public/images/rey.PNG" />
      <br />
      <TeamMember name="Fikry Azraq Arista" role="Hipster" imageSrc="public/images/fikri.PNG" />
      <br />
      <TeamMember name="Astrid Denisa" role=" Hipster" imageSrc="public/images/strid.PNG" />
      {/* ... Add more team members for the left column here ... */}
    </div>
    {/* Right Column */}
    <div className="flex-col ml-4">
      <TeamMember name="Cahya Kelvin" role="Scrum Master & Hipster" imageSrc="public/images/kelvin.PNG" />
      <br />
      <TeamMember name="Aminah Sebriyanti "role="Hacker" imageSrc="public/images/minah.jpeg" />
      <br />
      <TeamMember name="Prayoga Sungkowo" role="Hacker " imageSrc="public/images/yoga.jpeg" />
      <br />
      <TeamMember name="Fatimatuzzahra" role="Hipster" imageSrc="public/images/fat.PNG" />
      <br />
      <TeamMember name="Febri Septio" role="Hacker" imageSrc="public/images/feb.PNG" />
      <br />
      <TeamMember name="Rifqi Nugraha" role=" Hipster" imageSrc="public/images/fiq.PNG" />
      <br />
      <TeamMember imageSrc="public/images/put.PNG" />
      
      {/* ... Add more team members for the right column here ... */}
    </div>
  </div>
</div>
        </div>
</div>
<Footer className="bg-gray-50 flex h-[100px] md:h-auto items-center justify-between px-40 md:px-5 py-4 w-full mt-4" />


    </>
  );
};

export default TentangKamiPage;
