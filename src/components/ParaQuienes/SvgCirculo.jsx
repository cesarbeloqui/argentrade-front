import useLocalizedContent from "../../hooks/useLocalizedContent";

const LogoComponent = ({ className, id, elementsRef }) => {
	const { paraQuienesSection } = useLocalizedContent();
	const { circulo } = paraQuienesSection;
  return (
    <div
      dangerouslySetInnerHTML={{ __html: circulo }}
      className={className}
      ref={(el) => (elementsRef.current[id] = el)}
      id={id}
    />
  );
};




export default LogoComponent;
