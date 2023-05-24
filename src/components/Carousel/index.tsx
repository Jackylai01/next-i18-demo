import { Swiper, SwiperSlide } from '@components/Swiper';

import { images } from '@helpers/imageImports';
import { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Carousel: NextPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Responsive
  const [perView, setPerView] = useState(4);

  const [widthOfWindow, setWidthOfWindow] = useState<number | null>(null);

  useEffect(() => {
    setWidthOfWindow(window.innerWidth);

    const handleResize = () => {
      setWidthOfWindow(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    function hanldeResize() {
      setWidthOfWindow(window.innerWidth);
    }
    window.addEventListener('resize', hanldeResize);

    return () => {
      window.removeEventListener('resize', hanldeResize);
    };
  }, []);

  useEffect(() => {
    if (widthOfWindow !== null) {
      if (widthOfWindow < 600) {
        setPerView(1);
      } else if (widthOfWindow < 900) {
        setPerView(2);
      } else if (widthOfWindow < 1180) {
        setPerView(3);
      } else {
        setPerView(4);
      }
    }
  }, [widthOfWindow]);

  return (
    <header className='carousel'>
      <main className='carousel__container'>
        <Swiper slidesPerView={1}>
          {images.map((data, index) => (
            <SwiperSlide key={index}>
              <section
                className={`carousel__img ${
                  index === currentSlide ? 'carousel__active' : ''
                }`}
                onClick={() => setCurrentSlide(index)}
              >
                <Image src={data.img} alt='' objectFit='cover' layout='fill' />
                <article>
                  <h1>{data.title}</h1>
                  <p>{data.desc}</p>
                </article>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </header>
  );
};

export default Carousel;
