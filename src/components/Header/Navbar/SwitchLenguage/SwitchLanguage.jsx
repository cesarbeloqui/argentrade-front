import { useSelector, useDispatch } from "react-redux";
import { selectLanguage, setLanguage } from "../../../../redux/languageSlice";
import arg from "../../../../assets/arg.png";
import eeuu from "../../../../assets/eeuu.png";

// Botón individual de selección de idioma
const LanguageButton = ({ isSelected, src, alt, onClick }) => {
  const className = `mr-2 p-1 rounded-full ${isSelected ? "bg-naranja" : "bg-primary"}`;
  return (
    <button className={className} onClick={onClick}>
      <img src={src} alt={alt} className="w-5 h-5" />
    </button>
  );
};

// Lista de idiomas disponibles
const languages = [
  { code: "es", image: arg, alt: "Español" },
  { code: "en", image: eeuu, alt: "English" },
];

// Componente principal de selección de idioma
export default function LanguageSelector() {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(selectLanguage);

  const handleLanguageChange = (languageCode) => {
    dispatch(setLanguage(languageCode));
  };

  return (
    <div className="flex justify-center items-center">
      {languages.map((lang) => (
        <LanguageButton
          key={lang.code}
          isSelected={currentLanguage === lang.code}
          src={lang.image}
          alt={lang.alt}
          onClick={() => handleLanguageChange(lang.code)}
        />
      ))}
    </div>
  );
}
