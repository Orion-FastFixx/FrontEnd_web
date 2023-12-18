
import { Link } from "react-router-dom";
import { Img,  Line, Text } from "components";
import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import NavbarDashboard from "components/NavbarDashboard";
import axios from "axios";



const AdminMontir = () => {

  const [montirs, setMontir] = useState([]);

  useEffect (() => {
    getMontir();
  }, [])

  const getMontir = async () => {

    try {
      const response = await axios.get('http://localhost:3000/api/v1/admin/list-montir', {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImlhdCI6MTcwMjg2MTE2NCwiZXhwIjoxNzAyOTA0MzY0fQ.7mmUoZ-yXWj6WXQZZ0Z030moD_MyLKPqlX9Y_dYBIho"
        }
      });

      // console.log(response)
  
      setMontir(response.data);

  
    } catch (error) {
      console.error("Error fetching montirs:", error);
    }
  };
  const dataMontir= montirs.data
  console.log(dataMontir);
  dataMontir?.map(e=>console.log(e))
  
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
    name: "Ujang",
    status: "Aktif",
    email: "bengkelnasijamur@gmail.com",
    phone: "081256985465",
    jenisMontir: "Bengkel Resmi",
  },
  {
    name: "Surya",
    status: "Aktif",
    email: "bengkelxyz@gmail.com",
    phone: "081234567890",
    jenisMontir: "Bengkel Resmi",
  },
  {
    name: "Mikel",
    status: "Nonaktif",
    email: "bengkelabc@gmail.com",
    phone: "087654321098",
    jenisMontir: "Bengkel Resmi",
  },
  {
    name: "Imam",
    status: "Aktif",
    email: "bengkelpqr@gmail.com",
    phone: "089765432109",
    jenisMontir: "Bengkel Resmi",
  },
];

  return (
    <>
    <div className="flex">
  {/* Sidebar */}
  <div className="sticky top-0 flex flex-col bg-clip-border rounded-xl bg-white text-white h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
  <div className="mb-2 p-4">
          <Img
            className="h-[75px] md:ml-[0] ml-[13px]"
            src="images/img_layerx00201.svg"
            alt="layerx00201"
          />
        </div>
        <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-white">
          {/* Navigasi Edukasi */}
          <Link to="/adminBengkel" className="nav-link">
            <div
              role="button"
              tabIndex={0}
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-red-500 hover:bg-opacity-80 focus:bg-red-500 focus:bg-opacity-80 active:bg-red-500 active:bg-opacity-80 hover:text-white focus:text-white active:text-white outline-none"
            >
              <div className="h-11 mr-6 w-11 bg-gray-50 shadow-bs rounded-[10px] py-3 px-2.5">
                <Img
                  className="my-auto"
                  src="images/img_thumbsup_black_900.svg"
                  alt="thumbs_up"
                />
              </div>
           Bengkel
            </div>
          </Link>

          {/* Navigasi Montir */}
          <Link to="/adminMontir" className="nav-link">
            <div
              role="button"
              tabIndex={0}
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-red-500 hover:bg-opacity-80 focus:bg-red-500 focus:bg-opacity-80 active:bg-red-500 active:bg-opacity-80 hover:text-white focus:text-white active:text-white outline-none"
            >
              <div className="h-11 mr-6 w-11 bg-gray-50 shadow-bs rounded-[10px] py-3 px-2">
                <Img
                  className="my-auto"
                  src="images/img_settings_red_600.svg"
                  alt="settings"
                />
              </div>
              Montir
            </div>
          </Link>

          {/* Navigasi Edukasi */}
          <Link to="/adminedukasi" className="nav-link">
            <div
              role="button"
              tabIndex={0}
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-red-500 hover:bg-opacity-80 focus:bg-red-500 focus:bg-opacity-80 active:bg-red-500 active:bg-opacity-80 hover:text-white focus:text-white active:text-white outline-none"
            >
              <div className="h-11 mr-6 w-11 bg-gray-50 shadow-bs rounded-[10px] py-3 px-[9px] flex justify-center items-center">
                <Img
                  className="my-auto"
                  src="images/img_thumbsup_gray_900.svg"
                  alt="thumbs_up"
                />
              </div>
              Edukasi
            </div>
          </Link>

          {/* Navigasi Pesanan */}
         
        </nav>
  </div>

  {/* Content Section */}



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
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No Telepon</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jenis Montir</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Detail</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {dataMontir?.map((data, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{data.nama}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.is_available}</td>
              
              <td className="px-6 py-4 whitespace-nowrap">{data.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.jenis_montir}</td>
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
    <h2 className="text-3xl font-bold mb-4 text-gray-800">Detail Bengkel</h2>
    {selectedData && (
      <div className="space-y-3">
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Name:</span><hr /> {selectedData.nama}
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Status:</span><hr /> {selectedData.is_available}
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold">No Telepon:</span><hr /> {selectedData.phone}
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Jenis Bengkel:</span><hr /> {selectedData.jenis_montir}
        </p>
      </div>
    )}
    <button
      onClick={closeModal}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-6 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline-red active:scale-100"
    >
      Close
    </button>
  </div>
</Modal>




      </div>
    </div>
</div>

    </>
  );
};

export default AdminMontir;
