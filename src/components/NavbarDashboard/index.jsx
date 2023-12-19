import { Img } from "components";
import React from "react";
import { Link } from "react-router-dom"; 
const NavbarDashboard = () => {
    return (
      <nav className="sticky top-0 bg-gray-200 p-4">
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
          {/* Change the span to a Link with the "to" attribute pointing to your logout route */}
    <Link to="/beranda" className="text-white">
      {/* Use Img component with the logo URL */}
      <Img
        src="/images/logout.png"  // Replace with the actual path to your logo
        alt="Logout"
        className="w-8 h-8"  // Add your logo styling here
      />
    </Link>
        </div>
      </div>
    </nav>
    );
  };

  export default NavbarDashboard