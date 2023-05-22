import Link from 'next/link';
import { useLanguage } from 'src/hook/useLanguage';

const NavBar = () => {
  const { t, changeLanguage } = useLanguage();

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
