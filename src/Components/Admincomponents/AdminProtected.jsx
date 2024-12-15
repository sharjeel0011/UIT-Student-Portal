import React, { useEffect, useState } from "react";
import AdminNav from "../AdminNav";
import { useNavigate } from "react-router-dom";
import Sidebar from '../../Components/Admincomponents/Sidebar'

const AdminProtected = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(true); // Replace with actual admin authentication logic
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
      navigate("/loginadmin"); // Redirect to admin login if not authenticated
    }
  }, [isAdmin, navigate]);

  return (
    <div>
      {isAdmin ? (
      <>
      <AdminNav/>
        <div className="flex">
         
         <Sidebar/>

          {/* Main Admin Content */}
          <main className="flex-1 p-14 bg-gray-100 min-h-screen">
            {children}
          </main>
        </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <p>Redirecting to admin login...</p>
        </div>
      )}
    </div>
  );
};

export default AdminProtected;
