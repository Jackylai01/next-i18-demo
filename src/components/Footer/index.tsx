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
  RAILWAYBENTO,
} from '@helpers/imageImports';
import { NextPage } from 'next';
import Image from 'next/image';

const Footer: NextPage = () => {
  return (
    <footer className='footer'>
      <article className='footer__container'>
        <h1 className='footer__title'>合作夥伴</h1>
        <section className='footer__Img'>
          <Image src={KLOOK} width={150} height={30} />
          <Image src={JET} width={150} height={30} />
          <Image src={GOMAJI} width={100} height={30} />
          <Image src={RAILWAY} width={200} height={50} />
          <Image src={RAILWAYBENTO} width={100} height={30} />
        </section>
        <section className='footer__Img'>
          <Image src={OB} width={120} height={50} />
          <Image src={COCACOLA} width={120} height={50} />
          <Image src={PIZZAHUT} width={120} height={50} />
          <Image src={KFC} width={120} height={50} />
          <Image src={PLUGINN} width={120} height={80} />
          <Image src={KIWI} width={80} height={50} />
          <Image src={BLACKBALL} width={150} height={50} />
          <Image src={MYFEEL} width={120} height={50} />
          <Image src={BEEBUZZ} width={200} height={50} />
        </section>
      </article>
    </footer>
  );
};

export default Footer;
