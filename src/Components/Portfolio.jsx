import Separator from "./Separator";
import portfolioImg from "../assets/images/portfolio.png";
import { useState } from "react";
import ImagePopup from "./ImagePopup";

function Portfolio() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleImageClick = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className=" py-20 px-4">
      <h2 className="text-center uppercase mb-4 font-bold text-3xl">
        portfolio component
      </h2>
      <Separator bg="bg-white" text="bg-black" />
      <div className="flex flex-wrap">
        <div className="sm:w-1/3 p-2">
          <div className="rounded-md overflow-hidden relative group">
            <img className="w-full" src={portfolioImg} alt="portfolio image" />
            <div
              className="flex opacity-0 group-hover:opacity-100 transition-all duration-300  absolute cursor-pointer items-center justify-center bg-caribbeanGreen/75 inset-0"
              onClick={() => handleImageClick(portfolioImg)}
            >
              <i className="fa-solid fa-plus text-5xl text-white"></i>
            </div>
          </div>
        </div>
        <div className="sm:w-1/3 p-2">
          <div className="rounded-md overflow-hidden relative group">
            <img className="w-full" src={portfolioImg} alt="portfolio image" />
            <div
              className="flex opacity-0 group-hover:opacity-100 transition-all duration-300  absolute cursor-pointer items-center justify-center bg-caribbeanGreen/75 inset-0"
              onClick={() => handleImageClick(portfolioImg)}
            >
              <i className="fa-solid fa-plus text-5xl text-white"></i>
            </div>
          </div>
        </div>
        <div className="sm:w-1/3 p-2">
          <div className="rounded-md overflow-hidden relative group">
            <img className="w-full" src={portfolioImg} alt="portfolio image" />
            <div
              className="flex opacity-0 group-hover:opacity-100 transition-all duration-300  absolute cursor-pointer items-center justify-center bg-caribbeanGreen/75 inset-0"
              onClick={() => handleImageClick(portfolioImg)}
            >
              <i className="fa-solid fa-plus text-5xl text-white"></i>
            </div>
          </div>
        </div>
        <div className="sm:w-1/3 p-2">
          <div className="rounded-md overflow-hidden relative group">
            <img className="w-full" src={portfolioImg} alt="portfolio image" />
            <div
              className="flex opacity-0 group-hover:opacity-100 transition-all duration-300  absolute cursor-pointer items-center justify-center bg-caribbeanGreen/75 inset-0"
              onClick={() => handleImageClick(portfolioImg)}
            >
              <i className="fa-solid fa-plus text-5xl text-white"></i>
            </div>
          </div>
        </div>
        <div className="sm:w-1/3 p-2">
          <div className="rounded-md overflow-hidden relative group">
            <img className="w-full" src={portfolioImg} alt="portfolio image" />
            <div
              className="flex opacity-0 group-hover:opacity-100 transition-all duration-300  absolute cursor-pointer items-center justify-center bg-caribbeanGreen/75 inset-0"
              onClick={() => handleImageClick(portfolioImg)}
            >
              <i className="fa-solid fa-plus text-5xl text-white"></i>
            </div>
          </div>
        </div>
        <div className="sm:w-1/3 p-2">
          <div className="rounded-md overflow-hidden relative group">
            <img className="w-full" src={portfolioImg} alt="portfolio image" />
            <div
              className="flex opacity-0 group-hover:opacity-100 transition-all duration-300  absolute cursor-pointer items-center justify-center bg-caribbeanGreen/75 inset-0"
              onClick={() => handleImageClick(portfolioImg)}
            >
              <i className="fa-solid fa-plus text-5xl text-white"></i>
            </div>
          </div>
        </div>
      </div>

      <ImagePopup
        imageSrc={currentImage}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />
    </div>
  );
}

export default Portfolio;
