'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-2 lg:w-3/5">
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
          </p>
          <p>
            I specialize in building strong relationships with clients,
            conducting market research, and identifying opportunities for
            improvement. My goal is to leverage innovative solutions to meet
            diverse client needs and contribute to our overall success.
          </p>
          <p>
            My main focus these days is to practice more of the corresponding
            skills and tools.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
