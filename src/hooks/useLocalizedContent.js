import { useSelector } from "react-redux";
import { selectData } from "../redux/dataSlice";
import { selectLanguage } from "../redux/languageSlice";

const useLocalizedContent = () => {
  const language = useSelector(selectLanguage);
  const data = useSelector(selectData);
  const localizedContent = data[language] || {};

  return localizedContent;
};

export default useLocalizedContent;
