import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFlask, FaAtom, FaCalculator, FaMicroscope, FaDna, FaSatelliteDish, FaTimes } from 'react-icons/fa';
import { GiNotebook, GiChemicalBolt } from 'react-icons/gi';
import { motion, AnimatePresence } from 'framer-motion';

const SubjectCard = ({ title, icon, subjectKey, index }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/years?subject=${subjectKey}`);
  };

  const getIconColor = () => {
    if (title.includes('Physics')) return 'text-blue-600 group-hover:text-blue-800';
    if (title.includes('Chemistry')) return 'text-teal-600 group-hover:text-teal-800';
    if (title.includes('Math')) return 'text-orange-600 group-hover:text-orange-800';
    if (title.includes('Biology')) return 'text-green-600 group-hover:text-green-800';
    return 'text-gray-600';
  };

  return (
    <motion.div
      onClick={handleClick}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="relative flex flex-col items-center p-6 bg-white rounded-xl shadow-lg cursor-pointer group border border-gray-200"
    >
      <div className="p-4 rounded-full bg-gray-100 group-hover:bg-purple-100 transition-colors duration-300">
        {React.cloneElement(icon, {
          className: `text-4xl transition-colors duration-300 ${getIconColor()}`
        })}
      </div>
      <p className="mt-4 text-lg md:text-xl font-semibold text-gray-800 text-center group-hover:text-purple-600 transition-colors duration-300">
        {title}
      </p>
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-purple-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </motion.div>
  );
};

const Subjects = () => {
  const [showNotice, setShowNotice] = useState(true);
  const subjects = [
    { title: 'Physics First Paper', icon: <FaAtom />, subjectKey: 'physics-1st' },
    { title: 'Physics Second Paper', icon: <FaSatelliteDish />, subjectKey: 'physics-2nd' },
    { title: 'Chemistry First Paper', icon: <FaFlask />, subjectKey: 'chemistry-1st' },
    { title: 'Chemistry Second Paper', icon: <GiChemicalBolt />, subjectKey: 'chemistry-2nd' },
    { title: 'Higher Math First Paper', icon: <FaCalculator />, subjectKey: 'math-1st' },
    { title: 'Higher Math Second Paper', icon: <GiNotebook />, subjectKey: 'math-2nd' },
    { title: 'Biology First Paper', icon: <FaMicroscope />, subjectKey: 'biology-1st' },
    { title: 'Biology Second Paper', icon: <FaDna />, subjectKey: 'biology-2nd' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-8 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          HSC MCQ <span className="text-purple-600">TestZone</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Choose a subject to start your MCQ test.
        </p>
        <div className="mt-2 text-sm text-gray-500">
          <p>
            Made by <span className="font-semibold text-purple-700">TAMIM TAJWAR</span>
          </p>
          <p className="mt-1 font-medium text-red-500">(Beta Version)</p>
        </div>
      </motion.div>

      <AnimatePresence>
        {showNotice && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-xl p-4 mb-8 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 rounded-lg shadow-md relative"
          >
            <div className="flex items-start">
              <span className="text-2xl mr-3">⚠️</span>
              <div className="flex-grow">
                <p className="font-bold">Notice:</p>
                <p className="mt-1">
                  The 2025 Biology First Paper and Second Paper questions of the Rajshahi Board have been added, as this is a beta version. More questions will be added in the future.
                </p>
              </div>
              <button
                onClick={() => setShowNotice(false)}
                className="ml-4 text-yellow-800 hover:text-yellow-900 transition-colors duration-200"
                aria-label="Close Notice"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="w-full max-w-5xl"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {subjects.map((subject, index) => (
            <SubjectCard
              key={subject.subjectKey}
              {...subject}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Subjects;