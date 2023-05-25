import Vector from '@public/Img/Icon/Vector.png';
import Logo from '@public/Img/Logo/仲夏節LOGO-05.png';
import { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useLanguage } from 'src/hook/useLanguage';

const NavBar: NextPage = () => {
  const { t, changeLanguage } = useLanguage();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };

    const handleScroll = () => {
      // 新增一個用於處理滾動事件的函數
      if (window.scrollY > 0) {
        // 當滾動距離大於 0 時
        setScrolling(true); // 設定正在滾動
      } else {
        setScrolling(false); // 設定非正在滾動
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    // 在元件卸載時清理事件監聽器
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar ${isScrolling ? 'navbar-scrolling' : ''} ${
        isMenuOpen ? 'navbar-active' : ''
      }`}
    >
      <article className='navbar__container'>
        <a href='/' className='navbar__logo'>
          <Image src={Logo} alt='Logo' layout='responsive' />
        </a>
        <main className='navbar__right-container'>
          <ul className='navbar__list'>
            <li className='navbar__item'>
              <a href='#' className='navbar__link'>
                {t('nav.link1')}
              </a>
            </li>
            <li className='navbar__item'>
              <a href='#' className='navbar__link'>
                {t('nav.link2')}
              </a>
            </li>
            <li className='navbar__item'>
              <a href='#' className='navbar__link'>
                {t('nav.link3')}
              </a>
            </li>
            <li className='navbar__item'>
              <a href='#' className='navbar__link'>
                {t('nav.link4')}
              </a>
            </li>
          </ul>
          <span
            id='menu-bar'
            className={
              isMenuOpen ? 'navbar__menu-btn-active' : 'navbar__menu-btn'
            }
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            Menu
          </span>
          <section
            className='navbar__icon'
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            <Image src={Vector} alt='Logo' width={35} height={25} />
            {isDropdownOpen && (
              <ul className='navbar__dropdown'>
                <li
                  className='navbar__dropdown-item'
                  onClick={() => changeLanguage('zh')} // 繁體中文
                >
                  繁體中文
                </li>
                <li
                  className='navbar__dropdown-item'
                  onClick={() => changeLanguage('en')} // English
                >
                  English
                </li>
                <li
                  className='navbar__dropdown-item'
                  onClick={() => changeLanguage('ja')} // 日文
                >
                  日本語
                </li>
                <li
                  className='navbar__dropdown-item'
                  onClick={() => changeLanguage('ko')} // Korean
                >
                  한국어
                </li>
              </ul>
            )}
          </section>
        </main>
      </article>
    </nav>
  );
};

export default NavBar;
