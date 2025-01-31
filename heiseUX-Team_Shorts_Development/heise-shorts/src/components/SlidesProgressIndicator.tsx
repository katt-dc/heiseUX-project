const SlidesProgressIndicator = ({
  totalSlides,
  currentSlide,
  progress,
  setCurrentSlideIndex
}: {
  totalSlides: number;
  currentSlide: number;
  progress: number;
  setCurrentSlideIndex: (index: number) => void;
}) => {

  const selectSlide = (index: number) => {
    setCurrentSlideIndex(index);
  }

  return (
    totalSlides > 1 && (
      <div className="relative flex gap-1 left-1/2 transform -translate-x-1/2 w-full">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            onClick={() => {selectSlide(index)}}
            className={`flex-1 h-1 relative bg-heise-dark-grey rounded-sm overflow-hidden hover:cursor-pointer`}
          >
            {(index === currentSlide || index < currentSlide) && (
              <div
                className="absolute top-0 left-0 h-full bg-heise-white ease-in-out rounded-sm"
                style={{
                  width: index === currentSlide ? `${progress}%` : '100%'
                }}
              ></div>
            )}
          </div>
        ))}
      </div>
    )
  );
};

export default SlidesProgressIndicator;
