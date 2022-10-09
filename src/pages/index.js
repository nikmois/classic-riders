import Activities from '../components/Activities/Activities';
import Hero from '../components/Hero/Hero';
import Museum from '../components/Museum/Museum';
import News from '../components/News/News';
import Partners from '../components/Partners/Partners';
import Contact from '../components/Contact/Contact';
import { Layout } from '../layout/Layout';

const Home = () => {
  return (
    <>
    <Hero />
    <Layout>
      <Museum />
    </Layout>
      <News />
      <Activities />
      <Partners />
      <Contact/>
    </>
  );
};

export default Home;
