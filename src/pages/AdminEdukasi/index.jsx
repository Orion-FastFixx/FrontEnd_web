import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Img,  Line, Text } from "components";
import NavbarDashboard from "components/NavbarDashboard";
import Modal from 'react-modal';
import axios from "axios";





const AdminEdukasi = () => {
  
  const [edukasis, setEdukasi] = useState([]);
  const [modalAddIsOpen, setModalAddIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    judul: "",
    kategori: "",
    sub_judul:"",
    jenis_kendaraan:"",
    foto_url:"",
    isi_konten:"",
    
    
  });

 


  useEffect (() => {
    getEdukasi();
  }, [])

  const getEdukasi = async () => {

    try {
      const response = await axios.get('http://localhost:3000/api/v1/admin/list-education', {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImlhdCI6MTcwMjg3ODk5OCwiZXhwIjoxNzAyOTIyMTk4fQ.Vxbvd1j26-USqNg-NNOxLnC47f5C4hjT36n8h1kV4pk"
        }
      });

      // console.log(response)
  
      setEdukasi(response.data);

  
    } catch (error) {
      console.error("Error fetching Edukasi:", error);
    }
  };
  
  const handleDeleteRequest = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/v1/admin/delete-education/${id}`, {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImlhdCI6MTcwMjg3ODk5OCwiZXhwIjoxNzAyOTIyMTk4fQ.Vxbvd1j26-USqNg-NNOxLnC47f5C4hjT36n8h1kV4pk"
        }
      });
    
      console.log('Data berhasil dihapus:', response.data);
    
      // Refresh data setelah berhasil menghapus
      getEdukasi();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
    
  };


  const openModalAdd = () => {
    setModalAddIsOpen(true);
  };

  const closeModalAdd = () => {
    setModalAddIsOpen(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddData = async () => {
    try {
      
      await axios.post(
        'http://localhost:3000/api/v1/admin/create-education',
        formData,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImlhdCI6MTcwMjg3ODk5OCwiZXhwIjoxNzAyOTIyMTk4fQ.Vxbvd1j26-USqNg-NNOxLnC47f5C4hjT36n8h1kV4pk',
          },
        }
      );

      getEdukasi();
      closeModalAdd();

      // Reset the form data
      setFormData({
          judul: "",
          kategori: "",
          sub_judul:"",
          jenis_kendaraan:"",
          isi_konten:"",
          foto_url:"",
          
      });
    } catch (error) {
      console.error('Error adding Edukasi:', error);
    }
  };
  

  const dataEdukasi= edukasis.data
  console.log(dataEdukasi);
  dataEdukasi?.map(e=>console.log(e))
  
  


  
  const [dataDetail, setDataDetail] = useState({});
  const [modalDetailIsOpen, setModalDetailIsOpen] = useState(false);
  const openModalDetail = (data) => {
    setDataDetail(data);
    setModalDetailIsOpen(true);
  };

  const closeModalDetail = () => {
    setModalDetailIsOpen(false);
  };

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
        {/* <MembersTable/> */}
      {/* Content */}
      <div>
      <div className="flex justify-end mb-4 mr-4 mt-4">
        <button
          onClick={openModalAdd}
          className="bg-gray-500 hover:bg-gray-700 text-gray-100 font-bold py-2 px-4 rounded"
        >
          Tambah
        </button>
      </div>



      <table className="min-w-full divide-y divide-gray-200">
  <thead className="bg-gray-500 text-gray-100">
    <tr
    >
      <th className="py-3 px-6 text-left">Judul</th>
      <th className="py-3 px-6 text-left">Kategori</th>
      <th className="py-3 px-6 text-left">Tanggal</th>
      <th className="py-3 px-6 text-left">Aksi</th>
      <th className="py-3 px-6 text-left">Detail</th>
    </tr>
  </thead>
  <tbody>
    {dataEdukasi?.map((data, index) => (
      <tr key={index} className="bg-gray-100 hover:bg-gray-50">
        <td className="py-4 px-6">{data.judul}</td>
        <td className="py-4 px-6">{data.kategori}</td>
        <td className="py-4 px-6">{data.updatedAt }</td>
        <td className="py-4 px-6">
          <button
            onClick={() => handle(data.id)}
            className="bg-blue-500 hover:bg-blue-700 text-gray-100 font-bold py-2 px-4 rounded mr-2"
          >
            Edit
          </button>
          <button
             onClick={() => handleDeleteRequest(data.id)} 
            className="bg-red-500 hover:bg-red-700 text-gray-100 font-bold py-2 px-4 rounded"
          >
            Hapus
          </button>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
              <button
  onClick={() => openModalDetail(data)} 
  className="bg-blue-500 hover:bg-red-700 text-gray-100 font-bold py-2 px-4 rounded border border-blue-500"
>
  Detail
</button>

              </td>
      </tr>
    ))}
  </tbody>
</table>

      {/* Modal for Add */}
      
      
     {/* Modal for Detail */}
     <Modal
        isOpen={modalDetailIsOpen}
        onRequestClose={closeModalDetail}
        contentLabel="Detail Edukasi Modal"
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
            overflow: 'auto',
            width:'700px',
            maxHeight: '90%', // ubah nilai ini untuk membuat modal bisa di sceoll kebawah
          },
       }}
      >
        <div className="p-6 w-full max-w-full bg-gray-100">
 <h2 className="text-3xl font-bold mb-4 text-blue-500">Detail Edukasi</h2>
 <div>
    <p className="text-gray-600 font-medium mb-2">Judul:</p>
    <p className="text-gray-800">{dataDetail.judul}</p>
 </div>
 <div className="mt-4">
    <p className="text-gray-600 font-medium mb-2">Sub Judul:</p>
    <p className="text-gray-800">{dataDetail.sub_judul}</p>
 </div>
 
 <div className="mt-4">
    <p className="text-gray-600 font-medium mb-2">Kategori:</p>
    <p className="text-gray-800">{dataDetail.kategori}</p>
 </div>
 <div className="mt-4">
    <p className="text-gray-600 font-medium mb-2">Jenis Kendaraan:</p>
    <p className="text-gray-800">{dataDetail.jenis_kendaraan}</p>
 </div>
 <div className="mt-4">
    <p className="text-gray-600 font-medium mb-2">Foto:</p>
    <img src={dataDetail.foto_url} alt="Foto edukasi" className="w-full h-64 object-cover mb-4" />
 </div>
 <div className="mt-4">
    <p className="text-gray-600 font-medium mb-2">Isi Konten:</p>
    <p className="text-gray-800">{dataDetail.isi_konten}</p>
 </div>

 
 <button
    type="button"
    onClick={closeModalDetail}
    className="bg-blue-500 hover:bg-blue-700 text-gray-100 font-bold py-2 px-4 rounded-full mt-6 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline-blue active:scale-100"
 >
    Tutup
 </button>
</div>
      </Modal>
      <Modal
  isOpen={modalAddIsOpen}
  onRequestClose={closeModalAdd}
  contentLabel="Add Edukasi Modal"
  className="modal"
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      backgroundColor: '#f8f9fa', // Light gray background
      borderRadius: '8px',
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
      overflow: 'auto',
      width: '700px', // Adjusted width to match the "Detail Edukasi Modal"
      maxHeight: '90%',
    },
  }}
>
  <div className="p-6 w-full max-w-full bg-gray-100">
    <h2 className="text-3xl font-bold mb-4 text-blue-500">Tambah Edukasi</h2>
    <form>
      <label htmlFor="judul">Judul:</label>
      <input
        type="text"
        id="judul"
        name="judul"
        value={formData.judul}
        onChange={handleInputChange}
        className="w-full mb-4 p-2 border rounded"
      />
       <label htmlFor="jenis_kendaraan">Jenis Kendaraan:</label>
      <input
        type="text"
        id="jenis_kendaraan"
        name="jenis_kendaraan"
        value={formData.jenis_kendaraan}
        onChange={handleInputChange}
        className="w-full mb-4 p-2 border rounded"
      /> 
      
      <label htmlFor="kategori">Kategori:</label>
      <input
        type="text"
        id="kategori"
        name="kategori"
        value={formData.kategori}
        onChange={handleInputChange}
        className="w-full mb-4 p-2 border rounded"
      />
       <label htmlFor="sub_judul">Sub judul:</label>
      <input
        type="text"
        id="sub_judul"
        name="sub_judul"
        value={formData.sub_judul}
        onChange={handleInputChange}
        className="w-full mb-4 p-2 border rounded"
      />

      <label htmlFor="isi_konten">Isi Konten:</label>
      <input
        type="text"
        id="isi_konten"
        name="isi_konten"
        value={formData.isi_konten}
        onChange={handleInputChange}
        className="w-full mb-4 p-2 border rounded"
      />
       <label htmlFor="foto_url">Foto:</label>
      <input
        type="file"
        id="foto_url"
        name="foto_url"
        value={formData.foto_url}
        onChange={handleInputChange}
        className="w-full mb-4 p-2 border rounded"
      />
      {/* Add other form fields here */}
      <button
        type="button"
        onClick={handleAddData}
        className="bg-blue-500 hover:bg-blue-700 text-gray-100 font-bold py-2 px-4 rounded-full mt-6 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline-blue active:scale-100"
      >
        Tambah
      </button>
    </form>

    <button
      onClick={closeModalAdd}
      className="bg-gray-500 hover:bg-gray-700 text-gray-100 font-bold py-2 px-4 rounded-full mt-6 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline-gray active:scale-100"
    >
      Batal
    </button>
  </div>
</Modal>


    </div>
      
    </div>

</div>

    </>
  );
};

export default AdminEdukasi;
