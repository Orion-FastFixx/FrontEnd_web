
import { Link } from "react-router-dom"; // Import Link dari React Router
import { Img, Input, Line, Text } from "components";
import NavbarDashboard from "components/NavbarDashboard";
import React, { useEffect, useState } from "react";

const MontirProfil = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUbahClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const MontirProfileModal = ({ montirData, closeModal }) => {
    const [editedMontirData, setEditedMontirData] = useState({ ...montirData });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEditedMontirData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSaveChanges = () => {
      // Add logic to save changes to the backend or update state
      console.log("Saving changes:", editedMontirData);
      closeModal();
    };

    return (
      <div className="modal">
        <div>
          <h2>Edit Montir Profile</h2>
          {/* Add your form inputs and logic here */}
          <div className="mb-4">
            <label className="text-xl">Nama:</label>
            <input
              type="text"
              name="nama"
              value={editedMontirData.nama}
              onChange={handleInputChange}
            />
          </div>
          {/* Repeat the pattern for other fields */}
          <button onClick={handleSaveChanges}>Save Changes</button>
          <button onClick={closeModal}>Close Modal</button>
        </div>
      </div>
    );
  };
  const montirData = {
    nama: "John Doe",
    email: "john.doe@example.com",
    nomorTelepon: "08123456789",
    keahlian: "Mechanical, Electrical",
    deskripsi: "Montir berpengalaman dengan spesialisasi dalam perbaikan kendaraan bermotor.",
    status: "Tersedia",
    rating: 4.5,
    jenis: "Mobil dan Motor",
  };
  
   

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
                    src="images/img_contrast.svg"
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
                    src="images/img_clock.svg"
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
          <div className="p-4">

              <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Profil Montir</h2>
                  <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleUbahClick}
                      >
                        Ubah
                      </button>
              </div>
              <div className="mb-4">
                  <strong className="text-xl">Nama:</strong><br /> {montirData.nama}
              </div>
              <div className="mb-4">
                  <strong className="text-xl">Email:</strong><br /> {montirData.email}
              </div>
              <div className="mb-4">
                  <strong className="text-xl">Nomor Telepon:</strong><br /> {montirData.nomorTelepon}
              </div>
              <div className="mb-4">
                  <strong className="text-xl">Keahlian:</strong><br /> {montirData.keahlian}
              </div>
              <div className="mb-4">
                  <strong className="text-xl">Deskripsi:</strong> <br />{montirData.deskripsi}
              </div>
              <div className="mb-4">
                  <strong className="text-xl">Status:</strong><br /> {montirData.status}
              </div>
              <div className="mb-4">
                  <strong className="text-xl">Rating:</strong><br /> {montirData.rating}
              </div>
              <div className="mb-4">
                  <strong className="text-xl">Jenis Kendaraan:</strong> <br />{montirData.jenis}
              </div>
              </div>
          
      
        </div>
        
      </div>
{/* Conditionally render the modal */}
{isModalOpen && (
        <MontirProfileModal
          montirData={montirData}
          closeModal={closeModal}
        />
      )}
      <footer className="flex font-roboto items-center justify-center md:ml-[0] ml-[19px] w-full">
              <Text
                className="mr-[644px] text-blue_gray-400 text-xl"
                size="txtRobotoRomanRegular20"
              >
                <span className="text-blue_gray-400 font-roboto text-left font-normal">
                  © 2023, made with ♥ by{" "}
                </span>
                <span className="text-blue_gray-400 font-roboto text-left font-bold">
                  a_ikram
                </span>
                <span className="text-blue_gray-400 font-roboto text-left font-normal">
                  {" "}
                  hacker_web.
                </span>
              </Text>
            </footer>
    </>
  );
};

export default MontirProfil;