import { motion } from "framer-motion";
import classNames from "classnames";
import { useFirebaseContext } from "../../context/FirebaseContext";
import { doc, updateDoc } from "firebase/firestore";

interface ComplexAdSlideProps {
  url: string;
  images: string[];
  title?: string;
  description?: string;
  text?: string[];
  shortId: number;
}

export default function ComplexAdSlide({
  url,
  images,
  title,
  description,
  text,
  shortId,
}: ComplexAdSlideProps) {
  const firebaseContext = useFirebaseContext();

  const openLinkToArticle = (path: string) => {
    const newWindow = window.open(path, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  const onClickUrl =
    (url: string): (() => void) =>
      () => {
        openLinkToArticle(url);
        countClicks();
      }

  function countClicks() {
    const sessionId = document.cookie.split('; ').find(row => row.startsWith('sessionId='))!.split('=')[1];
    if (sessionId === undefined) {
      console.log("ERROR: No sessionId found in cookies");
      return;
    } else {
      try {
        // Reference the document in the "short-bewertungen" collection
        const docRef = doc(firebaseContext.db, "short-bewertungen", sessionId);

        // add the rating to the document
        updateDoc(docRef, {
          [`Short${shortId}_ToArticleClicked`]: true
        });

        console.log("Document successfully written with custom ID (Session ID):", sessionId);
      } catch (e) {
        console.error("Error adding document with custom ID (Session ID):", e);
      }
    }
  }

  const buttonClass = classNames(
    "font-semibold bg-[#110A35] text-heise-white rounded-3xl w-fit h-fit mb-3 py-2 px-4 flex items-center justify-center text-sm",
    {
      "bg-[#110A35] text-heise-white": !text,
      "bg-[#1B3F8F] text-heise-white": text,
    }
  );

  return (
    <div
      className={`w-full h-full absolute left-0 top-0 bg-cover bg-no-repeat bg-center bg-heise-white rounded-xl flex items-center justify-center flex-col`}
    >
      <div className="w-full flex justify-between px-4 pt-5">
        <div className="text-heise-dark-grey text-xxs self-start">
          Eigenwerbung
        </div>

        <div className="flex">
          <div className="text-heise-dark-grey text-xxs pb-3 px-2 self-end">
            in Kooperation mit
          </div>
          <svg
            width="65"
            height="40"
            viewBox="0 0 250 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10C0 4.47715 4.47715 0 10 0H168V79H10C4.47715 79 0 74.5228 0 69V10Z"
              fill="black"
            />
            <path
              d="M172 0H240C245.523 0 250 4.47715 250 10V69C250 74.5228 245.523 79 240 79H172V0Z"
              fill="#1B3F8F"
            />
            <path
              d="M18.942 55V16.876H25.152V26.704L24.936 31.834C26.052 30.79 27.294 29.872 28.662 29.08C30.03 28.252 31.614 27.838 33.414 27.838C36.258 27.838 38.328 28.756 39.624 30.592C40.92 32.428 41.568 35.02 41.568 38.368V55H35.358V39.178C35.358 36.982 35.034 35.434 34.386 34.534C33.738 33.634 32.676 33.184 31.2 33.184C30.048 33.184 29.022 33.472 28.122 34.048C27.258 34.588 26.268 35.398 25.152 36.478V55H18.942ZM64.2273 55.648C61.7433 55.648 59.4933 55.108 57.4773 54.028C55.4973 52.912 53.9313 51.328 52.7793 49.276C51.6273 47.188 51.0513 44.668 51.0513 41.716C51.0513 38.836 51.6453 36.37 52.8333 34.318C54.0213 32.23 55.5513 30.628 57.4233 29.512C59.2953 28.396 61.2753 27.838 63.3633 27.838C65.7753 27.838 67.7913 28.378 69.4113 29.458C71.0313 30.538 72.2373 32.032 73.0293 33.94C73.8573 35.812 74.2713 37.972 74.2713 40.42C74.2713 40.996 74.2353 41.554 74.1633 42.094C74.1273 42.634 74.0553 43.156 73.9473 43.66H55.6953V38.908H68.7633C68.7633 37 68.3313 35.506 67.4673 34.426C66.6033 33.31 65.2713 32.752 63.4713 32.752C62.4633 32.752 61.4733 33.022 60.5013 33.562C59.5653 34.102 58.7733 35.02 58.1253 36.316C57.5133 37.612 57.2073 39.412 57.2073 41.716C57.2073 43.804 57.5673 45.514 58.2873 46.846C59.0073 48.142 59.9613 49.114 61.1493 49.762C62.3373 50.374 63.6153 50.68 64.9833 50.68C66.1353 50.68 67.2153 50.518 68.2233 50.194C69.2673 49.87 70.2393 49.42 71.1393 48.844L73.2993 52.84C72.0753 53.704 70.6713 54.388 69.0873 54.892C67.5393 55.396 65.9193 55.648 64.2273 55.648ZM83.9825 55V28.486H90.1925V55H83.9825ZM87.0605 23.842C85.9805 23.842 85.0805 23.518 84.3605 22.87C83.6765 22.222 83.3345 21.358 83.3345 20.278C83.3345 19.198 83.6765 18.352 84.3605 17.74C85.0805 17.092 85.9805 16.768 87.0605 16.768C88.1765 16.768 89.0765 17.092 89.7605 17.74C90.4445 18.352 90.7865 19.198 90.7865 20.278C90.7865 21.358 90.4445 22.222 89.7605 22.87C89.0765 23.518 88.1765 23.842 87.0605 23.842ZM109.293 55.648C107.457 55.648 105.639 55.306 103.839 54.622C102.075 53.938 100.545 52.984 99.2493 51.76L102.003 48.196C103.191 49.168 104.397 49.87 105.621 50.302C106.845 50.734 108.141 50.95 109.509 50.95C110.949 50.95 112.011 50.644 112.695 50.032C113.379 49.42 113.721 48.664 113.721 47.764C113.721 47.044 113.451 46.432 112.911 45.928C112.407 45.424 111.741 44.992 110.913 44.632C110.085 44.272 109.167 43.912 108.159 43.552C106.863 43.084 105.657 42.526 104.541 41.878C103.425 41.194 102.507 40.366 101.787 39.394C101.103 38.386 100.761 37.18 100.761 35.776C100.761 33.436 101.625 31.528 103.353 30.052C105.081 28.576 107.421 27.838 110.373 27.838C112.173 27.838 113.829 28.144 115.341 28.756C116.853 29.332 118.149 30.088 119.229 31.024L116.475 34.534C115.539 33.85 114.585 33.346 113.613 33.022C112.641 32.698 111.615 32.536 110.535 32.536C109.203 32.536 108.213 32.824 107.565 33.4C106.917 33.976 106.593 34.66 106.593 35.452C106.593 36.1 106.791 36.658 107.187 37.126C107.619 37.558 108.231 37.954 109.023 38.314C109.815 38.638 110.769 38.98 111.885 39.34C113.253 39.808 114.531 40.384 115.719 41.068C116.907 41.716 117.843 42.562 118.527 43.606C119.247 44.614 119.607 45.892 119.607 47.44C119.607 48.952 119.211 50.338 118.419 51.598C117.627 52.822 116.457 53.812 114.909 54.568C113.397 55.288 111.525 55.648 109.293 55.648ZM140.325 55.648C137.841 55.648 135.591 55.108 133.575 54.028C131.595 52.912 130.029 51.328 128.877 49.276C127.725 47.188 127.149 44.668 127.149 41.716C127.149 38.836 127.743 36.37 128.931 34.318C130.119 32.23 131.649 30.628 133.521 29.512C135.393 28.396 137.373 27.838 139.461 27.838C141.873 27.838 143.889 28.378 145.509 29.458C147.129 30.538 148.335 32.032 149.127 33.94C149.955 35.812 150.369 37.972 150.369 40.42C150.369 40.996 150.333 41.554 150.261 42.094C150.225 42.634 150.153 43.156 150.045 43.66H131.793V38.908H144.861C144.861 37 144.429 35.506 143.565 34.426C142.701 33.31 141.369 32.752 139.569 32.752C138.561 32.752 137.571 33.022 136.599 33.562C135.663 34.102 134.871 35.02 134.223 36.316C133.611 37.612 133.305 39.412 133.305 41.716C133.305 43.804 133.665 45.514 134.385 46.846C135.105 48.142 136.059 49.114 137.247 49.762C138.435 50.374 139.713 50.68 141.081 50.68C142.233 50.68 143.313 50.518 144.321 50.194C145.365 49.87 146.337 49.42 147.237 48.844L149.397 52.84C148.173 53.704 146.769 54.388 145.185 54.892C143.637 55.396 142.017 55.648 140.325 55.648Z"
              fill="white"
            />
            <rect x="205" y="14" width="11" height="52" rx="5.5" fill="white" />
            <path
              d="M190.5 47C187.462 47 185 44.5376 185 41.5V41.5C185 38.4624 187.462 36 190.5 36H212V47H190.5Z"
              fill="white"
            />
            <path
              d="M231.5 36C234.538 36 237 38.4624 237 41.5V41.5C237 44.5376 234.538 47 231.5 47H223.5C220.462 47 218 44.5376 218 41.5V41.5C218 38.4624 220.462 36 223.5 36H231.5Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <div
        className="flex items-center justify-center flex-col"
        style={{ width: "95%", height: "100%" }}
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-3 "
        >
          <div
            className="min-w-64 min-h-20 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[0]})` }}
          >
            {title && (
              <p className="font-inria-serif text-heise-white text-m p-2">
                {title}
              </p>
            )}
            {description && (
              <p className="font-inria-serif text-heise-white text-xs p-2">
                {description}
              </p>
            )}
          </div>
        </a>
        <div className="w-full flex items-center justify-center flex-col px-5 py-5">
          {text && (
            <p className="text-orange-600 text-xxs font-semibold self-start font-inter">
              {text[0]}
            </p>
          )}
          {text && text.length > 1 && (
            <p className="text-s self-start text-black font-bold font-inter">
              {text[1]}
            </p>
          )}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center py-3"
          >
            <img src={images[1]} className="w-5/6"></img>
          </a>

          <img src={images[2]} alt="Preis" className="w-4/5"></img>
        </div>
      </div>
      <div
        className="my-2 flex items-center justify-center flex-col"
        style={{ width: "100%", height: "10%" }}
      >
        <motion.button
          className="pt-5"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClickUrl(url)}
        >
          <div className={buttonClass}>
            jetzt sichern
            <i className="fa-solid fa-chevron-right text-xxs ml-1"></i>
          </div>
        </motion.button>
        {text && text.length > 2 && (
          <p className="text-xxs  text-black font-inter mb-1">{text[2]}</p>
        )}
      </div>
    </div>
  );
}
