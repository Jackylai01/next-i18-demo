import {
  ACTIVITY,
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
    <article className='activity'>
      <main className='activity__container'>
        <header className='activity__title'>
          <h1>
            {t('mainActivity.spindle')}
            <span>
              <Image src={ACTIVITY} width={20} height={20} />
            </span>
            {t('mainActivity.activity')}
          </h1>
        </header>
        <section className='activity__card'>
          <Image
            src={ACTIVITY01}
            className='activity__card--img'
            objectFit='cover'
            width={1000}
            height={1000}
          />
          <span className='activity__card--caption'>
            <h1> {t('mainActivity.title')}</h1>
            <footer className='activity__card--caption-content'>
              {t('mainActivity.desc')}
            </footer>
          </span>
        </section>
        <section className='activity__card'>
          <Image
            src={ACTIVITY02}
            className='activity__card--img'
            objectFit='cover'
            width={1000}
            height={1000}
          />
          <span className='activity__card--caption'>
            <h1> {t('mainActivity.title01')}</h1>
            <footer className='activity__card--caption-content'>
              <p>{t('mainActivity.desc01')}</p>
              <br />
              <br />
              <p>{t('mainActivity.desc02')}</p>
              <br />
              <br />
              <p>{t('mainActivity.desc03')}</p>
            </footer>
          </span>
        </section>
        <section className='activity__card'>
          <Image
            src={ACTIVITY04}
            className='activity__card--img'
            objectFit='cover'
            width={1000}
            height={1000}
          />
          <span className='activity__card--caption'>
            <h1>{t('mainActivity.title02')}</h1>
            <footer className='activity__card--caption-content'>
              <p>{t('mainActivity.desc04')}</p>
              <br />
              <br />
              <p>{t('mainActivity.desc05')}</p>
              <br />
              <br />
              <p>{t('mainActivity.desc06')}</p>
              <br />
              <br />
              <p>{t('mainActivity.desc07')}</p>
            </footer>
          </span>
        </section>
        <section className='activity__card'>
          <Image
            src={ACTIVITY03}
            className='activity__card--img'
            objectFit='cover'
            width={1000}
            height={1000}
          />
          <span className='activity__card--caption'>
            <h1>{t('mainActivity.title03')}</h1>
            <footer className='activity__card--caption-content'>
              <p>{t('mainActivity.desc08')}</p>
              <br />
              <br />
              <p>{t('mainActivity.desc09')}</p>
              <br />
              <br />
              <p>{t('mainActivity.desc10')}</p>
            </footer>
          </span>
        </section>
      </main>
    </article>
  );
};

export default MainActivity;
