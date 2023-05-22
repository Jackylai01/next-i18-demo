import Logo from '@public/Img/Logo/仲夏節LOGO-05.png';
import Image from 'next/image';
import { useLanguage } from 'src/hook/useLanguage';

const NavBar = () => {
  const { t, changeLanguage } = useLanguage();

  return (
    <nav className='navbar'>
      <article className='navbar__container'>
        <Image src={Logo} className='navbar__logo' />
        <ul className='navbar__list'>
          <li className='navbar__item'>
            <a href='#' className='navbar__link'>
              串聯活動
            </a>
          </li>
          <li className='navbar__item'>
            <a href='#' className='navbar__link'>
              主軸活動
            </a>
          </li>
          <li className='navbar__item'>
            <a href='#' className='navbar__link'>
              巡迴計畫
            </a>
          </li>
          <li className='navbar__item'>
            <a href='#' className='navbar__link'>
              相關網站
            </a>
          </li>
        </ul>
      </article>
    </nav>
  );
};

export default NavBar;
