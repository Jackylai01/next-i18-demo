import {
  ACTIVITY01,
  ACTIVITY02,
  ACTIVITY03,
  ACTIVITY04,
} from '@helpers/imageImports';
import { NextPage } from 'next';
import Image from 'next/image';
import { useLanguage } from 'src/hook/useLanguage';

const MainActivity: NextPage = () => {
  const { t } = useLanguage();

  return (
    <article id='main-activity' className='activity'>
      <main className='activity__container'>
        <header className='activity__title'>
          <h2>
            {t('mainActivity.spindle')}
            {t('mainActivity.activity')}
          </h2>
        </header>
        <section className='activity__card'>
          <Image
            src={ACTIVITY01}
            className='activity__card--img'
            objectFit='contain'
            width={800}
            height={600}
            alt='img'
          />
          <span className='activity__card--caption'>
            <h3>
              <span>{t('mainActivity.title')}</span>
            </h3>
            <footer className='activity__card--caption-content'>
              {t('mainActivity.desc')}
            </footer>
          </span>
        </section>
        <section className='activity__card'>
          <span className='activity__card--caption'>
            <h3>
              <span>{t('mainActivity.title01')}</span>
            </h3>
            <footer className='activity__card--caption-content'>
              <p>{t('mainActivity.desc01')}</p>
              <br />
              <p>{t('mainActivity.desc02')}</p>
              <br />
              <p>{t('mainActivity.desc03')}</p>
            </footer>
          </span>
          <Image
            src={ACTIVITY02}
            className='activity__card--img'
            objectFit='contain'
            width={800}
            height={600}
            alt='img'
          />
        </section>
        <section className='activity__card'>
          <Image
            src={ACTIVITY04}
            className='activity__card--img'
            objectFit='contain'
            width={800}
            height={600}
            alt='img'
          />
          <span className='activity__card--caption'>
            <h3>
              <span>{t('mainActivity.title02')}</span>
            </h3>
            <footer className='activity__card--caption-content'>
              <p>{t('mainActivity.desc04')}</p>
              <br />
              <p>{t('mainActivity.desc05')}</p>
              <br />
              <p>{t('mainActivity.desc06')}</p>
            </footer>
          </span>
        </section>
        <section className='activity__card'>
          <span className='activity__card--caption'>
            <h3>
              <span>{t('mainActivity.title03')}</span>
            </h3>
            <footer className='activity__card--caption-content'>
              <p>{t('mainActivity.desc08')}</p>
              <p>{t('mainActivity.desc09')}</p>
              <p>{t('mainActivity.desc10')}</p>
            </footer>
          </span>
          <Image
            src={ACTIVITY03}
            className='activity__card--img'
            objectFit='contain'
            width={800}
            height={600}
            alt='img'
          />
        </section>
      </main>
    </article>
  );
};

export default MainActivity;
