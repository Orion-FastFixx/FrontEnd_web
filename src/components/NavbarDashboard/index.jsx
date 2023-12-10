import React from "react";

const NavbarDashboard = () => {
    return (
      <nav className="bg-gray-200 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left side - Page name */}
          <div className="text-white text-lg font-bold">Dashboard</div>
  
          {/* Right side - User Profile Section */}
          <div className="flex items-center space-x-4">
            {/* Add your user profile information here */}
            <img
              src="public/images/img_ellipse2.png"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-white">Username</span>
          </div>
        </div>
      </nav>
    );
  };

  export default NavbarDashboard