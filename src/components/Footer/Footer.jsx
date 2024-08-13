import "./index.css";
import logo from "../../assets/footer.png";
import useLocalizedContent from "../../hooks/useLocalizedContent";

const Footer = () => {
  const { footer } = useLocalizedContent();
  const { lista1, redes } = footer;
  return (
    <section className="container-footer w-full bg-secondary py-8">
      <div></div>
      <div className="logo">
        <img src={logo} alt="" className="w-[90%]" />
      </div>
      <div></div>
      <div className="contacto flex flex-col">
        <ul>
          {lista1.map((item, index) => (
            <ul
              key={index}
              className="text-left text-sm flex flex-row items-center mb-3"
            >
              <img src={item.icon} className="w-[7%] mr-4" />
              <p className="text-white font-semibold" key={index}>
                {item.titulo}
              </p>
            </ul>
          ))}
        </ul>
        <div id="redes" className="flex flex-row mt-5">
          {redes.map((item, index) => (
            <img src={item.icon} className="w-[7%] mr-6" key={index} />
          ))}
        </div>
      </div>
      <div></div>
    </section>
  );
};
export default Footer;
