import { Icon } from '@iconify/react';

const SkillIcon = ({ src, name }) => {
  return (
    <div className="relative grid text-2xl rounded-full shadow-md bg-bg-secondary dark:shadow-xl h-10 w-10 sm:h-12 sm:w-12 place-items-center group">
      <Icon icon={src} width="24" height="24" />
      <div className="absolute invisible px-2 py-1 text-sm text-white capitalize duration-200 rounded opacity-0 w-max group-hover:opacity-100 group-hover:visible -top-8 bg-slate-900/75 dark:bg-slate-700/90 dark:text-slate-100">
        {name}
        <svg
          className="absolute left-0 w-full h-2 text-slate-900/75 dark:text-slate-700/90 top-full"
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
          xmlSpace="preserve"
        >
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
      </div>
    </div>
  );
};

export default SkillIcon;
