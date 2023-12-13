import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Img,  Line, Text } from "components";
import NavbarDashboard from "components/NavbarDashboard";
import Modal from 'react-modal';
const BengkelPesanan = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  function openModal(data) {
    setSelectedData(data);
    setIsOpen(true);
  }

  function closeModal() {
    setSelectedData(null);
    setIsOpen(false);
  }
 const tableData = [
  {
    name: "Mantri Sunarti",
    status: "Aktif",
    montir: "Ujang",
    masalah:"ban kempes"
  },
  {
    name: "tati sukati",
    status: "Aktif",
    montir: "asep",
    masalah:"olibocor"
  },
  {
    name: "Raynaldi",
    status: "Aktif",
    montir: "Ujang",
    masalah:"velg patah"
  },
  {
    name: "Mantri Sunarti",
    status: "Aktif",
    montir: "Ujang",
    masalah:"ban kempes"
  },
 
];
 
  return (
    <>
      <div className="flex">
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
          <Link to="/bengkelprofile" className="nav-link">
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
                  src="images/img_frame.svg"
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
              <div className="h-11 mr-6 w-11 bg-red-50 shadow-bs p-[13px] rounded-[10px]">
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
    
      <div className="w-full">
      {/* Navbar */}
      <NavbarDashboard />

      {/* Content */}
      <div className="bg-white rounded shadow p-4 mt-4">
        <h1 className="text-2xl font-bold mb-4">Montir List</h1>
        <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">montir</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">masalah</th>
            
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Detail</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {tableData.map((data, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{data.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.status}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.montir}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.masalah}</td>
              
              <td className="px-6 py-4 whitespace-nowrap">
              <button
  onClick={() => openModal(data)}
  className="bg-white-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded border border-blue-500"
>
  Detail
</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>

        {/* Modal */}
        <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  contentLabel="Detail Modal"
  className="modal"
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
      overflow: 'hidden',
      maxWidth: '100%', // Adjust the maximum width as needed
      width: '50%', // Ensure content doesn't stretch to full width
    },
  }}
>
  <div className="p-6 w-full">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-3xl font-bold text-gray-800">Detail Bengkel</h2>
      <button
        onClick={closeModal}
        className="text-gray-500 hover:text-gray-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
      >
        Tutup
      </button>
    </div>
    {selectedData && (
      <div className="space-y-3">
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Name:</span><hr /> {selectedData.name}
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Status:</span><hr /> {selectedData.status}
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold">montir:</span> <hr />{selectedData.montir}
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Masalah:</span><hr /> {selectedData.masalah}
        </p>
        
      </div>
    )}
    <div className="flex justify-end mt-6">
      <button
        className="bg-blue-500 hover:bg-gray-500 text-gray-100 font-bold py-2 px-4 rounded-full mr-4 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline-green active:scale-100"
        // Add your Terima function here
        onClick={closeModal}
      >
        Terima
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-gray-100 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline-red active:scale-100"
         // Add your Tolak function here
         onClick={closeModal}
      >
        Tolak
      </button>
    </div>
  </div>
</Modal>





      </div>
    </div>

      </div>
      
    </>
  );
};

export default BengkelPesanan;
