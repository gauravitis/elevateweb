import { useBeforeAfterSlider } from '../hooks/useBeforeAfterSlider';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
}

export const BeforeAfterSlider = ({ beforeImage, afterImage, className = '' }: BeforeAfterSliderProps) => {
  const sliderRef = useBeforeAfterSlider();

  return (
    <div 
      ref={sliderRef}
      className={`slider-container group/slider ${className}`}
    >
      <div 
        className="slider-after"
        style={{ backgroundImage: `url(${afterImage})` }}
      />
      <div 
        className="slider-before"
        style={{ backgroundImage: `url(${beforeImage})` }}
      />
      <div className="slider-handle">
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-xs font-medium">
          <div className="text-white whitespace-nowrap">Drag</div>
        </div>
      </div>
    </div>
  );
}; 