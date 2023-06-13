import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const imagesArray = [
  "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/235622/pexels-photo-235622.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/235623/pexels-photo-235623.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/235624/pexels-photo-235624.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/3408745/pexels-photo-3408745.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/3408746/pexels-photo-3408746.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

export default function ImageCarousel() {
  const [imageIndex, setImageIndex] = useState(0);

  function previousHandler() {
    if (imageIndex === 0) {
      setImageIndex(imagesArray.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  }

  function nextHandler() {
    if (imageIndex === imagesArray.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  }

  return (
    <div>
      <h2>Image Slider or Carousel</h2>

      <div>
        <div style={{ position: "relative" }}>
          <img
            src={imagesArray[imageIndex]}
            alt=""
            width="600px"
            height="400px"
          />
        </div>
        <FaChevronLeft
          onClick={previousHandler}
          style={{
            position: "fixed",
            left: "400px",
            top: "250px",
            color: "white",
            fontSize: "2rem",
            cursor: "pointer",
          }}
        />
        <FaChevronRight
          onClick={nextHandler}
          style={{
            position: "fixed",
            right: "400px",
            top: "250px",
            color: "white",
            fontSize: "2rem",
            cursor: "pointer",
          }}
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "1rem" }}
      >
        {imagesArray.map((dot, index) => {
          return (
            <div
              style={{
                margin: "10px",
                width: "10px",
                height: "10px",
                border: "1px solid black",
                borderRadius: "50%",
                backgroundColor: index === imageIndex ? "skyblue" : null,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
