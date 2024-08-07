import isologo from "../../../assets/isologo.png";
import carrusel from "../../../assets/carrousel.png";
import Slider1 from "./Slide1";
import useLocalizedContent from "../../../hooks/useLocalizedContent";

const Slider = () => {
  const { subTitleSlider1 } = useLocalizedContent();
  const subTittle = subTitleSlider1
    "Facilitamos importaciones desde China para el éxito global de tu empresa";
  return (
    <>
      <Slider1 {...{ subTittle, carrusel, isologo }} />
    </>
  );
};
export default Slider;
