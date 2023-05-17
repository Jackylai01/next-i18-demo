import NavBar from '@/components/Navbar';
import { getI18nProps } from '@/helpers/i18n';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';

export default function ContactPage() {
  const { t } = useTranslation('common');

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
