import React from 'react';
import { Brain, MessageCircle, AArrowDown as SOS, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ onStartQuiz }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 2,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-pearl via-oat to-butter min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold leading-tight"
                variants={itemVariants}
              >
                <motion.span 
                  className="bg-gradient-to-r from-turmeric to-radicchio bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  Your Mental Health
                </motion.span>
                <br />
                <span className="text-gray-800">Matters Most</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 max-w-lg leading-relaxed"
                variants={itemVariants}
              >
                Supporting students with AI-powered tools, verified experts, and institutional insights 
                while maintaining complete privacy and confidentiality.
              </motion.p>
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <motion.button 
                onClick={onStartQuiz}
                className="group px-8 py-4 bg-turmeric text-moss rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={pulseAnimation}
              >
                <Brain className="w-5 h-5" />
                <span>Take Wellbeing Test</span>
              </motion.button>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-6 text-sm text-gray-500"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span>24/7 Support Available</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <SOS className="w-4 h-4 text-red-400" />
                </motion.div>
                <span>Emergency SOS Button</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="relative">
            <motion.div 
              className="relative space-y-6"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* AI Support Chat Card */}
              <motion.div
                className="relative"
                variants={cardVariants}
                animate={floatingAnimation}
              >
                <motion.div 
                  className="bg-white rounded-3xl p-8 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 cursor-pointer"
                  whileHover={{ 
                    rotate: 0,
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                  }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <motion.div 
                        className="w-12 h-12 bg-cherry rounded-full flex items-center justify-center"
                        animate={{
                          boxShadow: [
                            "0 0 0 0 rgba(220, 38, 127, 0.7)",
                            "0 0 0 10px rgba(220, 38, 127, 0)",
                            "0 0 0 0 rgba(220, 38, 127, 0)"
                          ]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity
                        }}
                      >
                        <MessageCircle className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-gray-800">AI Support Chat</h3>
                        <p className="text-sm text-gray-500">Available 24/7</p>
                      </div>
                    </div>
                    <motion.div 
                      className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-4"
                      whileHover={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
                    >
                      <p className="text-gray-700 text-sm">
                        "How are you feeling today? I'm here to listen and provide support whenever you need it."
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Meditation Card */}
              <motion.div
                className="relative"
                variants={cardVariants}
                animate={{
                  y: [5, -5, 5],
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }
                }}
              >
                <motion.div 
                  className="bg-white rounded-3xl p-8 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 ml-8 cursor-pointer"
                  whileHover={{ 
                    rotate: 0,
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                  }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <motion.div 
                        className="w-12 h-12 bg-turmeric rounded-full flex items-center justify-center"
                        animate={{
                          rotate: [0, 360],
                          transition: {
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                          }
                        }}
                      >
                        <Leaf className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Start Meditating</h3>
                        <p className="text-sm text-gray-500">Find inner peace</p>
                      </div>
                    </div>
                    <motion.div 
                      className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-4"
                      whileHover={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
                    >
                      <p className="text-gray-700 text-sm">
                        "In the midst of movement and chaos, keep stillness inside of you. Take a moment to breathe and center yourself."
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;