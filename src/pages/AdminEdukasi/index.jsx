import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Img,  Line, Text } from "components";
import NavbarDashboard from "components/NavbarDashboard";
import Modal from 'react-modal';


const AdminEdukasi = () => {
  const [eduData, setEduData] = useState([
    { id: 1, title: 'Manfaat Ganti  Oli Berkala', description: 'Kapan Waktu Yang tepat ...' },
    { id: 2, title: 'Pentingnya Pemeriksaan ban ', description: 'Tips berkendara aman' },
    // ... more data
  ]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newEdu, setNewEdu] = useState({ title: '', description: '' });

  const handleEdit = (id) => {
    // Implement edit functionality here
    console.log(`Edit clicked for ID: ${id}`);
  };

  const handleDelete = (id) => {
    // 
    const updatedEduData = eduData.filter(edu => edu.id !== id);
  setEduData(updatedEduData);
    console.log(`Delete clicked for ID: ${id}`);
  };

  const handleAdd = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleSave = () => {
    setEduData([...eduData, { id: eduData.length + 1, ...newEdu }]);
    setNewEdu({ title: '', description: '' });
    setModalIsOpen(false);
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
                  src="images/img_settings.svg"
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
                  src="images/img_download.svg"
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
      <div>
      <div className="flex justify-end mb-4 mr-4 mt-4">
  <button
    onClick={handleAdd}
    className="bg-gray-500 hover:bg-gray-700 text-gray-100 font-bold py-2 px-4 rounded"
  >
    Tambah
  </button>
</div>



      <table className="min-w-full divide-y divide-gray-200">
  <thead className="bg-gray-500 text-gray-100">
    <tr>
      <th className="py-3 px-6 text-left">Judul</th>
      <th className="py-3 px-6 text-left">Deskripsi</th>
      <th className="py-3 px-6 text-left">Aksi</th>
    </tr>
  </thead>
  <tbody>
    {eduData.map((edu) => (
      <tr key={edu.id} className="bg-gray-100 hover:bg-gray-50">
        <td className="py-4 px-6">{edu.title}</td>
        <td className="py-4 px-6">{edu.description}</td>
        <td className="py-4 px-6">
          <button
            onClick={() => handleEdit(edu.id)}
            className="bg-blue-500 hover:bg-blue-700 text-gray-100 font-bold py-2 px-4 rounded mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(edu.id)}
            className="bg-red-500 hover:bg-red-700 text-gray-100 font-bold py-2 px-4 rounded"
          >
            Hapus
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      {/* Modal for Add */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Tambah Edukasi Modal"
        className="modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          content: {
            backgroundColor: 'gray-100',
            borderRadius: '8px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
            overflow: 'hidden',
            maxWidth: '50%',
            width: 'fit-content',
          },
        }}
      >
        <div className="p-6 w-full max-w-md bg-gray-100">
          <h2 className="text-3xl font-bold mb-4 text-red-600">Tambah Edukasi</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-600">
                Judul
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={newEdu.title}
                onChange={(e) => setNewEdu({ ...newEdu, title: e.target.value })}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-600">
                Deskripsi
              </label>
              <textarea
                id="description"
                name="description"
                value={newEdu.description}
                onChange={(e) => setNewEdu({ ...newEdu, description: e.target.value })}
                rows="4"
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <button
              type="button"
              onClick={handleSave}
              className="bg-blue-500 hover:bg-blue-700 text-gray-100 font-bold py-2 px-4 rounded-full mt-6 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline-blue active:scale-100"
            >
              Simpan
            </button>
            <button
              type="button"
              onClick={handleCloseModal}
              className="bg-red-500 hover:bg-red-700 text-gray-100 font-bold py-2 px-4 rounded-full mt-6 ml-4 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline-red active:scale-100"
            >
              Batal
            </button>
          </form>
        </div>
      </Modal>

   
    </div>
      
    </div>

</div>

    </>
  );
};

export default AdminEdukasi;
