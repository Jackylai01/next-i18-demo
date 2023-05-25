import {
  EASE,
  FESTIVAL,
  ISLANDS,
  LINK,
  MIDDLE,
  NORTH,
  SOUTH,
} from '@helpers/imageImports';
import { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from 'src/hook/useLanguage';

const LinkActivity: NextPage = () => {
  const { t } = useLanguage();
  const [selectedRegion, setSelectedRegion] = useState<string>('北部地區');

  const handleClick = (region: string) => {
    setSelectedRegion(region);
  };

  let selectedImage;
  switch (selectedRegion) {
    case '北部地區':
      selectedImage = (
        <Image
          src={NORTH}
          alt='北部地區'
          width={450}
          height={400}
          objectFit='cover'
        />
      );
      break;
    case '中部地區':
      selectedImage = (
        <Image
          src={MIDDLE}
          alt='中部地區'
          width={450}
          height={400}
          objectFit='cover'
        />
      );
      break;
    case '南部地區':
      selectedImage = (
        <Image
          src={SOUTH}
          alt='南部地區'
          width={450}
          height={400}
          objectFit='cover'
        />
      );
      break;
    case '東部地區':
      selectedImage = (
        <Image
          src={EASE}
          alt='東部地區'
          width={450}
          height={400}
          objectFit='cover'
        />
      );
      break;
    case '離島地區':
      selectedImage = (
        <Image
          src={ISLANDS}
          alt='離島地區'
          width={450}
          height={400}
          objectFit='cover'
        />
      );
      break;
    default:
      selectedImage = null;
  }

  return (
    <article className='link'>
      <main className='link__container'>
        <header className='link__title'>
          <h1>
            {t('linkActivity.link')}
            <span>
              <Image src={FESTIVAL} width={20} height={20} />
            </span>
            {t('linkActivity.activity')}
          </h1>
        </header>
        <footer className='link__items'>
          <span
            className='link__items--item link__items--item-1'
            onClick={() => handleClick('北部地區')}
          >
            {t('linkActivity.north')}
          </span>
          <span
            className='link__items--item link__items--item-2'
            onClick={() => handleClick('中部地區')}
          >
            {t('linkActivity.middle')}
          </span>
          <span
            className='link__items--item link__items--item-3'
            onClick={() => handleClick('南部地區')}
          >
            {t('linkActivity.south')}
          </span>
          <span
            className='link__items--item link__items--item-4'
            onClick={() => handleClick('東部地區')}
          >
            {t('linkActivity.east')}
          </span>
          <span
            className='link__items--item link__items--item-5'
            onClick={() => handleClick('離島地區')}
          >
            {t('linkActivity.islands')}
          </span>
        </footer>
        <section className='link__card'>
          {selectedImage}
          <ul>
            <span>
              <h2>
                {t('linkActivity.north') + t('linkActivity.summerSeries')}
              </h2>
              <Image src={LINK} width={20} height={20} />
            </span>
            <span>
              <h2>
                {t('linkActivity.middle') + t('linkActivity.summerSeries')}
              </h2>
              <Image src={LINK} width={20} height={20} />
            </span>
            <span>
              <h2>
                {t('linkActivity.south') + t('linkActivity.summerSeries')}
              </h2>
              <Image src={LINK} width={20} height={20} />
            </span>
            <span>
              <h2>{t('linkActivity.east') + t('linkActivity.summerSeries')}</h2>
              <Image src={LINK} width={20} height={20} />
            </span>
            <span>
              <h2>
                {t('linkActivity.islands') + t('linkActivity.summerSeries')}
              </h2>
              <Image src={LINK} width={20} height={20} />
            </span>
          </ul>
        </section>
      </main>
    </article>
  );
};

export default LinkActivity;
