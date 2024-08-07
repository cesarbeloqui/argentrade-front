import load from "../../../assets/Loading.png";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <img
        src={load}
        alt=""
        className="w-16 animate-rotate-360 animate-infinite"
        style={{ animationIterationCount: "infinite" }}
      />
    </div>
  );
};
export default Loading;
