import { BACKGROUND, DYNAMIC } from '@helpers/imageImports';
import { NextPage } from 'next';
import Image from 'next/image';
import { useLanguage } from 'src/hook/useLanguage';

const MainContent: NextPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <header className='home'>
        <section className='home__background'>
          <Image
            layout='fill'
            objectFit='cover'
            src={BACKGROUND}
            alt='2023台灣仲夏旅遊節 Taiwan Summer Tourism Festival'
          />
        </section>

        <section className='home__dynamic'>
          <Image
            src={DYNAMIC}
            objectFit='cover'
            className='home__dynamic'
            alt='img'
          />
        </section>

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
