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

const LinkActivity: NextPage = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

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
            串聯
            <span>
              <Image src={FESTIVAL} width={20} height={20} />
            </span>
            活動
          </h1>
        </header>
        <footer className='link__items'>
          <span
            className='link__items--item link__items--item-1'
            onClick={() => handleClick('北部地區')}
          >
            北部地區
          </span>
          <span
            className='link__items--item link__items--item-2'
            onClick={() => handleClick('中部地區')}
          >
            中部地區
          </span>
          <span
            className='link__items--item link__items--item-3'
            onClick={() => handleClick('南部地區')}
          >
            南部地區
          </span>
          <span
            className='link__items--item link__items--item-4'
            onClick={() => handleClick('東部地區')}
          >
            東部地區
          </span>
          <span
            className='link__items--item link__items--item-5'
            onClick={() => handleClick('離島地區')}
          >
            離島地區
          </span>
        </footer>
        <section className='link__card'>
          {selectedImage}
          <ul>
            <span>
              <h2>北部地區仲夏系列活動區</h2>
              <Image src={LINK} width={20} height={20} />
            </span>
            <span>
              <h2>中部地區仲夏系列活動區</h2>
              <Image src={LINK} width={20} height={20} />
            </span>
            <span>
              <h2>南部地區仲夏系列活動區</h2>
              <Image src={LINK} width={20} height={20} />
            </span>
            <span>
              <h2>東部地區仲夏系列活動區</h2>
              <Image src={LINK} width={20} height={20} />
            </span>
            <span>
              <h2>離島地區仲夏系列活動區</h2>
              <Image src={LINK} width={20} height={20} />
            </span>
          </ul>
        </section>
      </main>
    </article>
  );
};

export default LinkActivity;
