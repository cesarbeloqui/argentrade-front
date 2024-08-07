const RightCard = ({ titulo, contenido }) => {
  return (
    <div className="shadow col-span-4 bg-gray-900">
      <div className="py-5">
        <h1>{titulo}</h1>
      </div>
      <div className="px-4 py-5 sm:p-6">{contenido}</div>
    </div>
  );
};
export default RightCard;
