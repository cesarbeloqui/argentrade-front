import useLocalizedContent from "../../hooks/useLocalizedContent";

const LogoComponent = ({ className }) => {
	const { paraQuienesSection } = useLocalizedContent();
	const { circulo } = paraQuienesSection;
  return (
    <div
      dangerouslySetInnerHTML={{ __html: circulo }}
      className={className}
    />
  );
};




export default LogoComponent;
