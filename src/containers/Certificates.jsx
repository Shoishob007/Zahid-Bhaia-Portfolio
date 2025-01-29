/* eslint-disable simple-import-sort/imports */
'use client';

import certificateSection from '@/lib/content/certificates';
import { Wrapper } from '@/components';
import { getSectionAnimation } from '@/styles/animations';
import Certificate from '../components/ui/Certificate';

const Certificates = () => {
  return (
    <Wrapper id="certificates" {...getSectionAnimation}>
      <div className="mb-20 space-y-3 text-center lg:text-left">
        <h2 className="heading-secondary !mb-0 capitalize text-center">
          {certificateSection.title}
        </h2>

        <p className="font-mono lg:hidden text-accent capitalize text-xs lg:mb-2.5">
          Certificate and Licences
        </p>
      </div>

      <div className="space-y-10 md:space-y-16 lg:space-y-28">
        {certificateSection.certificates.map((certificate, i) => (
          <Certificate
            key={certificate.id}
            align={i % 2 === 0 ? 'right' : 'left'}
            {...certificate}
            {...getSectionAnimation}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Certificates;
