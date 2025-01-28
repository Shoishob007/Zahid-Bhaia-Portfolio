import { motion } from 'framer-motion';

const Wrapper = ({
  children,
  as = 'section',
  className = '',
  id = '',
  animate = true,
  ...rest
}) => {
  if (animate) {
    const MotionTag = motion(as);

    return (
      <MotionTag id={id} className={`py-16 md:py-20  ${className}`} {...rest}>
        {children}
      </MotionTag>
    );
  }

  if (as === 'section') {
    return (
      <motion.section
        id={id}
        className={`py-16 md:py-20 ${className}`}
        {...rest}
      >
        {children}
      </motion.section>
    );
  }

  const CustomTag = `${as}`;

  return (
    <CustomTag id={id} className={`py-16 md:py-20  ${className}`} {...rest}>
      {children}
    </CustomTag>
  );
};

export default Wrapper;
