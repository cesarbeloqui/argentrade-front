import Navbar from "./Navbar/Navbar";
import Logo from "../../assets/Logo.png";
import Slider from "./Slider/Slider";
import useLocalizedContent from "../../hooks/useLocalizedContent";
const Header = ({ resources }) => {
  const localizedContent = useLocalizedContent();
  const navigationItems = [
    { name: localizedContent.inicio, href: "#inicio", current: false },
    { name: localizedContent.queHacemos, href: "#que-hacemos", current: false },
    {
      name: localizedContent.paraQuienes,
      href: "#para-quienes",
      current: false,
    },
    { name: localizedContent.serviciosYProductos, href: "#servicios-y-productos", current: false },
    { name: localizedContent.contacto, href: "#contacto", current: false },
  ];
  return (
    <>
      <Navbar navigationItems={navigationItems} Logo={Logo} />
      <section id="inicio">
        <Slider />
      </section>
    </>
  );
};

export default Header;
