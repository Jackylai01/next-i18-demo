import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function HomePage() {
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
          <li>{t('navbar.home')}</li>
          <Link href='/about'>
            <li>{t('navbar.about')}</li>
          </Link>
          <Link href='/contact'>
            <li>{t('navbar.contact')}</li>
          </Link>
          <li>
            <button onClick={() => changeLanguage('en')}>EN</button>
            <button onClick={() => changeLanguage('zh')}>中文</button>
          </li>
        </ul>
      </nav>
      <h1>{t('welcome')}</h1>
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
