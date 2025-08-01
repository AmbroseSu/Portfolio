// import React from 'react';
// import { motion } from 'framer-motion';
// import { ExternalLink, Github } from 'lucide-react';
// import { projects } from '../data/portfolio';

// const Projects = () => {
//   return (
//     <section id="projects" className="py-20 relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-dark-900 to-dark-800"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             <span className="gradient-text">Featured Projects</span>
//           </h2>
//           <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//             A showcase of my recent work and passion projects
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className="group glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500"
//             >
//               <div className="relative overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                 <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <motion.a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="p-2 bg-dark-900/80 backdrop-blur-lg rounded-full hover:bg-dark-900 transition-colors"
//                   >
//                     <Github className="w-5 h-5" />
//                   </motion.a>
//                   <motion.a
//                     href={project.demo}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="p-2 bg-dark-900/80 backdrop-blur-lg rounded-full hover:bg-dark-900 transition-colors"
//                   >
//                     <ExternalLink className="w-5 h-5" />
//                   </motion.a>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary-500 transition-colors">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-400 mb-4 leading-relaxed">
//                   {project.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.tech.map((tech, techIndex) => (
//                     <motion.span
//                       key={tech}
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       transition={{ duration: 0.3, delay: (index * 0.2) + (techIndex * 0.1) }}
//                       viewport={{ once: true }}
//                       className="px-3 py-1 bg-primary-500/20 text-primary-400 text-sm rounded-full border border-primary-500/30"
//                     >
//                       {tech}
//                     </motion.span>
//                   ))}
//                 </div>

//                 <div className="flex space-x-4">
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="btn-secondary flex-1 text-center"
//                   >
//                     <Github className="inline-block w-4 h-4 mr-2" />
//                     Code
//                   </a>
//                   <a
//                     href={project.demo}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="btn-primary flex-1 text-center"
//                   >
//                     <ExternalLink className="inline-block w-4 h-4 mr-2" />
//                     Demo
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolio';

const Projects = () => {
  const [openPopupIndex, setOpenPopupIndex] = useState<number | null>(null);
  const popupRef = useRef(null);
  const [showNotice, setShowNotice] = useState(false);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        popupRef.current &&
        !(popupRef.current as HTMLElement).contains(e.target as Node)
      ) {
        setOpenPopupIndex(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCodeClick = (project: any, index: number) => {
    const githubLinks = project.github;
    const allNull =
      !githubLinks ||
      Object.values(githubLinks).every(
        (link) => link === null || link === '' || link === undefined
      );

    if (allNull) {
      setShowNotice(true); // Hiển thị thông báo
      return;
    }

    setOpenPopupIndex(openPopupIndex === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-dark-900 to-dark-800"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and passion projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 relative"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-500/20 text-primary-400 text-sm rounded-full border border-primary-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 relative">
                  <div className="relative flex-1">
                    {/* <button
                      onClick={() =>
                        setOpenPopupIndex(openPopupIndex === index ? null : index)
                      }
                      className="btn-secondary w-full flex items-center justify-center"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </button> */}
                    <button
                      onClick={() => handleCodeClick(project, index)}
                      className="btn-secondary w-full flex items-center justify-center"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </button>

                    {/* Popup */}
                    {openPopupIndex === index && typeof project.github === 'object' && (
                      <div
                        className="absolute bottom-full mb-2 left-0 w-full bg-dark-800 border border-dark-600 rounded-md shadow-lg z-20 py-2"
                        ref={popupRef} // 👈 Đưa ref vào đúng phần popup
                      >
                        {Object.entries(project.github).map(
                          ([type, url]) =>
                            url && (
                              <a
                                key={type}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-4 py-2 text-sm text-white hover:bg-dark-700 transition"
                                onClick={(e) => e.stopPropagation()} // Ngăn việc click bubbling nếu cần
                              >
                                <Github className="w-4 h-4 mr-4 ml-8" />
                                <span className="flex-1">{type.charAt(0).toUpperCase() + type.slice(1)} Code</span>
                              </a>
                            )
                        )}
                      </div>
                    )}
                  </div>


                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1 text-center"
                    >
                      <ExternalLink className="inline-block w-4 h-4 mr-2" />
                      Demo
                    </a>
                  ) : (
                    <button
                      disabled
                      className="btn-primary flex-1 text-center opacity-50 cursor-not-allowed"
                    >
                      <ExternalLink className="inline-block w-4 h-4 mr-2" />
                      Demo
                    </button>
                  )}

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {showNotice && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-dark-800 border border-dark-600 p-6 rounded-lg max-w-sm text-center">
            <h3 className="text-xl font-semibold text-white mb-4">
              Source Code Unavailable
            </h3>
            <p className="text-gray-400 mb-6">
              This is a private company project. Source code cannot be disclosed.
            </p>
            <button
              onClick={() => setShowNotice(false)}
              className="btn-primary w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
