/* eslint-disable simple-import-sort/imports */
'use client';

import { educationSection } from '../lib/content/education';
import { getSectionAnimation } from '../styles/animations';
import { motion } from 'framer-motion';
import EduTabList from '../components/lists/EduTabList';

const Education = () => {
  return (
    <motion.section
      id="education"
      className="max-w-3xl py-20 mx-auto"
      {...getSectionAnimation}
    >
      <h2 className="heading-secondary text-center">
        {educationSection.title}
      </h2>
      <EduTabList institutions={educationSection.institutions} />
    </motion.section>
  );
};

export default Education;
