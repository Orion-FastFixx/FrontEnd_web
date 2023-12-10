import React from "react";
import { Link } from "react-router-dom";
import { Img, Input, Line, Text } from "components";
import NavbarDashboard from "components/NavbarDashboard";

const MontirProfil = () => {
  return (
    <>
      <div className="flex">
        {/* Sidebar */}
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-white h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
          <div className="mb-2 p-4">
            <Img
              className="h-[75px] md:ml-[0] ml-[13px]"
              src="images/img_layerx00201.svg"
              alt="layerx00201"
            />
          </div>
          <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-white">
            {/* Navigasi Profile */}
            <Link to="/montirprofil" className="nav-link">
              <div
                role="button"
                tabIndex={0}
                className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-red-500 hover:bg-opacity-80 focus:bg-red-500 focus:bg-opacity-80 active:bg-red-500 active:bg-opacity-80 hover:text-white focus:text-white active:text-white outline-none"
              >
                <div className="h-11 mr-6 w-11 bg-gray-50 shadow-bs p-3 rounded-[10px]">
                  <Img
                    className="h-5 my-auto"
                    src="images/img_lock.svg"
                    alt="lock"
                  />
                </div>
                Profile
              </div>
            </Link>

            {/* Navigasi Pesanan */}
            <Link to="/montirpesanan" className="nav-link">
              <div
                role="button"
                tabIndex={0}
                className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-red-500 hover:bg-opacity-80 focus:bg-red-500 focus:bg-opacity-80 active:bg-red-500 active:bg-opacity-80 hover:text-white focus:text-white active:text-white outline-none"
              >
                <div className="h-11 mr-6 w-11 bg-gray-50 shadow-bs p-[13px] rounded-[10px]">
                  <Img
                    className="h-[18px] my-auto"
                    src="images/img_clock_red_600.svg"
                    alt="clock"
                  />
                </div>
                Pesanan
              </div>
            </Link>
          </nav>
        </div>

        {/* Konten */}
        <div className="flex-grow p-4">
          <NavbarDashboard/>

          
        </div>
      </div>

      {/* Footer */}
      <footer className="flex font-roboto items-center justify-center md:ml-[0] ml-[19px] w-full">
        <Text
          className="mr-[644px] text-blue_gray-400 text-xl"
          size="txtRobotoRomanRegular20"
        >
          {/* ... (konten footer) */}
        </Text>
      </footer>
    </>
  );
};

export default MontirProfil;
