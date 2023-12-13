import React,{ useEffect }  from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Footer from "components/Footer";







const BerandaPage = () => {
  const navigate = useNavigate();
 
  useEffect(() => {
    // Define the chatbot options
    window.watsonAssistantChatOptions = {
      integrationID: "a8ecfb20-9063-4367-ad80-409a62dbfc81",
      region: "us-south",
      serviceInstanceID: "60ec2b36-3ebe-470f-bcd8-e4a556eb3f4d",
      onLoad: async (instance) => { await instance.render(); }
    };

    // Dynamically load the chatbot script
    const script = document.createElement('script');
    script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js"
    document.head.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);
    return (
    
    <>
      <div className="bg-gray-50 flex flex-col font-monasans items-center justify-start mx-auto w-full">
        <header className="bg-gray-50 flex md:flex-col md:gap-10 h-[105px] md:h-auto items-center justify-between px-40 md:px-5 w-full">
          <Img
            className="h-[50px] w-[140px]"
            src="images/img_layerx00201.svg"
            alt="layerx00201"
          />
          <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 items-center justify-center w-auto sm:w-full">
            <div className="flex flex-col items-center justify-center w-auto">
              <Text
                className="text-red-600  text-xl w-auto"
                size="txtMonaSansRegular18"
              >
                Beranda
              </Text>
            </div>
            <Button
              className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[116px] text-center text-gray-900 text-lg"
              onClick={() => navigate("/tentangkami")}
              size="xs"
            >
              Tentang Kami
            </Button>
            <Button
              className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[60px] text-center text-gray-900 text-lg"
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
        <div className="sm:h-[2035px] h-[2283px] md:h-[2336px] md:px-5 relative w-full">
          <div className="absolute md:h-[2035px] h-[2161px] inset-x-[0] mx-auto top-[0] w-full">
            <div className="md:h-[2035px] h-[2161px] m-auto w-full">
              <Img
                className="absolute bottom-[0] h-[2035px] inset-x-[0] mx-auto object-cover md:w-full"
                src="images/img_blob.png"
                alt="blob"
              />
              <div className="absolute bg-gray-50 flex flex-col inset-x-[0] items-center justify-start mx-auto p-[97px] md:px-10 sm:px-5 top-[0] w-full">
                <div className="flex flex-col items-center justify-start mb-[422px] w-[66%] md:w-full">
                  <div className="flex flex-col gap-6 h-[126px] md:h-auto items-center justify-center max-w-[817px] w-full">
                    <Text
                      className="md:text-5xl text-[64px] text-black-900 tracking-[-1.28px] w-auto"
                      size="txtMonaSansBold64"
                    >
                      <span className="text-gray-900 font-monasans text-left font-bold">
                        Selamat datang di
                      </span>
                      <span className="text-black-900 font-monasans text-left font-bold">
                        {" "}
                      </span>
                      <span className="text-red-600 font-monasans text-left font-bold">
                        Fastfixx
                      </span>
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[-0.48px] w-auto"
                      size="txtMonaSansBold24"
                    >
                      Berkembang Bersama, Raih Kesuksesan Bersama!
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[791px] inset-x-[0] mx-auto object-cover rounded-[10px] top-[14%] w-[78%]"
              src="images/img_dashboardbengkel.png"
              alt="dashboardbengke"
            />
          </div>
          <div className="absolute bg-gray-50 bottom-[0] flex flex-col inset-x-[0] items-end justify-start mx-auto p-7 sm:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-24 justify-start mb-[116px] mr-11 w-[88%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[62px] w-[87%] md:w-full">
                  <div className="flex flex-col md:gap-10 gap-[79px] justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[190px] text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900 tracking-[-0.96px]"
                      size="txtMonaSansBold48"
                    >
                      Kenapa bergabung dengan kami
                    </Text>
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                      <div className="flex md:flex-1 flex-col items-center justify-start rounded-[10px] shadow-bs w-[35%] md:w-full">
                        <Img
                          className="h-[382px] md:h-auto object-cover rounded-[10px] w-full"
                          src="images/img_unsplashy5bvrlccx8k.png"
                          alt="unsplashy5bvrlc"
                        />
                      </div>
                      <div className="flex sm:flex-1 flex-col md:gap-10 gap-16 items-start justify-start px-5 w-[590px] sm:w-full">
                        <div className="flex flex-col gap-3 items-start justify-start w-[555px] sm:w-full">
                          <Text
                            className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-auto"
                            size="txtMonaSansBold36"
                          >
                            Banyaknya Permintaan Layanan
                          </Text>
                          <Text
                            className="text-gray-600 text-justify text-xl tracking-[-0.40px] w-auto"
                            size="txtMonaSansBold20"
                          >
                            Jaringan kami membawa banyak pelanggan setiap hari.
                          </Text>
                        </div>
                        <div className="flex flex-col gap-3 items-start justify-start w-[570px] sm:w-full">
                          <Text
                            className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-auto"
                            size="txtMonaSansBold36"
                          >
                            Tingkatkan Eksposur Bisnis
                          </Text>
                          <Text
                            className="max-w-[570px] md:max-w-full text-gray-600 text-justify text-xl tracking-[-0.40px]"
                            size="txtMonaSansBold20"
                          >
                            Dapatkan eksposur yang lebih tinggi dan tingkatkan
                            reputasi bisnis Anda.
                          </Text>
                        </div>
                        <div className="flex flex-col gap-3 items-start justify-start w-[570px] sm:w-full">
                          <Text
                            className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-auto"
                            size="txtMonaSansBold36"
                          >
                            Manajemen yang Mudah
                          </Text>
                          <Text
                            className="max-w-[570px] md:max-w-full text-gray-600 text-justify text-xl tracking-[-0.40px]"
                            size="txtMonaSansBold20"
                          >
                            Pantau jadwal dan terima permintaan layanan dengan
                            cepat.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
  




              </div>
              <div className="flex flex-col md:gap-10 gap-16 items-center justify-start md:ml-[0] ml-[168px] w-auto md:w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900 tracking-[-0.96px] w-auto"
                  size="txtMonaSansBold48"
                >
                  Apa yang dikatakan mitra kami
                </Text>
                <div className="flex flex-col md:gap-10 gap-16 items-start justify-start max-w-[782px] w-full">
                  <Text
                    className="text-gray-900 text-justify text-xl"
                    size="txtMonaSansRegular20"
                  >
                    <>
                      Bergabung dengan Fastfixx adalah keputusan yang mengubah
                      hidup saya. Permintaan layanan terus mengalir, dan saya
                      mendapat banyak pelanggan baru setiap minggu. Platform ini
                      membuat bisnis saya berkembang dengan cepat dan memberikan
                      eksposur yang lebih tinggi. <br />- Rudi Montir
                    </>
                  </Text>
                  <Text
                    className="text-gray-900 text-justify text-xl"
                    size="txtMonaSansRegular20"
                  >
                    <>
                      Kami sangat senang menjadi bagian dari Fastfixx. Dengan
                      bantuan platform ini, kami berhasil meningkatkan eksposur
                      bisnis kami secara signifikan. Kami mendapat banyak
                      pelanggan baru dan ulasan positif.
                      <br />- Bengkel Inovatif
                    </>
                  </Text>
                  <Text
                    className="text-gray-900 text-justify text-xl"
                    size="txtMonaSansRegular20"
                  >
                    <>
                      Sebagai pemilik bengkel kecil, Fastfixx membantu saya
                      untuk bersaing di pasar yang kompetitif. Saya sangat
                      terkesan dengan banyaknya permintaan layanan yang saya
                      terima setiap hari.
                      <br />- Tina Auto Service
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 flex flex-col items-end justify-end p-[70px] md:px-10 sm:px-5 w-full">
          <div className="md:h-[164px] h-[342px] mr-[75px] relative w-[1056px] md:w-full">
            <div className="absolute bg-gray-900 flex flex-col gap-6 h-full inset-y-[0] items-start justify-center left-[0] max-w-[962px] my-auto w-full">
              <Text
                className="max-w-[876px] md:max-w-full text-2xl md:text-[22px] text-gray-200 sm:text-xl tracking-[-0.48px]"
                size="txtMonaSansBold24Gray200"
              >
                Mulai petualangan Anda bersama kami! Bergabung sekarang untuk
                menjangkau lebih banyak pelanggan dan mengembangkan bisnis Anda.
              </Text>
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[337px] sm:text-2xl md:text-[26px] text-[28px] text-center tracking-[-0.56px]"
                shape="round"
                color="red_600"
                size="xl"
                variant="fill"
                onClick={() => navigate("/daftar")}
              >
                Gabung Sekarang
              </Button>
            </div>
            <Text
              className="absolute inset-x-[0] max-w-[1056px] md:max-w-full mx-auto md:text-5xl text-[50px] text-gray-50 top-[0] tracking-[-1.28px]"
              size="txtMonaSansBold64Gray50"
            >
              Bergabunglah dengan FastFixx Hari Ini!
            </Text>
          </div>
        </div>
        <Footer className="bg-gray-50 flex h-[186px] md:h-auto items-center justify-between px-40 md:px-5 py-[61px] w-full" />
       {/* <Chatbox/> */}
       
   
      </div>

    </>
  );
  
};

export default BerandaPage;
