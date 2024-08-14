import { useSelector } from "react-redux";
import { selectData } from "../redux/dataSlice";
import { selectLanguage } from "../redux/languageSlice";
import { useMemo } from "react";

const useLocalizedContent = () => {
  const language = useSelector(selectLanguage);
  const data = useSelector(selectData);

  // Memorizar el contenido localizado basado en el idioma actual
  const localizedContent = useMemo(() => {
    return data[language] || {};
  }, [data, language]);

  return localizedContent;
};

export default useLocalizedContent;
