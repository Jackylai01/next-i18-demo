import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import NavBar from '../components/Navbar/index';
import { getI18nProps } from '../helpers/i18n';

export default function HomePage() {
  const { t } = useTranslation('common');

  return (
    <div>
      <NavBar />
      <h1>{t('welcome')}</h1>
    </div>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return await getI18nProps(context);
}