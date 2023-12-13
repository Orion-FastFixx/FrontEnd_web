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
         
            
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chat</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {tableData.map((data, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{data.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.status}</td>
              
              
              <td className="px-6 py-4 whitespace-nowrap">
              <button
  onClick={() => openModal(data)}
  className="bg-white-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded border border-blue-500"
>
  Chat
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
  className="chatbot-modal"
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      backgroundColor: '#f0f4f8',
      borderRadius: '8px',
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
      overflow: 'hidden',
      maxWidth: '100%',
      width: '500px', // Adjust width as needed
      maxHeight: '80vh', // Set the maximum height as needed
      height:'65vh',
      overflowY: 'auto', // Enable vertical scrolling if content exceeds the height
    },
  }}
>
  <div className="p-6 w-full">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-3xl font-bold text-gray-800">Chat</h2>
      <button
        onClick={closeModal}
        className="text-gray-500 hover:text-gray-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
      >
        Tutup
      </button>
    </div>
    <div className="text-left mb-2">
      
    </div>
    <div className="text-right mb-2">
      <div className="bg-red-500 text-gray-100 inline-block rounded-lg p-2 max-w-2/3">
      Hallo Denga Montir Fastfixx Disini 
      <br />
      ada yang Bisa Saya Bantu
      </div>
      
    </div>
    <div className="text-left mb-2">
      <div className="bg-gray-300 text-gray-800 inline-block rounded-lg p-2 max-w-2/3">
        Iyaaa bang Ban ane bocor di tengah sawah
      </div>
    </div>
    <div className="text-right mb-2">
    <div className="bg-red-500 text-gray-100 inline-block rounded-lg p-2 max-w-2/3">
      Pindahin Dulu bang ke deket indomaret 
      </div>
    </div>
    

    
    {selectedData && (
      <div className="space-y-3 mt-80">
        <div className="flex">
          <input
            type="text"
            className="border p-2 w-full mr-2"
            placeholder="Type your message..."
          />
          <button
            className="bg-red-500 hover:bg-red-700 text-gray-100 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline-red active:scale-100"
            onClick={closeModal}
          >
            Kirim
          </button>
        </div>
      </div>
    )}
  </div>
</Modal>








      </div>
    </div>

      </div>
      
    </>
  );
};

export default BengkelPesanan;
