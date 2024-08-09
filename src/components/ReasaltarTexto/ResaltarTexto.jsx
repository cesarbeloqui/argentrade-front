export const separateText = (text) => {
  const regex = /\{r\}(.*?)\{\/r\}/g;
  let parts = [];
  let lastIndex = 0;
  // Encuentra todas las coincidencias y divide el texto en partes
  text.replace(regex, (match, p1, offset) => {
    // Agrega la parte antes del marcador
    if (offset > lastIndex) {
      parts.push({ type: "texto", content: text.slice(lastIndex, offset) });
    }
    // Agrega la parte dentro del marcador
    parts.push({ type: "resaltar", content: p1 });
    lastIndex = offset + match.length;
    return match;
  });

  // Agrega la parte final después del último marcador
  if (lastIndex < text.length) {
    parts.push({ type: "texto", content: text.slice(lastIndex) });
  }

  return parts;
};

const ReasaltarTexto = ({ text, className }) => {
  const parts = separateText(text);
  return (
    <>
      {parts.map((part, index) => (
        <span
          key={index}
          className={part.type === "resaltar" ? `${className}` : ""}
        >
          {part.content}
        </span>
      ))}
    </>
  );
};
export default ReasaltarTexto;
