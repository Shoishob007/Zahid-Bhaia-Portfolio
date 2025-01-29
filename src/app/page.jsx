/* eslint-disable simple-import-sort/imports */
import {
  About,
  Contact,
  Experience,
  FeaturedProjects,
  Hero,
  Layout,
  Projects,
  Skills,
  Education,
  Certificates,
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
        {/* <FeaturedProjects /> */}
        {/* <Projects /> */}
        <Certificates/>
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
