import Head from 'next/head';
import Index from '../components/LandingPage';
import LandingPage from '../components/LandingPage/LandingPage';

const Home = () => (
  <div className="bg-white">
    <Head>
      <title>Hirable</title>
    </Head>
    <Index>
      <LandingPage />
    </Index>
  </div>
);

export default Home;
