import Vector from '@public/Img/Icon/Vector.png';
import Logo from '@public/Img/Logo/仲夏節LOGO-05.png';
import { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';

const NavBar: NextPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className={`navbar ${isMenuOpen ? 'navbar-active' : ''}`}>
      <article className='navbar__container'>
        <a href='/' className='navbar__logo'>
          <Image src={Logo} alt='Logo' layout='responsive' />
        </a>
        <main className='navbar__right-container'>
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
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Image src={Vector} alt='Logo' width={30} height={30} />
            {isDropdownOpen && (
              <ul className='navbar__dropdown'>
                <li className='navbar__dropdown-item'>繁體中文</li>
                <li className='navbar__dropdown-item'>English</li>
                <li className='navbar__dropdown-item'>日文語</li>
                <li className='navbar__dropdown-item'>한국인</li>
              </ul>
            )}
          </section>
        </main>
      </article>
    </nav>
  );
};

export default NavBar;
