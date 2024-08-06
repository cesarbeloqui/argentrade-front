import isologo from "../../../assets/isologo.png";
import carrusel from "../../../assets/carrousel.png";
import Slider1 from "./Slide1";

const Slider = () => {
  const subTittle =
    "Facilitamos importaciones desde China para el éxito global de tu empresa";
  return (
    <>
      <Slider1 {...{ subTittle, carrusel, isologo }} />
    </>
  );
};
export default Slider;
