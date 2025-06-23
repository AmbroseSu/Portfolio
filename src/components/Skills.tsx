import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Award, CheckCircle, Zap, Sparkles, Crown, Clock } from 'lucide-react';
import { skills } from '../data/portfolio';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'Expert':
        return <Star className="w-4 h-4 text-yellow-400 fill-current" />;
      case 'Advanced':
        return <Award className="w-4 h-4 text-blue-400" />;
      case 'Intermediate':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'Beginner':
        return <Sparkles className="w-4 h-4 text-purple-400" />;
      case 'Master':
        return <Crown className="w-4 h-4 text-orange-500" />;
      case 'Learning':
      case 'In Progress':
        return <Clock className="w-4 h-4 text-gray-400 animate-pulse" />;
      default:
        return <Zap className="w-4 h-4 text-gray-400" />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Advanced':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Intermediate':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Beginner':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Master':
        return 'bg-orange-500/20 text-orange-500 border-orange-500/30';
      case 'Learning':
      case 'In Progress':
        return 'bg-gray-500/10 text-gray-400 border-gray-400/20';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };
  const chunkArray = (array: any[], size: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Crafting exceptional digital experiences with cutting-edge technologies
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skills.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <motion.button
                key={category.category}
                onClick={() => setActiveCategory(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 ${activeCategory === index
                  ? 'bg-gradient-to-r from-primary-500 to-purple-500 text-white shadow-lg shadow-primary-500/25'
                  : 'glass text-gray-300 hover:text-white hover:bg-white/20'
                  }`}
              >
                <CategoryIcon className="w-5 h-5" />
                <span className="font-medium">{category.category}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            {chunkArray(skills[activeCategory].items, 5).map((group, groupIndex) => (
              <div key={groupIndex} className="flex justify-center gap-6 flex-wrap">
                {group.map((skill, index) => {
                  const SkillIcon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className="w-[220px] relative group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
                        className="glass rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer relative overflow-hidden"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
                        <motion.div
                          whileHover={{
                            rotate: [0, -10, 10, -10, 0],
                            scale: 1.2,
                          }}
                          transition={{ duration: 0.5 }}
                          className="relative z-10 mb-4"
                        >
                          <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                            <SkillIcon className="w-8 h-8 text-white" />
                          </div>
                        </motion.div>
                        <h3 className="text-lg font-semibold text-white mb-3 relative z-10">
                          {skill.name}
                        </h3>
                        <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full border text-sm font-medium mb-3 ${getLevelColor(skill.level)} relative z-10`}>
                          {getLevelIcon(skill.level)}
                          <span>{skill.level}</span>
                        </div>

                        {/* Hover Card */}
                        <AnimatePresence>
                          {hoveredSkill === skill.name && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.9 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.9 }}
                              className="absolute inset-x-0 bottom-0 bg-black rounded-b-2xl p-4 border-t border-white/10 z-20"
                            >
                              <div className="space-y-2 text-sm">
                                <div className="flex justify-between items-center">
                                  <span className="text-gray-400">Experience:</span>
                                  <span className="text-white font-medium">{skill.experience}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-gray-400">Projects:</span>
                                  <span className="text-white font-medium">{skill.projects}</span>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Particles */}
                        <motion.div
                          className="absolute inset-0 pointer-events-none"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-white rounded-full"
                              style={{
                                left: `${20 + i * 30}%`,
                                top: `${20 + i * 20}%`,
                              }}
                              animate={{
                                y: [-10, -20, -10],
                                opacity: [0, 1, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.5,
                              }}
                            />
                          ))}
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>


        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I'm passionate about modern backend development,
              continuously exploring new technologies, frameworks,
              and patterns to build high-performance, scalable, and secure systems. 
              From RESTful APIs to event-driven architectures and microservices, 
              I focus on writing clean, maintainable code and designing systems that support real-world demands and seamless integrations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;