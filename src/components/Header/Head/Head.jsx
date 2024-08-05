import { useEffect } from "react";
import head1 from "../../../assets/head1.png";
import { useState } from "react";

const Head = () => {
  const [str, setStr] = useState("");
  useEffect(() => {
    setStr(`${head1}`);
  }, []);
  return (
    <>
      <div>
        <div
          className={`w-full h-[535.094px] mx-auto p-0 bg-hero-1 bg-no-repeat bg-center bg-contain`}
        />
      </div>
    </>
  );
};
export default Head;
