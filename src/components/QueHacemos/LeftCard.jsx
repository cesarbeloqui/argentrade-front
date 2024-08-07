const LeftCard = ({ titulo, contenido }) => {
  const lines = contenido.split("\n");
  return (
    <div className="col-span-4 mb-24">
      <div className="flex pb-5 pt-10 text-secondary font-bold text-4xl">
        <h1>{titulo}</h1>
      </div>
      <div className="bg-secondary text-[1.5vw] text-white px-14 py-10 text-left">
        {lines.map((line, index) => 
        {
            return (<p key={index} className={index === 0 ? "" : "pt-6"}>
            {line}
          </p>)}
        )}
      </div>
    </div>
  );
};
export default LeftCard;
