import Banner from '@components/Banner';
import Footer from '@components/Footer';
import LinkActivity from '@components/LinkActivity';
import MainActivity from '@components/MainActivity';
import MainContent from '@components/MainContent';
import Midsummer from '@components/Midsummer';
import NavBar from '@components/Navbar';
import { GetStaticPropsContext } from 'next';
import { getI18nProps } from '../helpers/i18n';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <MainContent />
      <Banner />
      <LinkActivity />
      <MainActivity />
      <Midsummer />
      <Footer />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return await getI18nProps(context);
}
