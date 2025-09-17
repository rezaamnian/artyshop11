'use client';
import { useState, useEffect, useCallback } from 'react';
import styles from './ImageSlider.module.css';

const ImageSlider = () => {
  // آرایه تصاویر
 
const images = [
    '/imgprodoct/ghashoghjpg.jpg',
    '/imgprodoct/chob.jpg',
    '/imgprodoct/sofal.jpg',
    '/imgprodoct/abmivegir.jpg',
    '/imgprodoct/chob.webp',
    '/imgprodoct/decor.jpg',
    '/imgprodoct/dig.jpg',
    '/imgprodoct/oclock.jpg',
    '/imgprodoct/phone1.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // ایجاد اسلایدهای فعلی (3 تایی)
  const getCurrentSlides = useCallback(() => {
    const slides = [];
    for (let i = 0; i < 3; i++) {
      const imgIndex = (currentIndex + i) % images.length;
      slides.push(
        <div key={`slide-${imgIndex}`} className={styles.slide}>
          <img 
            src={images[imgIndex]} 
            alt={`تصویر ${imgIndex + 1}`} 
            className={styles.slideImage}
          />
        </div>
      );
    }
    return slides;
  }, [currentIndex, images]);

  // رفتن به اسلاید بعدی
  const goToNextSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 3) % images.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  }, [images.length, isTransitioning]);

  // رفتن به اسلاید قبلی
  const goToPrevSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 3 + images.length) % images.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  }, [images.length, isTransitioning]);

  // اسلاید خودکار
  useEffect(() => {
    let intervalId;
    if (isAutoPlaying) {
      intervalId = setInterval(goToNextSlide, 8000);
    }
    return () => clearInterval(intervalId);
  }, [goToNextSlide, isAutoPlaying]);

  // مدیریت hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div 
      className={styles.sliderContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`${styles.slider} ${isTransitioning ? styles.slidingNext : ''}`}>
        {getCurrentSlides()}
      </div>
      
      <button 
        className={`${styles.sliderControl} ${styles.prev}`}
        onClick={() => {
          goToPrevSlide();
          setIsAutoPlaying(false);
          setTimeout(() => setIsAutoPlaying(true), 8000);
        }}
      >
        ❮ قبلی
      </button>
      
      <button 
        className={`${styles.sliderControl} ${styles.next}`}
        onClick={() => {
          goToNextSlide();
          setIsAutoPlaying(false);
          setTimeout(() => setIsAutoPlaying(true), 8000);
        }}
      >
        بعدی ❯
      </button>
    </div>
  );
};

export default ImageSlider;





const images = [
    '/imgprodoct/ghashoghjpg.jpg',
    '/imgprodoct/chob.jpg',
    '/imgprodoct/sofal.jpg',
    '/imgprodoct/abmivegir.jpg',
    '/imgprodoct/chob.webp',
    '/imgprodoct/decor.jpg',
    '/imgprodoct/dig.jpg',
    '/imgprodoct/oclock.jpg',
    '/imgprodoct/phone1.png'
  ];