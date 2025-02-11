import { useEffect, useRef } from 'react';

export const useBeforeAfterSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current) return;

      const rect = slider.getBoundingClientRect();
      const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const position = ((x - rect.left) / rect.width) * 100;

      const clampedPosition = Math.min(Math.max(position, 0), 100);
      slider.style.setProperty('--clip', `${clampedPosition}%`);
    };

    const handleMouseDown = () => {
      isDragging.current = true;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('touchstart', handleMouseDown);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('touchstart', handleMouseDown);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return sliderRef;
}; 