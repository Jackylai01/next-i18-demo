import Carousel from '@components/Carousel';
import Footer from '@components/Footer';
import MainContent from '@components/Main';
import NavBar from '@components/Navbar';
import { GetStaticPropsContext } from 'next';
import { getI18nProps } from '../helpers/i18n';

export default function HomePage() {
  return (
    <>
      <div style={{ minHeight: '100vh' }}>
        <NavBar />
        <MainContent />
      </div>
      <Carousel />
      <Footer />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return await getI18nProps(context);
}
