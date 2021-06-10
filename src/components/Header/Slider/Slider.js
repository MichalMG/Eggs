import { useEffect, useRef } from 'react';
import img from '../../../assets/img/1.jpg';
import img2 from '../../../assets/img/2.jpg';
import img3 from '../../../assets/img/3.jpg';
import SliderElement from './SliderElement/SliderElement';

export default function Slider() {

  const sliderElement = useRef();
  const dotElements = useRef();
  let index = 0;
  let timeOutHandler;

  const dotHandler = (i) => {
    clearTimeout(timeOutHandler)
    index = i;
    return sliderHandler();
  }

  const sliderHandler = () => {
    if (index === sliderElement.current.children.length) {
      index = 0;
    }
    for (let i = 0; i < sliderElement.current.children.length; i++) {
      sliderElement.current.children[i].classList.add('d-none');
      sliderElement.current.children[i].style.animation = 'none';
      dotElements.current.children[i].classList.remove('dotActive');
    }
    sliderElement.current.children[index].classList.add('d-block');
    sliderElement.current.children[index].style.animation = 'imgHandler 6s linear';
    sliderElement.current.children[index].classList.remove('d-none');
    dotElements.current.children[index].classList.add('dotActive');


    index++;

    timeOutHandler = setTimeout(sliderHandler, 6000);
  }

  useEffect(() => {

    const dots = dotElements.current;

    for (let i = 0; i < dots.children.length; i++) {
      dots.children[i].addEventListener("click", () => dotHandler(i));
    }
    sliderHandler();

    return () => {
      for (let i = 0; i < dots.children.length; i++) {
        dots.children[i].removeEventListener("click", () => dotHandler(i));
      };
      clearTimeout(timeOutHandler);
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div ref={sliderElement} className="header_slider position-absolute d-block" style={{ width: '100%', height: '100%', top: 0, left: 0 }}>
        <SliderElement btnTitle="Lorem" title="Lorem lorem" description="Lorem lorem lorem lorem lorem" image={img} />
        <SliderElement btnTitle="Lorem" title="Lorem lorem" description="Lorem lorem lorem lorem lorem" image={img2} />
        <SliderElement btnTitle="Lorem" title="Lorem lorem" description="Lorem lorem lorem lorem lorem" image={img3} />
      </div>

      <div ref={dotElements} className="slider_control position-absolute text-white" style={{ left: '50%', bottom: '5%', transform: 'translateX(-50%)', zIndex: 2 }}>
        <span className="me-3 dotActive" style={{ cursor: 'pointer' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle-fill" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="8" />
          </svg>
        </span>
        <span className="me-3" style={{ cursor: 'pointer' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle-fill" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="8" />
          </svg>
        </span>
        <span style={{ cursor: 'pointer' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle-fill" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="8" />
          </svg>
        </span>
      </div>
    </>
  )
}