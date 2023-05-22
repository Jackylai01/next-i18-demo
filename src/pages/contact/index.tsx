import NavBar from '@/components/Navbar';
import { getI18nProps } from '@/helpers/i18n';
import { GetStaticPropsContext } from 'next';
import { useLanguage } from 'src/hook/useLanguage';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div>
      <NavBar />
      <h1>{t('contact.title')}</h1>
      <p>{t('contact.description')}</p>
    </div>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return await getI18nProps(context);
}
