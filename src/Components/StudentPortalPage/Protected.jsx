
// import React, { useEffect, useState } from 'react';
// import Sidebar from './Sidebar';
// import { useNavigate } from 'react-router-dom';

// const Protected = ({ children, routes }) => {
//   const [allowStudent, setAllowStudent] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const isAuthenticated = !!localStorage.getItem('authToken'); // Example logic
//     setAllowStudent(isAuthenticated);

//     if (!isAuthenticated) {
//       navigate('/login');
//     }
//   }, [navigate]);

//   return (
//     <div>
//       {/* Add a header or custom layout for protected pages */}
//       <header className="bg-blue-500 text-white p-4">
//         <h1>Welcome to the Protected Page</h1>
//       </header>

//       {/* Check if the user is allowed */}
//       {allowStudent ? (
//         <div className="flex">
//           {/* Sidebar Component */}
//           <Sidebar routes={routes} />

//           {/* Main Content */}
//           <main className="flex-1 p-4">{children}</main>
//         </div>
//       ) : (
//         <div className="flex justify-center items-center h-screen">
//           <p>Redirecting to login...</p>
//         </div>
//       )}

//       {/* Footer or additional components */}
//       <footer className="bg-gray-800 text-white p-4 text-center">
//         <p>&copy; 2024 Your Website</p>
//       </footer>
//     </div>
//   );
// };

// export default Protected;

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
          <Sidebar />
          <main className="flex-1 p-4">{children}</main>
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
