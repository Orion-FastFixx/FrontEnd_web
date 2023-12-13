import React from "react";

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', paddingTop: '50px', color: '#333', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px', color: '#ff5c5c' }}>Oops! Halaman yg kamu Tuju Tidak ada</h1>
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>kamu salah Halaman.</p>
      <img
        src="public/images/Capture.PNG"
        alt="Creative Illustration"
        style={{ maxWidth: '100%', marginTop: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
      />
    </div>
  );
};

export default NotFound;
