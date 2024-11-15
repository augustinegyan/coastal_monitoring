// import React from 'react';
// import { 
//   BrowserRouter as Router, 
//   Routes, 
//   Route, 
//   useLocation, 
//   Navigate 
// } from 'react-router-dom';

// import Header from './components/MHeader';
// import Footer from './components/MFooter';
// import Home from './assets/pages/MHome';
// import About from './assets/pages/MAbout';
// import Contact from './assets/pages/MContact';
// import Signin from './assets/pages/MSignin';
// import Dashboard from './assets/pages/Dashboard';

// // Protected Route Component
// const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
//   if (!isAuthenticated) {
//     return <Navigate to="/signin" />;
//   }
//   return children;
// };

// function App() {
//   const location = useLocation();
  
//   // Hide header/footer for signin and dashboard pages
//   const shouldHideHeaderFooter = ['/signin', '/dashboard'].includes(location.pathname);

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Conditionally render Header */}
//       {!shouldHideHeaderFooter && <Header />}
      
//       {/* Main content area */}
//       <main className="flex-grow">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/signin" element={<Signin />} />
//           <Route
//             path="/dashboard"
//             element={
//               <ProtectedRoute>
//                 <Dashboard />
//               </ProtectedRoute>
//             }
//           />
//           {/* Redirect unknown routes to home */}
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </main>
      
//       {/* Conditionally render Footer */}
//       {!shouldHideHeaderFooter && <Footer />}
//     </div>
//   );
// }

// // Wrapper component for Router context
// function AppWrapper() {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// }

// export default AppWrapper;


import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  useLocation, 
  Navigate 
} from 'react-router-dom';

import Header from './components/MHeader';
import Footer from './components/MFooter';
import Home from './assets/pages/MHome';
import About from './assets/pages/MAbout';
import Contact from './assets/pages/MContact';
import Signin from './assets/pages/MSignin';
import Dashboard from './assets/pages/Dashboard';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }
  return children;
};

function App() {
  const location = useLocation();
  
  // Hide header/footer for signin and dashboard pages
  const shouldHideHeaderFooter = ['/signin', '/dashboard'].some(path => location.pathname.startsWith(path));

  return (
    <div className="flex flex-col min-h-screen">
      {/* Conditionally render Header */}
      {!shouldHideHeaderFooter && <Header />}
      
      {/* Main content area */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} />
          
          {/* Dashboard Route with nested paths */}
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          
          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      
      {/* Conditionally render Footer */}
      {!shouldHideHeaderFooter && <Footer />}
    </div>
  );
}

// Wrapper component for Router context
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;

