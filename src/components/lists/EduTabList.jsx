'use client';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth, getId } from '@/lib/utils/helper';

import { ListItem } from '@/components';

import { useState } from 'react';

const EduTabList = ({ institutions }) => {
  const [activeInstitution, setActiveInstitution] = useState(0);
  const windowWidth = useWindowWidth();

  const { name, degree, major, started, upto, description } =
    institutions[activeInstitution];

  const sm = getBreakpointsWidth('sm');

  const sliderStyle =
    windowWidth <= sm
      ? {
          left: `calc(${activeInstitution}*120px)`,
        }
      : {
          top: `calc(${activeInstitution}*3rem)`,
        };

  return (
    <div className="flex flex-col sm:flex-row text-sm md:text-base gap-6 md:gap-10 min-h-[250px]">
      {/* Sidebar */}
      <div className="font-mono text-xs sm:text-sm relative flex justify-start sm:flex-col overflow-scroll sm:overflow-auto sm:min-w-[220px] gap-2">
        {institutions.map(({ name }, i) => (
          <button
            key={getId()}
            className={`h-10 min-w-[120px] sm:px-3 sm:!text-left hover:bg-accent-light hover:text-accent focus:outline-none focus:bg-accent-light focus:text-accent ${
              i === activeInstitution ? 'text-accent' : ''
            }`}
            onClick={() => setActiveInstitution(i)}
          >
            {name}
          </button>
        ))}
        {/* Slider */}
        <div className="absolute h-0.5 w-full sm:w-0.5 sm:h-full rounded-full bottom-0 sm:inset-0 left-0 bg-dark-3"></div>
        <div
          style={sliderStyle}
          className="absolute h-0.5 w-[120px] sm:w-0.5 sm:h-10 rounded-full bg-accent bottom-0 left-0 sm:inset-0 transition-all duration-250 delay-100 in-scroll"
        ></div>
      </div>

      <div key={getId()} className="p-1 space-y-5">
        <div className="space-y-1">
          <h3 className="text-lg font-medium capitalize text-dark-2">
            {degree}{' '}
            {major && <span className="text-accent">in {major}</span>}
          </h3>
          <p className="font-mono text-xs capitalize">
            <>
              {started} - {upto}
            </>
          </p>
        </div>

        <ul className="space-y-2 text-[15px]">
          <ListItem>{description}</ListItem>
        </ul>
      </div>
    </div>
  );
};

export default EduTabList;