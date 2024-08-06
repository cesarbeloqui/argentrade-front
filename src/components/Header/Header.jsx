import Navbar from "./Navbar/Navbar";
import Logo from "../../assets/Logo.png";
import Slider from "./Slider/Slider";
const Header = ({ resources }) => {
  const navigationItems = [
    { name: "¿Qué hacemos?", href: "#", current: true },
    { name: "¿Para quiénes?", href: "#", current: false },
    { name: "Servicios y Productos", href: "#", current: false },
    { name: "Contacto", href: "#", current: false },
  ];
  return (
    <>
      <Navbar navigationItems={navigationItems} Logo={Logo} />
      <Slider />
    </>
  );
};

export default Header;
