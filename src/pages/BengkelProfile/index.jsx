


import React from "react";
import { Link } from "react-router-dom";
import { Img} from "components";
import NavbarDashboard from "components/NavbarDashboard";

const BengkelProfile = () => {
  const montirData = {
    nama: "John Doe",
    email: "john.doe@example.com",
    password:"**********",
    nomorTelepon: "08123456789",
    alamat: "Jln Raya Bogor ,Kec. Cibinong, Kabupaten Bogor, Jawa Barat",
    deskripsi: "Bengkel Sriwijaya adalah tempat yang handal dan profesional untuk perawatan kendaraan Anda. Dengan tenaga kerja terampil dan peralatan modern, kami menyediakan layanan servis kendaraan berkualitas tinggi. Bengkel ini mengutamakan kepuasan pelanggan, memberikan pelayanan yang cepat dan efisien. Selain itu, staf kami yang ramah dan berpengalaman siap membantu Anda dengan segala kebutuhan perbaikan kendaraan. Dengan komitmen pada kualitas dan integritas, Bengkel Sriwijaya menjadi pilihan utama bagi pemilik kendaraan yang mencari tempat perawatan yang dapat diandalkan di kawasan ini.",
    status: "Aktif",
    rating: 4.5,
    jenis: "Umum",
  };
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
      <div className="flex-grow p-4">
          <NavbarDashboard/>
          <div className="p-4">

              <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Profil Montir</h2>
                  
              </div>
              <div className="mb-4">
                  <strong className="text-xl">Nama Bengkel:</strong><br /> {montirData.nama}
              </div>
              <div className="mb-4">
                  <strong className="text-xl">Email:</strong><br /> {montirData.email}
              </div>
              <div className="mb-4">
                  <strong className="text-xl">Password:</strong><br /> {montirData.password}
              </div>
              <div className="mb-4">
                  <strong className="text-xl">Nomor Telepon:</strong><br /> {montirData.nomorTelepon}
              </div>
              <div className="mb-4">
                  <strong className="text-xl">Alamat:</strong><br /> {montirData.alamat}
              </div>
              <div className="mb-4">
                  <strong className="text-xl">Deskripsi:</strong> <br className="max-w-md"/>{montirData.deskripsi}
              </div>
              <div className="mb-4">
                  <strong className="text->xl">Status:</strong><br /> {montirData.status}
              </div>
              <div className="mb-4">
                  <strong className="text->xl">Rating:</strong><br /> {montirData.rating}
              </div>
              <div className="mb-4">
                  <strong className="text->xl">Jenis Kendaraan:</strong> <br />{montirData.jenis}
              </div>
              </div>
          
      
        </div>

     
   
    </div>
  );
};

export default BengkelProfile;
