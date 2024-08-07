import Navbar from "./Navbar/Navbar";
import Logo from "../../assets/Logo.png";
import Slider from "./Slider/Slider";
import useLocalizedContent from "../../hooks/useLocalizedContent";
const Header = ({ resources }) => {
  const localizedContent = useLocalizedContent();
  const navigationItems = [
    { name: localizedContent.inicio, href: "#inicio", current: true },
    { name: localizedContent.queHacemos, href: "#que-hacemos", current: false },
    { name: localizedContent.paraQuienes, href: "#", current: false },
    { name: localizedContent.serviciosYProductos, href: "#", current: false },
    { name: localizedContent.contacto, href: "#", current: false },
  ];
  return (
    <section id="inicio">
      <Navbar navigationItems={navigationItems} Logo={Logo} />
      <Slider />
    </section>
  );
};

export default Header;
