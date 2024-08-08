const LeftCard = ({ titulo, contenido }) => {
  const lines = contenido.split("\n");
  return (
    <>
      <div className="sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2 scroll-animated-show">
        <div className="flex text-secondary font-extrabold sm:text-[2.7vw] text-[8vw] mb-2">
          <h1>{titulo}</h1>
        </div>
      </div>
      <div className="sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-5 scroll-animated-show">
        <div className="bg-secondary sm:text-[1.5vw] text-white px-3 py-3 sm:px-[4vw] sm:py-10 text-left ">
          {lines.map((line, index) => {
            return (
              <p key={index} className={index === 0 ? "" : "pt-6"}>
                {line}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LeftCard;
