import Logo from '@public/Img/Logo/仲夏節LOGO-05.png';
import { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';

const NavBar: NextPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'navbar--active' : ''}`}>
      <div className='navbar__logo'>
        <Image src={Logo} alt='Logo' width={350} height={100} />
      </div>
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
      <div
        id='menu-bar'
        className={isMenuOpen ? 'navbar__menu-btn--active' : 'navbar__menu-btn'}
        onClick={handleMenuClick}
      >
        Menu
      </div>
    </nav>
  );
};

export default NavBar;
