/* eslint-disable simple-import-sort/imports */
'use client';
import { heroSection } from '@/lib/content/hero';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';
import { author } from '@/lib/content/portfolio';
import { Button, Wrapper, AuthorImage } from '@/components';
import { slideUp } from '@/styles/animations';
import { motion } from 'framer-motion';

const Hero = () => {
  const { cta, subtitle, title, tagline, description, specialText } =
    heroSection;

  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

  const getAnimationDelay = (i, increment = 0.15) =>
    DEFAULT_ANIMATION_DELAY + increment * i;

  return (
    <Wrapper
      id="hero"
      className="flex flex-col justify-center h-full min-h-screen gap-4 mt-12 xs:gap-5 xs:mt-0 mx-auto w-full"
    >
      <motion.p
        variants={slideUp({ delay: getAnimationDelay(0) })}
        initial="hidden"
        animate="show"
        className="font-mono text-sm md:text-base text-accent mt-8 md:mt-5"
      >
        {subtitle}
      </motion.p>

      <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
        {/* Text Content */}
        <div className="max-w-5xl text-2xl font-bold md:text-3xl">
          <motion.h1
            variants={slideUp({ delay: getAnimationDelay(1) })}
            initial="hidden"
            animate="show"
            className="text-slate-900 dark:text-slate-200 capitalize mb-2 leading-[1.1]"
          >
            {title}
          </motion.h1>
          <motion.h1
            variants={slideUp({ delay: getAnimationDelay(2) })}
            initial="hidden"
            animate="show"
            className="leading-[1.2]"
          >
            {tagline}
          </motion.h1>

          <motion.p
            variants={slideUp({ delay: getAnimationDelay(3) })}
            initial="hidden"
            animate="show"
            className="max-w-2xl text-base md:text-lg mt-4 font-semibold"
          >
            {description}
          </motion.p>

          <motion.p
            variants={slideUp({ delay: getAnimationDelay(4) })}
            initial="hidden"
            animate="show"
            className="font-mono text-xs md:text-sm text-accent mt-4"
          >
            {specialText}
          </motion.p>

          {cta && (
            <Button
              size="lg"
              type="link"
              variants={slideUp({ delay: getAnimationDelay(5) })}
              initial="hidden"
              animate="show"
              href={cta?.url ?? '#'}
              className={`mt-3 xs:mt-5 md:mt-6 ${
                cta.hideInDesktop ? 'md:show' : ''
              }`}
              sameTab={cta?.sameTab}
            >
              {cta.title}
            </Button>
          )}
        </div>

        {/* Image */}
        <motion.div
          variants={slideUp({ delay: getAnimationDelay(6) })}
          initial="hidden"
          animate="show"
          className="flex-shrink-0"
        >
          <AuthorImage src={author.img} alt={author.name} />
        </motion.div>
      </div>
    </Wrapper>
  );
};

export default Hero;