import React, {useEffect, useState, useRef} from 'react'
import "./Cards.css"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Cards() {
        const [firstImg, setFirstImg] = useState(null);
        const [arrowIcons, setArrowIcons] = useState([]);
        const [isDragStart, setIsDragStart] = useState(false);
        const prevPageX = useRef(0);
        const prevScrollLeft = useRef(0);
        const carouselRef = useRef(null);
      
        useEffect(() => {
          const carousel = document.querySelector(".carousel");
          const images = carousel.querySelectorAll("img");
          const icons = document.querySelectorAll(".icon");
          setArrowIcons(Array.from(icons));
          setFirstImg(images[0]);
          carouselRef.current = carousel;
        }, []);
      
        useEffect(() => {
          if (firstImg) {
            const firstImgWidth = firstImg.clientWidth + 14;
            const showHideIcons = () => {
              if (carouselRef.current) {
                const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;
                arrowIcons[0].style.display = scrollLeft === 0 ? "none" : "block";
                arrowIcons[1].style.display = scrollLeft === scrollWidth - clientWidth ? "none" : "block";
              }
            };
            const handleIconClick = (icon) => {
              if (carouselRef.current) {
                carouselRef.current.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth;
                setTimeout(showHideIcons, 60);
              }
            };
            const dragStart = (e) => {
              setIsDragStart(true);
              prevPageX.current = e.pageX;
              prevScrollLeft.current = carouselRef.current.scrollLeft;
            };
            const dragging = (e) => {
              if (!isDragStart) return;
              e.preventDefault();
              carouselRef.current.classList.add("dragging");
              const positionDiff = e.pageX - prevPageX.current;
              carouselRef.current.scrollLeft = prevScrollLeft.current - positionDiff;
              showHideIcons();
            };
            const dragStop = () => {
              setIsDragStart(false);
              carouselRef.current.classList.remove("dragging");
            };
            if (carouselRef.current) {
              carouselRef.current.addEventListener("mousedown", dragStart);
              carouselRef.current.addEventListener("mousemove", dragging);
              carouselRef.current.addEventListener("mouseup", dragStop);
            }
            arrowIcons.forEach((icon) => {
              icon.addEventListener("click", () => handleIconClick(icon));
            });
            return () => {
              if (carouselRef.current) {
                carouselRef.current.removeEventListener("mousedown", dragStart);
                carouselRef.current.removeEventListener("mousemove", dragging);
                carouselRef.current.removeEventListener("mouseup", dragStop);
              }
              arrowIcons.forEach((icon) => {
                icon.removeEventListener("click", () => handleIconClick(icon));
              });
            };
          }
        }, [firstImg, arrowIcons]);

  return (
    <div className="body">
        <div className="wrapper">
            <KeyboardArrowLeftIcon className="icon icon-left" id="left"/>
                <div className="carousel">
                    <img src="https://i.pinimg.com/564x/ac/ca/47/acca47804b852b48f7b3c7fee1e2a756.jpg" alt="" />
                    <img src="https://i.pinimg.com/564x/ac/ca/47/acca47804b852b48f7b3c7fee1e2a756.jpg" alt="" />
                    <img src="https://i.pinimg.com/564x/ac/ca/47/acca47804b852b48f7b3c7fee1e2a756.jpg" alt="" />
                    <img src="https://i.pinimg.com/564x/ac/ca/47/acca47804b852b48f7b3c7fee1e2a756.jpg" alt="" />
                    <img src="https://i.pinimg.com/564x/ac/ca/47/acca47804b852b48f7b3c7fee1e2a756.jpg" alt="" />
                </div>
            <KeyboardArrowRightIcon className="icon icon-right" id="right"/>
        </div>
    </div>
  )
}

export default Cards