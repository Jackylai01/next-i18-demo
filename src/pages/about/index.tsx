import NavBar from '@/components/Navbar';
import { getI18nProps } from '@/helpers/i18n';
import { GetStaticPropsContext } from 'next';
import { useLanguage } from 'src/hook/useLanguage';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div>
      <NavBar />
      <h1>{t('about.title')}</h1>
      <p>{t('about.description')}</p>
    </div>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return await getI18nProps(context);
}
