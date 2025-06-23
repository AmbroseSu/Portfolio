// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

// const Hero = () => {
//   const [displayText, setDisplayText] = useState('');
//   const fullText = 'Building digital experiences that matter.';

//   useEffect(() => {
//     let index = 0;
//     const timer = setInterval(() => {
//       if (index < fullText.length) {
//         setDisplayText(fullText.slice(0, index + 1));
//         index++;
//       } else {
//         clearInterval(timer);
//       }
//     }, 50);

//     return () => clearInterval(timer);
//   }, []);

//   const scrollToProjects = () => {
//     const element = document.getElementById('projects');
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       {/* Background Animation */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.h1
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
//           >
//             <span className="text-white">Hi, I'm </span>
//             <span className="gradient-text">Cong Hieu</span>
//           </motion.h1>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 font-light"
//           >
//             Backend Developer
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="text-xl md:text-2xl text-gray-400 mb-12 h-8"
//           >
//             {displayText}
//             <span className="animate-pulse"></span>
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//             className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
//           >
//             <button
//               onClick={scrollToProjects}
//               className="btn-primary group flex items-center justify-center"
//             >
//               <span>View My Project</span>
//               {/* <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" /> */}
//             </button>

//             <div className="flex items-center space-x-4">
//               <motion.a
//                 href="https://github.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
//               >
//                 <Github className="w-6 h-6" />
//               </motion.a>
//               <motion.a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
//               >
//                 <Linkedin className="w-6 h-6" />
//               </motion.a>
//               <motion.a
//                 href="mailto:alex@example.com"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
//               >
//                 <Mail className="w-6 h-6" />
//               </motion.a>
//             </div>
//           </motion.div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 1.2 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         >
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="text-gray-400"
//           >
//             {/* <ArrowDown className="w-6 h-6" /> */}
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;




import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Facebook } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hello! I'm Cong Hieu, a dedicated Backend Developer with a solid background in building robust, scalable server-side applications. I specialize in designing clean APIs, optimizing database performance, and implementing secure, efficient backend logic. My passion lies in solving real-world problems through code, and I thrive in environments where performance, clarity, and reliability matter. Always eager to grow, I embrace new technologies and collaborate to bring impactful ideas to life.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-16 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 relative flex flex-col lg:flex-row items-center justify-between gap-2">
        {/* LEFT - Avatar */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-[500px] h-[500px] rounded-xl overflow-hidden border-4 border-primary-500 shadow-xl transform -translate-y-4 -mr-6"
        >
          <img
            src="../src/logo/CongHieu.jpg"
            alt="Cong Hieu Avatar"
            className="w-full h-full object-cover object-bottom scale-x-100 scale-y-100"
            style={{ imageRendering: 'auto' }}
          />
        </motion.div>

        {/* RIGHT - Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Hi, I'm <span className="gradient-text">Cong Hieu</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">Backend Developer</h2>
          <p className="text-xl text-gray-400 max-w-[550px] mb-8 break-words leading-relaxed">{displayText}<span className="animate-pulse">|</span></p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-8">
            <button
              onClick={scrollToProjects}
              className="btn-primary group flex items-center justify-center"
            >
              <span>View My Project</span>
            </button>

            <button
              onClick={() => window.location.href = '#contact'} // hoặc thực hiện một hành động khác
              className="btn-primary group flex items-center justify-center"
            >
              <span>Download CV</span>
            </button>

            <div className="flex items-center space-x-4">
              <motion.a href="https://github.com/AmbroseSu" target="_blank" whileHover={{ scale: 1.1 }} className="p-3 bg-white/10 rounded-full hover:bg-white/20">
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/ha-cong-hieu/" target="_blank" whileHover={{ scale: 1.1 }} className="p-3 bg-white/10 rounded-full hover:bg-white/20">
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a href="mailto:haconghieu2610@gmail.com" whileHover={{ scale: 1.1 }} className="p-3 bg-white/10 rounded-full hover:bg-white/20">
                <Mail className="w-6 h-6" />
              </motion.a>
              <motion.a href="https://www.facebook.com/ambrosesu47" target="_blank" whileHover={{ scale: 1.1 }} className="p-3 bg-white/10 rounded-full hover:bg-white/20">
                <Facebook className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

