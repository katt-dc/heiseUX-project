import ShortsScroller from "./ShortsScroller.tsx";

const ShortsPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="short">
        <ShortsScroller />
      </div>
    </div>
  );
};
export default ShortsPage;
