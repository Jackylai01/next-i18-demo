import {
  BEEBUZZ,
  BLACKBALL,
  COCACOLA,
  GOMAJI,
  JET,
  KFC,
  KIWI,
  KLOOK,
  MYFEEL,
  OB,
  PIZZAHUT,
  PLUGINN,
  RAILWAY,
  TOURISM,
} from '@helpers/imageImports';
import { NextPage } from 'next';
import Image from 'next/image';
import { useLanguage } from 'src/hook/useLanguage';

const Footer: NextPage = () => {
  const { t } = useLanguage();

  return (
    <footer className='footer'>
      <article className='footer__container'>
        <h1 className='footer__title'>{t('footer.title')}</h1>
        <section className='footer__img'>
          <a href='https://www.klook.com/zh-TW/'>
            <Image src={KLOOK} width={200} height={50} alt='img' />
          </a>
          <a href='https://www.gomaji.com/'>
            <Image src={JET} width={250} height={50} alt='img' />
          </a>
          <a href='https://www.gomaji.com/'>
            <Image src={GOMAJI} width={120} height={50} alt='img' />
          </a>
          <a href='https://www.railway.gov.tw/tra-tip-web/tip/tip004/tip421/entry'>
            <Image src={RAILWAY} width={250} height={50} alt='img' />
          </a>
          <a href='https://www.obdesign.com.tw/'>
            <Image src={OB} width={100} height={100} alt='img' />
          </a>
          <a href='https://www.coke.com.tw/zh/home'>
            <Image src={COCACOLA} width={250} height={120} alt='img' />
          </a>
          <a href='https://www.pizzahut.com.tw/'>
            <Image src={PIZZAHUT} width={120} height={100} alt='img' />
          </a>
          <a href='https://www.kfcclub.com.tw/'>
            <Image src={KFC} width={120} height={100} alt='img' />
          </a>
          <a href='https://www.pluginn.com.tw/'>
            <Image src={PLUGINN} width={120} height={100} alt='img' />
          </a>
          <a href='https://www.7819.com.tw/icepop/'>
            <Image src={KIWI} width={100} height={90} alt='img' />
          </a>
          <a href='https://www.blackball.com.tw/'>
            <Image src={BLACKBALL} width={200} height={150} alt='img' />
          </a>
          <a href='https://www.myfeel-tw.com/tw/media'>
            <Image src={MYFEEL} width={200} height={100} alt='img' />
          </a>
          <a href='https://www.google.com/url?q=https://www.beebuzz.com.tw/&sa=D&source=docs&ust=1685082005930767&usg=AOvVaw01gtqzx0Uk-9H-D1oXAAKh'>
            <Image src={BEEBUZZ} width={200} height={80} alt='img' />
          </a>
        </section>
        <section className='footer__block'>
          <h2>
            <Image src={TOURISM} width={350} height={100} alt='img' />
          </h2>
          <span>
            <li>{t('footer.lable')}</li>
            <li>{t('footer.address')}</li>
            <li>{t('footer.copyright')}</li>
          </span>
        </section>
      </article>
    </footer>
  );
};

export default Footer;
