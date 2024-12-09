
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';

const Protected = ({ children }) => {
  const [allowStudent, setAllowStudent] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!allowStudent) {
      navigate('/login');
    }
  }, [allowStudent, navigate]);

  return (
    <div>
      {allowStudent ? (
        <div className="flex">
          {/* <Sidebar /> */}
          <main className="flex-1 p-0">{children}</main>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <p>Redirecting to login...</p>
        </div>
      )}
    </div>
  );
};

export default Protected;















// 2

// import React, { useEffect } from "react";
// import Sidebar from "./Sidebar";
// import { useNavigate } from "react-router-dom";

// const Protected = ({ children }) => {
//   const navigate = useNavigate();
//   const allowStudent = true;

//   useEffect(() => {
//     if (!allowStudent) {
//       navigate("/login");
//     }
//   }, [allowStudent, navigate]);

//   return (
//     <div>
//       {allowStudent ? (
//         <div className="relative min-h-screen flex">
//           <Sidebar />
//           <main className="flex-1 p-4">{children}</main>
//         </div>
//       ) : (
//         <div className="flex justify-center items-center h-screen">
//           <p>Redirecting to login...</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Protected;

