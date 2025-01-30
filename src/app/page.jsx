/* eslint-disable simple-import-sort/imports */
import {
  About,
  Contact,
  Experience,
  Hero,
  Layout,
  Skills,
  Education,
  Certificates,
  Projects,
} from '@/containers';

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certificates />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
