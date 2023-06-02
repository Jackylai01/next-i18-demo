import { ARROW, FB, IG, MEUN, YT } from '@helpers/imageImports';
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
  const [isLinkDropdownOpen, setLinkDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setMenuOpen(false); // 當視窗寬度大於 800 時，設定選單為關閉狀態
        setDropdownOpen(false); // 當視窗寬度大於 800 時，設定選單為關閉狀態
        setLinkDropdownOpen(false); // 當視窗寬度大於 800 時，設定選單為關閉狀態
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

  // 滾動到指定位置-首頁
  const scrollToHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetHome = document.getElementById('home');
    if (targetHome) {
      window.scrollTo({
        top: targetHome?.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  // 滾動到指定位置-串聯活動
  const scrollToLinkActivity = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    const targetLinkActivity = document.getElementById('link-activity');
    if (targetLinkActivity) {
      window.scrollTo({
        top: targetLinkActivity?.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  // 滾動到指定位置-主軸活動
  const scrollToMainActivity = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    const targetMainActivity = document.getElementById('main-activity');
    if (targetMainActivity) {
      window.scrollTo({
        top: targetMainActivity?.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  // 滾動到指定位置-巡迴計畫
  const scrollToMidsummerActivity = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    const targetMidsummerActivity =
      document.getElementById('midsummer-activity');
    if (targetMidsummerActivity) {
      window.scrollTo({
        top: targetMidsummerActivity?.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`navbar ${isScrolling ? 'navbar-scrolling' : ''} ${
        isMenuOpen ? 'navbar-active' : ''
      }`}
    >
      <article className='navbar__container'>
        <a href='#' id='home' className='navbar__logo' onClick={scrollToHome}>
          <Image src={Logo} alt='Logo' layout='responsive' />
        </a>
        <main className='navbar__right-container'>
          <ul className='navbar__list'>
            <li className='navbar__item' onClick={scrollToLinkActivity}>
              <a href='#link-activity' className='navbar__link'>
                {t('nav.link1')}
              </a>
            </li>
            <li className='navbar__item' onClick={scrollToMainActivity}>
              <a href='#main-activity' className='navbar__link'>
                {t('nav.link2')}
              </a>
            </li>
            <li className='navbar__item' onClick={scrollToMidsummerActivity}>
              <a href='#' className='navbar__link'>
                {t('nav.link3')}
              </a>
            </li>
            <li className='navbar__item'>
              <a
                className='navbar__link'
                onClick={() => setLinkDropdownOpen(!isLinkDropdownOpen)}
              >
                {t('nav.link4')}
                <Image src={ARROW} width={10} height={8} alt='img' />
              </a>
              <ul
                className={`navbar__item-dropdown ${
                  isLinkDropdownOpen ? 'open' : ''
                }`}
              >
                <li>
                  <a>Option1</a>
                </li>
                <li>
                  <a>Option1</a>
                </li>
                <li>
                  <a>Option1</a>
                </li>
                <li>
                  <a>Option1</a>
                </li>
                <li>
                  <a>Option1</a>
                </li>
              </ul>
            </li>
          </ul>
          <a href='https://www.facebook.com/timefortaiwan101'>
            <Image src={FB} alt='Logo' width={20} height={20} />
          </a>
          <a href='https://www.instagram.com/taiwan/?hl=zh-tw&__coig_restricted=1'>
            <Image src={IG} alt='Logo' width={20} height={20} />
          </a>
          <a href='https://www.youtube.com/@TheTbroc'>
            <Image src={YT} alt='Logo' width={20} height={20} />
          </a>
          <span
            id='menu-bar'
            className={
              isMenuOpen ? 'navbar__menu-btn-active' : 'navbar__menu-btn'
            }
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <Image src={MEUN} width={30} height={30} alt='img' />
          </span>
          <section
            className='navbar__icon'
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            <Image
              src={Vector}
              alt='Logo'
              width={40}
              height={30}
              style={{ marginBottom: '0.1rem' }}
            />
            {isDropdownOpen && (
              <ul className='navbar__dropdown'>
                <li
                  className='navbar__dropdown-item'
                  onClick={() => changeLanguage('zh')}
                >
                  繁體中文
                </li>
                <li
                  className='navbar__dropdown-item'
                  onClick={() => changeLanguage('en')}
                >
                  English
                </li>
                <li
                  className='navbar__dropdown-item'
                  onClick={() => changeLanguage('ja')}
                >
                  日本語
                </li>
                <li
                  className='navbar__dropdown-item'
                  onClick={() => changeLanguage('ko')}
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
