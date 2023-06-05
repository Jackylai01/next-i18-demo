import Carousel from '@components/Carousel';
import { coldDrink, cool, coolOff } from '@helpers/imageImports';
import { NextPage } from 'next';
import { useLanguage } from 'src/hook/useLanguage';

const Midsummer: NextPage = () => {
  const { t } = useLanguage();

  return (
    <header id='midsummer-activity' className='midsummer'>
      <main className='midsummer__container'>
        <article className='midsummer__title'>
          <h2>{t('midsummer.title')}</h2>
        </article>
        <section className='midsummer__card'>
          <span className='midsummer__card--caption'>
            <p>{t('midsummer.desc')}</p>
            <br />
            <p>{t('midsummer.desc01')}</p>
          </span>
        </section>
        <span className='midsummer__line'></span>
        <span className='midsummer__point'>
          <h2 className='midsummer__subtitle'>仲夏巡迴計畫場次一覽</h2>
        </span>
        <section className='midsummer__items'>
          <span className='midsummer__items--caption'>
            <h3>{t('midsummer.title01')}</h3>
            <hr className='line' />
            <footer className='midsummer__items--caption-content'>
              <li>{t('midsummer.list01')}</li>
              <li>{t('midsummer.list02')}</li>
              <li>{t('midsummer.list03')}</li>
              <li>{t('midsummer.list04')}</li>
            </footer>
          </span>
          <span className='midsummer__items--img'>
            <Carousel images={cool} size={{ width: '100%', height: '100%' }} />
          </span>
        </section>
        <section className='midsummer__items'>
          <span className='midsummer__items--img'>
            <Carousel
              images={coolOff}
              size={{ width: '100%', height: '100%' }}
            />
          </span>
          <span className='midsummer__items--caption'>
            <h3>{t('midsummer.title02')}</h3>
            <hr className='line' />
            <footer className='midsummer__items--caption-content'>
              <li>{t('midsummer.list05')}</li>
              <li>{t('midsummer.list06')}</li>
              <li>{t('midsummer.list07')}</li>
              <li>{t('midsummer.list08')}</li>
              <li>{t('midsummer.list09')}</li>
              <li>{t('midsummer.list10')}</li>
              <li>{t('midsummer.list11')}</li>
            </footer>
          </span>
        </section>
        <section className='midsummer__items'>
          <span className='midsummer__items--caption'>
            <h3>{t('midsummer.title03')}</h3>
            <hr className='line' />
            <footer className='midsummer__items--caption-content'>
              <li>{t('midsummer.list12')}</li>
              <li>{t('midsummer.list13')}</li>
            </footer>
          </span>
          <span className='midsummer__items--img'>
            <Carousel
              images={coldDrink}
              size={{ width: '100%', height: '100%' }}
            />
          </span>
        </section>
      </main>
    </header>
  );
};

export default Midsummer;
