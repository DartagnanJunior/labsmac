import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import lab1 from '@/assets/lab1.jpg';
import lab2 from '@/assets/lab2.jpg';
import lab3 from '@/assets/lab3.jpg';

const carouselImages = [lab1, lab2, lab3, lab1, lab2, lab3, lab1, lab2, lab3];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden h-[600px]">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {carouselImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>
      <Button
        variant="ghost"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75 text-[#1E3A8A]"
        onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + carouselImages.length) % carouselImages.length)}>
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75 text-[#1E3A8A]"
        onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length)}>
        <ChevronRight className="h-6 w-6" />
      </Button>
    </section>
  );
};

export default Carousel;
