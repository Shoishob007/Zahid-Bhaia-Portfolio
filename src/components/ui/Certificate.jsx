import { blurImageURL } from '@/lib/utils/config';
import { cn } from '@/lib/utils/helper';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Certificate = ({
  img,
  name,
  description,
  issuer,
  validation,
  issued,
  align = 'left',
  ...rest
}) => {
  return (
    <>
      {/* Desktop View */}
      <motion.div
        className={cn(
          'relative hidden lg:block min-h-[280px] sm:min-h-[380px] h-full overflow-hidden lg:overflow-visible rounded-lg lg:rounded-xl shadow-lg lg:shadow-none text-center lg:text-right bg-white dark:bg-slate-800',
          align === 'left' && 'lg:text-left'
        )}
        {...rest}
      >
        <div
          className={cn(
            'w-full lg:max-w-[50%] absolute inset-0 h-full -z-20 lg:z-0 lg:object-contain rounded-lg overflow-hidden group',
            align === 'left' && 'ml-auto'
          )}
        >
          <Image
            src={img}
            alt={name}
            width={720}
            height={480}
            className="object-fit w-full h-full transition-transform duration-200 group-hover:scale-105"
            placeholder="blur"
            blurDataURL={blurImageURL}
          />
        </div>
        <div
          className={cn(
            'lg:max-w-[50%] space-y-2 lg:space-y-2 w-full h-full p-5 lg:p-0',
            'absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0',
            'lg:h-auto left-0 lg:left-auto top-0 right-auto lg:bg-none lg:text-inherit',
            'flex flex-col justify-end',
            'bg-gradient-to-t from-black/80 group-hover:from-accent group-focus:from-accent',
            align === 'left' && 'lg:left-0'
          )}
        >
          <div className="px-5">
            <h2 className="heading-tertiary !text-white lg:!text-dark-2 !font-semibold lg:!font-normal !normal-case">
              <p
                className="block duration-200 hover:text-accent"
                target="_blank"
              >
                {name}
              </p>
            </h2>
          </div>

          <div className="rounded-sm lg:bg-bg-secondary lg:p-5">
            <div
              className={cn(
                'lg:max-w-sm text-dark-1 lg:text-inherit text-sm lg:text-base',
                align === 'right' && 'ml-auto'
              )}
            >
              <p className="text-dark-1">{description}</p>
              {validation && (
                <p className="text-sm text-dark-1 mt-2">
                  <strong>Validation:</strong> {validation}
                </p>
              )}
              {issued && (
                <p className="text-sm text-dark-1 mt-2">
                  <strong>Issued:</strong> {issued}
                </p>
              )}
              {issuer && (
                <p className="text-sm text-dark-1 mt-2">
                  <strong>Issuer:</strong> {issuer}
                </p>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile View */}
      <motion.div
        className={cn(
          'relative lg:hidden min-h-[300px] h-full rounded-xl shadow-lg lg:shadow-none text-center'
        )}
        {...rest}
      >
        {/* Image Header */}
        <header className={cn('w-full')}>
          <Image
            src={img}
            alt={name}
            width={720}
            height={480}
            className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-105"
            placeholder="blur"
            blurDataURL={blurImageURL}
          />
        </header>

        <div className={cn('bg-bg-secondary p-5 space-y-2')}>
          <div>
            <h2 className="heading-tertiary !text-white !font-semibold !normal-case">
              <p
                className="block duration-200 hover:text-accent"
                target="_blank"
              >
                {name}
              </p>
            </h2>
          </div>

          <div className={cn('text-dark-1 space-y-2 text-sm')}>
            <p className="text-base text-dark-1">{description}</p>
            {validation && (
              <p className="text-sm text-dark-1 mt-2">
                <strong>Validation:</strong> {validation}
              </p>
            )}
            {issued && (
              <p className="text-sm text-dark-1 mt-2">
                <strong>Issued:</strong> {issued}
              </p>
            )}
            {issuer && (
              <p className="text-sm text-dark-1 mt-2">
                <strong>Issuer:</strong> {issuer}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Certificate;