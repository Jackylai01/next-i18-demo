import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ContactPage() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    router.push(router.pathname, router.asPath, { locale: lng });
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href='/'>{t('navbar.home')}</Link>
          </li>
          <li>
            <Link href='/about'>{t('navbar.about')}</Link>
          </li>
          <li>{t('navbar.contact')}</li>
          <li>
            <button onClick={() => changeLanguage('en')}>EN</button>
            <button onClick={() => changeLanguage('zh')}>中文</button>
          </li>
        </ul>
      </nav>
      <h1>{t('contact.title')}</h1>
      <p>{t('contact.description')}</p>
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
