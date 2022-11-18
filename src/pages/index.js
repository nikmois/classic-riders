import Hero from '../components/Hero/Hero';
import Museum from '../components/Museum/Museum';
import Partners from '../components/Partners/Partners';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';
import { Layout } from '../layout/Layout';
import dynamic from "next/dynamic";
const News = dynamic(() => import("../components/News/News"));
const Activities = dynamic(() => import("../components/Activities/Activities"));

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
      <Footer />
    </>
  );
};

export default Home;
