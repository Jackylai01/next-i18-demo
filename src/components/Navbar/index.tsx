// components/NavBar.tsx
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    router.push(router.pathname, router.asPath, { locale: lng });
  };

  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>{t('navbar.home')}</Link>
        </li>
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
  );
};

export default NavBar;
