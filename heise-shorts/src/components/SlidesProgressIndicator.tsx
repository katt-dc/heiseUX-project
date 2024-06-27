


const SlidesProgressIndicator = ({ totalSlides, currentSlide }: { totalSlides: number, currentSlide: number }) => {
  return (
    <div className="flex gap-1 absolute  left-1/2 transform -translate-x-1/2 w-56">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <div
          key={index}
          className={`flex-1 h-1 rounded-full  ${
            index === currentSlide ? 'bg-heise-white animate-bounceIn' : 'bg-heise-dark-grey'
          }`}
        ></div>
      ))}
    </div>
  );
};

export default SlidesProgressIndicator;
