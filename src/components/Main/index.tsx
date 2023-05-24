import BackgroundImg from '@public/Img/Logo/home.png';
import Logo from '@public/Img/Logo/仲夏節LOGO-05.png';

import { NextPage } from 'next';
import Image from 'next/image';
import { useLanguage } from 'src/hook/useLanguage';

const MainContent: NextPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <header className='home'>
        <Image src={BackgroundImg} layout='fill' objectFit='cover' />
        <article className='home__container'>
          <span className='home__logo'>
            <Image src={Logo} width={240} height={60} className='home__logo' />
          </span>
          <main className='home__content'>
            <h1>{t('home.title')}</h1>
            <br />
            <p>{t('home.description1')}</p>
            <br />
            <p>{t('home.description2')}</p>
          </main>
        </article>
      </header>
    </>
  );
};

export default MainContent;
