import "./index.css";
import logo from "../../assets/footer.png";
import useLocalizedContent from "../../hooks/useLocalizedContent";

const Footer = () => {
  const { footer } = useLocalizedContent();
  const { lista1, redes } = footer;
  return (
    <section className="container-footer w-full bg-secondary sm:p-0 py-8 sm:py-8">
      <div></div>
      <div className="logo">
        <img src={logo} alt="" className="w-[90%]" />
      </div>
      <div></div>
      <div className="contacto flex flex-col mt-10 ml-12 sm:m-0">
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
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.icon} className="w-[7%] mr-6" key={index} />
              </a>
          ))}
        </div>
      </div>
      <div></div>
    </section>
  );
};
export default Footer;
