import { resumeFileName } from '@/lib/utils/config';

export const navbarSection = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'education', url: '/#education' },
    { name: 'projects', url: '/#projects' },
    { name: 'certificates', url: '/#certificates' },
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};
