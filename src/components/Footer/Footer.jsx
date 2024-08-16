import "./index.css";
import logo from "../../assets/footer.png";
import useLocalizedContent from "../../hooks/useLocalizedContent";

const Footer = () => {
  const { footer } = useLocalizedContent();
  const { lista1, redes } = footer;
  return (
    <section className="container-footer w-full bg-secondary py-[4vh]">
      <div></div>
      <div className="logo">
        <a href="/#">
          <img src={logo} alt="" className="w-[80vw]" />
        </a>
      </div>
      <div></div>
      <div className="contacto flex flex-col mt-[4.5vh] ml-[11.5vw] sm:m-0">
        <ul>
          {lista1.map((item, index) => (
            <li
              key={index}
              className="text-left text-sm flex flex-row items-center mb-3"
            >
              <a
                href={item.href}
                className="flex flex-row items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={item.icon}
                  className="w-[9vw] sm:w-[2.5vw] mr-4"
                  alt={item.titulo}
                />
                <p className="text-white font-semibold sm:text-sm text-[3.4vw]">
                  {item.titulo}
                </p>
              </a>
            </li>
          ))}
        </ul>
        <div id="redes" className="flex flex-row mt-[2vh]">
          {redes.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={item.icon}
                className="sm:w-[2.3vw] w-[8.5vw]"
                key={index}
              />
            </a>
          ))}
        </div>
      </div>
      <div></div>
    </section>
  );
};
export default Footer;
