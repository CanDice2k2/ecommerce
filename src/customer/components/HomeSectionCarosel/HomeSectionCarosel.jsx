import React, {useState} from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowRight';

const HomeSectionCarosel = ({data, sectionName}) => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const items = data.slice(0, 10).map((item) => <HomeSectionCard key={item.id} product={item} />);
  
  const [prevButtonHovered, setPrevButtonHovered] = useState(false);
  const [nextButtonHovered, setNextButtonHovered] = useState(false);

  const handlePrevButtonMouseEnter = () => {
    setPrevButtonHovered(true);
  };

  const handlePrevButtonMouseLeave = () => {
    setPrevButtonHovered(false);
  };

  const handleNextButtonMouseEnter = () => {
    setNextButtonHovered(true);
  };

  const handleNextButtonMouseLeave = () => {
    setNextButtonHovered(false);
  };

  const renderPrevButton = ({ isDisabled }) => (
    <button
      disabled={isDisabled}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 prev-button"
      style={{
        display: activeIndex === 0 ? "none" : "block",
        position: "absolute",
        top: "8rem",
        left: "0rem",
        transform: "translateX(-50%) rotate(90deg)",
        backgroundColor: prevButtonHovered ? "blue" : "white", // Màu nền thay đổi khi hover
        width: "60px", // Chiều rộng của nút
        height: "30px", // Chiều cao của nút
        borderRadius:"5px",
        border: "1px solid black",
      }}
      onClick={() => setActiveIndex(activeIndex - 1)}
      onMouseEnter={handlePrevButtonMouseEnter}
      onMouseLeave={handlePrevButtonMouseLeave}
    >
      <KeyboardArrowLeftIcon style={{ transform: "rotate(90deg)", color: prevButtonHovered?"white":"black" }} />
    </button>
  );

  const renderNextButton = ({ isDisabled }) => (
    <button
      disabled={isDisabled}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 next-button"
      style={{
        display: activeIndex >= items.length/2 ? "none" : "block",
        position: "absolute",
        top: "8rem",
        right: "-1rem",
        transform: "translateX(50%) rotate(-90deg)",
        backgroundColor: nextButtonHovered ? "blue" : "white", // Màu nền thay đổi khi hover
        width: "60px", // Chiều rộng của nút
        height: "30px", // Chiều cao của nút
        borderRadius:"5px",
        border: "1px solid black",
      }}
       onClick={() => setActiveIndex(activeIndex + 1)}
      // onClick={() => {
      //   setActiveIndex(activeIndex + 1);
      //   console.log("Active index:", activeIndex ); // Log active index
      //   console.log("length:", items.length );
      // }}
      onMouseEnter={handleNextButtonMouseEnter}
      onMouseLeave={handleNextButtonMouseLeave}
    >
      <KeyboardArrowLeftIcon style={{ transform: "rotate(90deg)", color: nextButtonHovered?"white":"black" }} />
    </button>
  );

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableDotsControls
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
        />
      </div>
    </div>
  );
};

export default HomeSectionCarosel;