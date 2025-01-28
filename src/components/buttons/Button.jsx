'use client';
import { removeKeys } from '@/lib/utils/helper';

import { motion } from 'framer-motion';
import Link from 'next/link';

// For separating animation props from button props
const buttonProps = ['center', 'children', 'className', 'size', 'type', 'href'];

const Button = (props) => {
  const {
    className,
    children,
    type = 'button',
    size = 'sm',
    center = false,
  } = props;

  const classes = `${
    size === 'sm'
      ? 'p-2 px-4 text-sm border-[1.5px] '
      : 'text-sm p-4 px-6 border-2'
  } block ${
    center ? 'mx-auto' : ''
  } w-fit font-mono capitalize rounded border-accent text-accent hover:bg-accent-light focus:outline-none focus:bg-accent-light duration-150 cursor-pointer ${className}`;

  // TODO: Needs to improve this framer motion logic
  if (props.type === 'link') {
    const { sameTab, ...motionProps } = props;
    removeKeys(motionProps, buttonProps);

    return (
      <motion.span {...motionProps}>
        <Link
          className={classes}
          href={props.href}
          target={sameTab ? '_self' : '_blank'}
          rel="noopener noreferrer"
        >
          {children}
        </Link>
      </motion.span>
    );
  }

  if (type == 'button') {
    return (
      <button type={type} className={classes} onClick={props.onClick}>
        {children}
      </button>
    );
  }

  return <></>;
};

export default Button;
