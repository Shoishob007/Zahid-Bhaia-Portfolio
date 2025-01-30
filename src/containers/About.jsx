/* eslint-disable simple-import-sort/imports */
'use client';
import { aboutSection } from '@/lib/content/about';
import { getId } from '@/lib/utils/helper';
import { Link, ListItem, Wrapper } from '@/components';
import { getSectionAnimation } from '@/styles/animations';
import { useEffect, useState } from 'react';

const About = () => {
  const { title, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary text-center">{title}</h2>
      <main className="w-full">
        <div className="space-y-2 text-center">
          <p>
            My name is Zahid Hossain, currently working as First Assistant Vice
            President at{' '}
            <Link
              href="https://fintechhub.com.bd/"
              target="_blank"
              className="text-accent"
            >
              Fintech Hub Limited
            </Link>
            .<br /> In my role, I develop and implement marketing strategies
            that enhance client engagement and drive business growth across
            various sectors.
            I specialize in building strong relationships with clients,
            conducting market research, and identifying opportunities for
            improvement. My goal is to leverage innovative solutions to meet
            diverse client needs and contribute to our overall success.
            My main focus these days is to practice more of the corresponding
            skills and tools.
          </p>

          {list && (
            <div className='!mt-6'>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm items-center justify-center mx-auto mt-2">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;