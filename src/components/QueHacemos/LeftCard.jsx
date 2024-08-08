import { PropTypes } from "prop-types";

const LeftCard = ({ titulo, contenido }) => {
  const lines = contenido.split("\n");

  return (
    <>
      <div className="sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2">
        <div
          className="flex text-secondary font-extrabold sm:text-[2.7vw] text-[8vw] mb-2 scroll-animated-show-left"
        >
          <h1>{titulo}</h1>
        </div>
      </div>
      <div className="sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-5">
        <div className="flex flex-col items-start bg-secondary sm:text-[1.5vw] text-white px-3 py-3 sm:px-[4vw] sm:py-10 text-left scroll-animated-show">
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

LeftCard.propTypes = {
  titulo: PropTypes.string.isRequired,
  contenido: PropTypes.string.isRequired,
};

export default LeftCard;
