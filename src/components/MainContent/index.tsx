import { BACKGROUND, DYNAMIC } from '@helpers/imageImports';

import { NextPage } from 'next';
import Image from 'next/image';
import { useLanguage } from 'src/hook/useLanguage';

const MainContent: NextPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <header className='home'>
        <Image
          src={BACKGROUND}
          layout='responsive'
          objectFit='contain'
          className='home__img'
          alt='2023台灣仲夏旅遊節 Taiwan Summer Tourism Festival'
        />
        <Image
          src={DYNAMIC}
          objectFit='cover'
          className='home__dynamic'
          alt='img'
        />
        <article className='home__container'>
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
