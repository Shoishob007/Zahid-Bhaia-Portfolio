'use client';
import { getId } from '@/lib/utils/helper';

import { ListItem, ShowLottie, SkillIcon } from '@/components';

import { motion } from 'framer-motion';

const Skill = ({ lottie, title, skills, points, className = '', ...rest }) => {
  return (
    <motion.div
      className={`flex gap-4 sm:gap-6 flex-col lg:flex-row items-center justify-center ${className}`}
      {...rest}
    >
      {/* Left */}
      <div className="space-y-4 lg:w-4/5">
        <h3 className="mb-5 text-2xl text-center capitalize sm:text-2xl">
          {title}
        </h3>

        <div key={getId()} className="flex flex-wrap justify-center gap-2">
          {skills.map(({ name, icon }) => (
            <SkillIcon key={getId()} src={icon} name={name} />
          ))}
        </div>

        <ul className="space-y-2 text-[15px]">
          {points.map((point) => (
            <ListItem key={getId()}>{point}</ListItem>
          ))}
        </ul>
      </div>
      {/* Right */}
      <ShowLottie path={lottie} className="md:min-h-[400px] md:min-w-[400px]" />
    </motion.div>
  );
};

export default Skill;
