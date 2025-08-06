import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FaCalendarAlt, FaCalendarDay, FaCalendarWeek } from 'react-icons/fa';
import { motion } from 'framer-motion';

const YearCard = ({ year, icon, subjectKey, index }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/boards?subject=${subjectKey}&year=${year}`);
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
          className: `text-4xl transition-colors duration-300 text-purple-600 group-hover:text-purple-800`
        })}
      </div>
      <p className="mt-4 text-lg md:text-xl font-semibold text-gray-800 text-center group-hover:text-purple-600 transition-colors duration-300">
        {year}
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

const Years = () => {
  const [searchParams] = useSearchParams();
  const subjectKey = searchParams.get('subject');

  const years = [
    { year: 2025, icon: <FaCalendarAlt /> },
    { year: 2024, icon: <FaCalendarDay /> },
    { year: 2023, icon: <FaCalendarWeek /> },
    { year: 2022, icon: <FaCalendarAlt /> },
    { year: 2021, icon: <FaCalendarDay /> },
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
          Choose a year for <span className="font-semibold text-purple-700">{subjectKey ? subjectKey.replace('-', ' ').toUpperCase() : 'selected subject'}</span>.
        </p>
        <div className="mt-2 text-sm text-gray-500">
          <p>
            Made by <span className="font-semibold text-purple-700">TAMIM TAJWAR</span>
          </p>
          <p className="mt-1 font-medium text-red-500">(Beta Version)</p>
        </div>
      </motion.div>

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
          {years.map((yearData, index) => (
            <YearCard
              key={yearData.year}
              year={yearData.year}
              icon={yearData.icon}
              subjectKey={subjectKey}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Years;