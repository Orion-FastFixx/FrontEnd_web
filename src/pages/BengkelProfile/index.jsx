


import React from "react";
import { Link } from "react-router-dom";
import { Img, Input, Line, Text } from "components";

const BengkelProfile = () => {
  return (
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
        <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-white">
          {/* Navigasi Profile */}
          <Link to="/bengkelprofile" className="nav-link">
            <div
              role="button"
              tabIndex={0}
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-red-500 hover:bg-opacity-80 focus:bg-red-500 focus:bg-opacity-80 active:bg-red-500 active:bg-opacity-80 hover:text-white focus:text-white active:text-white outline-none"
            >
              <div className="h-11 mr-6 w-11 bg-gray-50 shadow-bs p-3 rounded-[10px]">
                <Img
                  className="h-5 my-auto"
                  src="images/img_contrast.svg"
                  alt="lock"
                />
              </div>
              Profile
            </div>
          </Link>

          {/* Navigasi Montir */}
          <Link to="/bengkelmontir" className="nav-link">
            <div
              role="button"
              tabIndex={0}
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-red-500 hover:bg-opacity-80 focus:bg-red-500 focus:bg-opacity-80 active:bg-red-500 active:bg-opacity-80 hover:text-white focus:text-white active:text-white outline-none"
            >
              <div className="h-11 mr-6 w-11 bg-gray-50 shadow-bs rounded-[10px] py-3 px-2">
                <Img
                  className="my-auto"
                  src="images/img_settings.svg"
                  alt="settings"
                />
              </div>
              Montir
            </div>
          </Link>

          {/* Navigasi Layanan */}
          <Link to="/bengkellayanan" className="nav-link">
            <div
              role="button"
              tabIndex={0}
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-red-500 hover:bg-opacity-80 focus:bg-red-500 focus:bg-opacity-80 active:bg-red-500 active:bg-opacity-80 hover:text-white focus:text-white active:text-white outline-none"
            >
              <div className="h-11 mr-6 w-11 bg-gray-50 shadow-bs rounded-[10px]">
                <Img
                  className="h-11 rounded-[10px] my-auto"
                  src="images/img_frame_gray_50_44x44.svg"
                  alt="Frame"
                />
              </div>
              Layanan
            </div>
          </Link>

          {/* Navigasi Pesanan */}
          <Link to="/bengkelpesanan" className="nav-link">
            <div
              role="button"
              tabIndex={0}
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-red-500 hover:bg-opacity-80 focus:bg-red-500 focus:bg-opacity-80 active:bg-red-500 active:bg-opacity-80 hover:text-white focus:text-white active:text-white outline-none"
            >
              {/* Ganti ikon dengan ikon yang sesuai */}
              <div className="h-11 mr-6 w-11 bg-gray-50 shadow-bs p-[13px] rounded-[10px]">
                <Img
                  className="h-[18px] my-auto"
                  src="images/img_clock.svg"
                  alt="clock"
                />
              </div>
              Pesanan
            </div>
          </Link>
          
        </nav>
        </nav>
      </div>

      {/* Content on the right side of the sidebar */}
      <div className="gap-[24px] w-full flex relative max-w-[791px] box-border items-start flex-col justify-start mt-">
         <div className="gap-[12px] w-full flex relative max-w-[273px] box-border items-start flex-col justify-start mt-4 ml-2">
           <div className="w-full max-w-[auto] mt-10 min-h-[auto] text-left mb-30 ml-30">
             <p className="text-[#000000] text-[24px] not-italic mt-0 text-left font-['Mona_Sans',_sans-serif] font-bold mb-0 tracking-[-1px] normal-case">
               Nama Bengkel
             </p>
           </div>
           <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
             <p className="text-[#374151] text-[18px] not-italic mt-0 text-left font-['Mona_Sans',_sans-serif] font-normal mb-0 tracking-[0px] normal-case">
               Bengkel SriWijaya Serba Lembur
             </p>
           </div>
         </div>
         <div className="gap-[12px] w-full flex relative max-w-[245px] box-border items-start flex-col justify-start">
           <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
             <p className="text-[#000000] text-[24px] not-italic mt-0 text-left font-['Mona_Sans',_sans-serif] font-bold mb-0 tracking-[-1px] normal-case">
               Email
             </p>
           </div>
           <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
             <p className="text-[#374151] text-[18px] not-italic mt-0 text-left font-['Mona_Sans',_sans-serif] font-normal mb-0 tracking-[0px] normal-case">
               sriwijayaslembur@gmail.com
             </p>
           </div>
         </div>
         <div className="gap-[12px] w-full flex relative max-w-[111px] box-border items-start flex-col justify-start">
           <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
             <p className="text-[#000000] text-[24px] not-italic mt-0 text-left font-['Mona_Sans',_sans-serif] font-bold mb-0 tracking-[-1px] normal-case">
               Password
             </p>
           </div>
           <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
             <p className="text-[#374151] text-[18px] not-italic mt-0 text-left font-['Mona_Sans',_sans-serif] font-normal mb-0 tracking-[0px] normal-case">
               *****************
             </p>
           </div>
         </div>
         <div className="gap-[12px] w-full flex relative max-w-[172px] box-border items-start flex-col justify-start">
           <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
             <p className="text-[#000000] text-[24px] not-italic mt-0 text-left font-['Mona_Sans',_sans-serif] font-bold mb-0 tracking-[-1px] normal-case">
               Nomor Telepon
             </p>
           </div>
           <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
             <p className="text-[#374151] text-[18px] not-italic mt-0 text-left font-['Mona_Sans',_sans-serif] font-normal mb-0 tracking-[0px] normal-case">
               +62 86598561254
             </p>
           </div>
         </div>
         <div className="gap-[12px] w-full flex relative max-w-[791px] box-border items-start flex-col justify-start">
           <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
             <p className="text-[#000000] text-[24px] not-italic mt-0 text-left font-['Mona_Sans',_sans-serif] font-bold mb-0 tracking-[-1px] normal-case">
               Alamat
             </p>
           </div>
           <div className="w-full max-w-[791px] mt-0 min-h-[44px] text-justify mb-0">
             <p className="text-[#374151] text-[18px] not-italic mt-0 font-['Mona_Sans',_sans-serif] font-normal mb-0 tracking-[0px] normal-case">
               Jl. Pembangunan, Batu Selicin, Kec. Lubuk Baja, Kota Batam, Kepulauan
               Riau 29444
             </p>
           </div>
         </div>
         <div className="gap-[12px] w-full flex relative max-w-[791px] box-border items-start flex-col justify-start">
           <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
             <p className="text-[#000000] text-[24px] not-italic mt-0 text-left font-['Mona_Sans',_sans-serif] font-bold mb-0 tracking-[-1px] normal-case">
               Deskripsi
             </p>
           </div>
           <div className="w-full max-w-[787px] mt-0 min-h-[154px] text-justify mb-0">
             <p className="text-[#374151] text-[18px] not-italic mt-0 font-['Mona_Sans',_sans-serif] font-normal mb-0 tracking-[0px] normal-case">
               Bengkel Sriwijaya adalah tempat yang handal dan profesional untuk
               perawatan kendaraan Anda. Dengan tenaga kerja terampil dan peralatan
               modern, kami menyediakan layanan servis kendaraan berkualitas tinggi.
               Bengkel ini mengutamakan kepuasan pelanggan, memberikan pelayanan yang
               cepat dan efisien. Selain itu, staf kami yang ramah dan berpengalaman
               siap membantu Anda dengan segala kebutuhan perbaikan kendaraan. Dengan
               komitmen pada kualitas dan integritas, Bengkel Sriwijaya menjadi
               pilihan utama bagi pemilik kendaraan yang mencari tempat perawatan
               yang dapat diandalkan di kawasan ini.
             </p>
           </div>
         </div>
         <div className="gap-[12px] w-full flex relative max-w-[75px] box-border items-start flex-col justify-start">
           <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
             <p className="text-[#000000] text-[24px] not-italic mt-0 text-left font-['Mona_Sans',_sans-serif] font-bold mb-0 tracking-[-1px] normal-case">
               Status
             </p>
           </div>
           <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
             <p className="text-[#374151] text-[18px] not-italic mt-0 text-left font-['Mona_Sans',_sans-serif] font-normal mb-0 tracking-[0px] normal-case">
               Aktif
             </p>
           </div>
         </div>
         <div className="gap-[12px] w-full flex relative max-w-[76px] box-border items-start flex-col justify-start">
           <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
             <p className="text-[#000000] text-[24px] not-italic mt-0 text-left font-['Mona_Sans',_sans-serif] font-bold mb-0 tracking-[-1px] normal-case">
               Rating
             </p>
           </div>
           <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
             <p className="text-[#374151] text-[18px] not-italic mt-0 text-left font-['Mona_Sans',_sans-serif] font-normal mb-0 tracking-[0px] normal-case">
               5
             </p>
           </div>
         </div>
         <div className="gap-[12px] w-full flex relative max-w-[153px] box-border items-start flex-col justify-start">
           <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
             <p className="text-[#000000] text-[24px] not-italic mt-0 text-left font-['Mona_Sans',_sans-serif] font-bold mb-0 tracking-[-1px] normal-case">
               Jenis Bengkel
             </p>
           </div>
           <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
             <p className="text-[#374151] text-[18px] not-italic mt-0 text-left font-['Mona_Sans',_sans-serif] font-normal mb-0 tracking-[0px] normal-case">
               Bengkel Umum
             </p>
           </div>
         </div>
       </div>

     
   
    </div>
  );
};

export default BengkelProfile;
