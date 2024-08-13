import useLocalizedContent from "../../../hooks/useLocalizedContent";
import Slider1 from "./Slide1";
import Slider2 from "./Slide2";
import { Carousel } from "flowbite-react";

const customTheme = {
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
    snap: "snap-x",
  },
};


const Slider = () => {
  const {slider2, slider3} = useLocalizedContent()
  return (
    <>
      {/* <Slider1 {...{ subTittle, carrusel, isologo }} /> */}

      <div className="h-[65vh] sm:h-[39.88vw]">
        <Carousel theme={customTheme} slideInterval={5000} pauseOnHover>
          <Slider1 />
          <Slider2 slider={slider2.items} bg={ slider2.bg} /> 
          <Slider2 slider={slider3.items} bg={slider3.bg } /> 
        </Carousel>
      </div>
    </>
  );
};
export default Slider;
