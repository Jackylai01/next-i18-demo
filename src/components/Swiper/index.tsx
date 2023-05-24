import React, { ReactNode, useEffect, useState } from 'react';

export interface SwiperProps {
  children: ReactNode[];
  spaceBetween?: number;
  slidesPerView?: number;
  auto?: boolean;
  duration?: number;
}

export const Swiper = ({
  children,
  spaceBetween = 10,
  slidesPerView = 1,
  auto = false,
  duration = 2000,
}: SwiperProps) => {
  children = React.Children.toArray(children);
  let numOfDots = children.length - (slidesPerView - 1);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragStart, setIsDragStart] = useState(false);
  const [start, setStart] = useState(0);
  const [change, setChange] = useState(0);
  const [stopAuto, setStopAuto] = useState(false);

  function plusSlide(n: number) {
    setCurrentSlide((value) => {
      if (n > 0) return value < numOfDots - 1 ? value + n : 0;
      // n < 0
      return value <= 0 ? numOfDots - 1 : value + n;
    });
  }

  function dragStart(
    e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>,
  ) {
    setIsDragStart(true);
    let prevPageX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStart(prevPageX);
    setChange(0);
  }

  function dragging(
    e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>,
  ) {
    if (!isDragStart) return;
    let positionDiff =
      'touches' in e ? e.touches[0].clientX - start : e.clientX - start;
    setChange(positionDiff);
  }

  function dragStop(
    e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>,
  ) {
    setIsDragStart(false);
    setStart(0);

    if (change < 0) {
      plusSlide(1);
    } else if (change > 0) {
      plusSlide(-1);
    }
  }
  useEffect(() => {
    let interval = setInterval(() => {
      if (auto) {
        setCurrentSlide((value) => (value < numOfDots - 1 ? value + 1 : 0));
      }
    }, duration);

    if (stopAuto) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [auto, duration, numOfDots, stopAuto]);

  return (
    <article
      className={`swiper ${isDragStart ? 'dragging' : ''}`}
      onMouseDown={dragStart}
      onMouseMove={dragging}
      onMouseUp={dragStop}
      onTouchStart={dragStart}
      onTouchMove={dragging}
      onTouchEnd={dragStop}
      onMouseOver={() => setStopAuto(true)}
      onMouseLeave={() => setStopAuto(false)}
    >
      <div className='swiper-wrapper' style={{ gap: `${spaceBetween}px` }}>
        {children.slice(currentSlide, currentSlide + slidesPerView)}
      </div>

      <span className='prev' onClick={() => plusSlide(-1)}>
        &#8249;
      </span>
      <span className='next' onClick={() => plusSlide(1)}>
        &#8250;
      </span>

      <div className='swiper-pagination'>
        {Array.from({ length: numOfDots }, (_, index) => (
          <span
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`${index === currentSlide ? 'active' : ''}`}
          />
        ))}
      </div>
    </article>
  );
};

export const SwiperSlide = ({ children }: { children: ReactNode }) => {
  return <main className='swiper-slide'>{children}</main>;
};
