
// import React, { useState, useEffect } from 'react'; 
// import { Eye, EyeOff } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const AuthPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLogin, setIsLogin] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       image: "ocean.jpg",
//       title: "State of the Art ,",
//       subtitle: "Buoy Monitoring System"
//     },
//     {
//       image: "/api/placeholder/1200/900",
//       title: "Share Your Stories,",
//       subtitle: "Connect with Others"
//     },
//     {
//       image: "/api/placeholder/1200/900",
//       title: "Document Life,",
//       subtitle: "One Click at a Time"
//     }
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="w-full h-screen flex">
//       {/* Left Side - Slideshow Section */}
//       <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 w-full h-full transform transition-transform duration-1000 ease-in-out ${
//               index === currentSlide 
//                 ? 'translate-x-0' 
//                 : index < currentSlide 
//                   ? '-translate-x-full' 
//                   : 'translate-x-full'
//             }`}
//           >
//             <div className="absolute inset-0 ">
//               <img 
//                 src={slide.image}
//                 alt={`Slide ${index + 1}`}
//                 className="absolute inset-0 w-full h-full object-cover mix-blend-overlay "
//               />
//             </div>
//             <div className="relative h-full flex flex-col justify-end p-12 text-white">
//               <h2 className="text-4xl font-semibold mb-2 transform transition-all duration-700 delay-300"
//                   style={{
//                     opacity: index === currentSlide ? 1 : 0,
//                     transform: `translateY(${index === currentSlide ? '0' : '20px'})`
//                   }}>
//                 {slide.title}
//               </h2>
//               <h2 className="text-4xl font-semibold mb-8 transform transition-all duration-700 delay-500"
//                   style={{
//                     opacity: index === currentSlide ? 1 : 0,
//                     transform: `translateY(${index === currentSlide ? '0' : '20px'})`
//                   }}>
//                 {slide.subtitle}
//               </h2>
//             </div>
//           </div>
//         ))}
//         <div className="absolute bottom-12 left-12 flex gap-3">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-12 h-1.5 rounded-full transition-all duration-300 ${
//                 index === currentSlide ? 'bg-white' : 'bg-white/50'
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Right Side - Form Section */}
//       <div className="w-full lg:w-1/2 flex flex-col h-full bg-white">
//         <div className="flex justify-between items-center p-6">
//             {/* Image at the top right */}
//           <img
//             src="GaiaLogo.jpg" // Replace with your image URL
//             alt="Top Right Image"
//             className="w-90 h-16 object-cover "
//           />
//           <Link to="/">
//             <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-300 transition">
//               Back to HomePage
//             </button>
//           </Link>

//         </div>

//         <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-24">
//           <div className="w-full max-w-xl mx-auto">
//             <h1 className="text-3xl font-bold text-gray-800 mb-10">
//               {isLogin ? 'Welcome back' : 'Create an account'}
//             </h1>

//             <form className="space-y-6">
//               {!isLogin && (
//                 <div className="space-y-6">
//                   <input
//                     type="text"
//                     placeholder="First name"
//                     className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Last name"
//                     className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
//                   />
//                 </div>
//               )}

//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
//               />

//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Password"
//                   className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                 >
//                   {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
//                 </button>
//               </div>

//               {!isLogin && (
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     id="terms"
//                     className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                   />
//                   <label htmlFor="terms" className="ml-3 text-gray-600">
//                     I agree to the Terms & Conditions
//                   </label>
//                 </div>
//               )}

//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition duration-200"
//               >
//                 {isLogin ? 'Sign in' : 'Create account'}
//               </button>
//             </form>

//             <div className="mt-8 space-y-6">
//               <div className="relative">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-gray-200"></div>
//                 </div>
//                 <div className="relative flex justify-center text-sm">
//                   <span className="px-4 bg-white text-gray-500">Or continue with</span>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <button
//                   type="button"
//                   className="flex items-center justify-center gap-3 py-4 px-6 border border-gray-300 rounded-xl hover:bg-gray-50 transition duration-200"
//                 >
//                   <img
//                     src="/api/placeholder/24/24"
//                     alt="Google"
//                     className="w-6 h-6"
//                   />
//                   Google
//                 </button>
//                 <button
//                   type="button"
//                   className="flex items-center justify-center gap-3 py-4 px-6 border border-gray-300 rounded-xl hover:bg-gray-50 transition duration-200"
//                 >
//                   <img
//                     src="/api/placeholder/24/24"
//                     alt="Apple"
//                     className="w-6 h-6"
//                   />
//                   Apple
//                 </button>
//               </div>

//               <div className="text-center">
//                 {isLogin ? (
//                   <p className="text-gray-600">
//                     Don't have an account?{' '}
//                     <button
//                       type="button"
//                       onClick={() => setIsLogin(false)}
//                       className="text-blue-600 hover:text-blue-700 font-semibold"
//                     >
//                       Sign up
//                     </button>
//                   </p>
//                 ) : (
//                   <p className="text-gray-600">
//                     Already have an account?{' '}
//                     <button
//                       type="button"
//                       onClick={() => setIsLogin(true)}
//                       className="text-blue-600 hover:text-blue-700 font-semibold"
//                     >
//                       Log in
//                     </button>
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthPage;



import React, { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// Hardcoded credentials for testing
const VALID_CREDENTIALS = {
  email: "admin@example.com",
  password: "admin123"
};

const Signin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const slides = [
    {
      image: "ocean.jpg",
      title: "State of the Art ,",
      subtitle: "Buoy Monitoring System"
    },
    {
      image: "data_analytics.jpg",
      title: "Real Time Monitoring,",
      subtitle: "Prosessional Dashboard for Analytics"
    },
    {
      image: "slide.png",
      title: "Powered By ,",
      subtitle: "GAIA Boards Variant"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.email === VALID_CREDENTIALS.email && 
        formData.password === VALID_CREDENTIALS.password) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('isAuthenticated') === 'true') {
      navigate('/dashboard');
    }
  }, [navigate]);

  return (
    <div className="w-full h-screen flex">
      {/* Left Side - Slideshow Section */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transform transition-transform duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'translate-x-0' 
                : index < currentSlide 
                  ? '-translate-x-full' 
                  : 'translate-x-full'
            }`}
          >
            <div className="absolute inset-0">
              <img 
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
              />
            </div>
            <div className="relative h-full flex flex-col justify-end p-12">
              {/* Added gradient background for text area */}
              <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/50 to-transparent" />
              {/* Text content positioned above gradient */}
              <div className="relative z-10 text-white">
                <h2 className="text-4xl font-semibold mb-2 text-shadow">{slide.title}</h2>
                <h2 className="text-4xl font-semibold mb-8 text-shadow">{slide.subtitle}</h2>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-12 left-12 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col h-full bg-white">
        <div className="flex justify-between items-center p-6">
          <img
            src="GaiaLogo.jpg"
            alt="Logo"
            className="w-90 h-16 object-cover"
          />
          <Link to="/">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-300 transition">
              Back to HomePage
            </button>
          </Link>
        </div>

        <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-24">
          <div className="w-full max-w-xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-10">
              Welcome back
            </h1>

            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition duration-200"
              >
                Sign in
              </button>
            </form>

            <div className="mt-4 text-center text-sm text-gray-600">
              <p>Demo Credentials:</p>
              <p>Email: {VALID_CREDENTIALS.email}</p>
              <p>Password: {VALID_CREDENTIALS.password}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;