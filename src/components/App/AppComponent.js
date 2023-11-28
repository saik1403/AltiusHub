import React from "react";
import { Link, Outlet } from "react-router-dom";

const AppComponent = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <nav className="w-64 bg-gray-800 p-4 text-white">
        <Link to="/" className="text-2xl font-bold text-white mb-4 block">
          My App
        </Link>
        <ul>
          <li>
            <Link to="/invoices" className="hover:bg-gray-700 px-2 py-1 block">
              Invoices
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <Outlet /> {/* Render the child components */}
      </div>
    </div>
  );
};

export default AppComponent;
