import { ARROW, CLOSE, FB, IG, MEUN, YT } from '@helpers/imageImports';
import Logo from '@public/Img/Logo/仲夏節LOGO-05.png';
import { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useLanguage } from 'src/hook/useLanguage';

const NavBar: NextPage = () => {
  const { t, changeLanguage } = useLanguage();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLinkDropdownOpen, setLinkDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setMenuOpen(false); // 當視窗寬度大於 800 時，設定選單為關閉狀態
        setLinkDropdownOpen(false); // 當視窗寬度大於 800 時，設定選單為關閉狀態
      }
    };

    window.addEventListener('resize', handleResize);

    // 在元件卸載時清理事件監聽器
    return () => {
      window.removeEventListener('resize', handleResize);
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
        top: targetLinkActivity?.offsetTop - 100,
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
        top: targetMainActivity?.offsetTop - 100,
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
        top: targetMidsummerActivity?.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'navbar-active' : ''}`}>
      <article className='navbar__container'>
        <a href='#' id='home' className='navbar__logo' onClick={scrollToHome}>
          <Image
            src={Logo}
            alt='2023台灣仲夏旅遊節Logo'
            objectFit='contain'
            layout='responsive'
          />
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
                  <a href='https://www.taiwan.net.tw/ '>{t('nav.relevant')}</a>
                </li>
                <li>
                  <a href='https://admin.taiwan.net.tw/upload/contentFile/auser/b/annual_2018_htm/05_3_National-Scenic-Area-Administrations.html'>
                    {t('nav.relevant1')}
                  </a>
                </li>
                <li>
                  <a href='https://www.taiwantrip.com.tw/'>
                    {t('nav.relevant2')}
                  </a>
                </li>
                <li>
                  <a href='https://www.taiwan.net.tw/m1.aspx?sNo=0001019'>
                    {t('nav.relevant3')}
                  </a>
                </li>
                <li>
                  <a href='https://taiwanstay.net.tw/'> {t('nav.relevant4')}</a>
                </li>
                <li>
                  <a href='https://gis.tbroc.gov.tw/TTE/legal.jsp'>
                    {t('nav.relevant5')}
                  </a>
                </li>
              </ul>
            </li>
            <li className='navbar__item'>
              <section
                className='navbar__icon'
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                Language
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
            </li>
            <li className='navbar__item'>
              <a
                href='https://www.facebook.com/timefortaiwan101'
                className='navbar__item--community'
              >
                <Image src={FB} alt='faceBook' width={30} height={30} />
              </a>
              <a
                href='https://www.instagram.com/taiwan/?hl=zh-tw&__coig_restricted=1'
                className='navbar__item--community'
              >
                <Image src={IG} alt='Instagram' width={30} height={30} />
              </a>
              <a
                href='https://www.youtube.com/@TheTbroc'
                className='navbar__item--community'
              >
                <Image src={YT} alt='Youtube' width={30} height={30} />
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
            {isMenuOpen ? (
              <Image src={CLOSE} alt='close-list' width={20} height={20} />
            ) : (
              <Image src={MEUN} alt='menu' width={50} height={35} />
            )}
          </span>
        </main>
      </article>
    </nav>
  );
};

export default NavBar;
