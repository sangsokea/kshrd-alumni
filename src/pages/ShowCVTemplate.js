import React from "react";
import cvHrd from "../commons/images/cvhrd.png";
import cvAlumni from "../commons/images/cvAlumni.png";
import { useNavigate } from "react-router-dom";

export default function ShowCVTemplate() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/sidebar/createNewCV");
  };
  return (
    <>
      <h1 className="mx-5 mt-5 desktop:mt-10 font-bold text-ccon">
        Choose Template:
      </h1>
      <div onClick={handleClick} className="h-full mb-10 flex">
        <div class=" mx-5 mt-5 desktop:mt-10 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
          <img
            src={cvHrd}
            class="object-contain h-auto w-96 hover:scale-105 duration-75"
          />
        </div>

        <div
          onClick={handleClick}
          class=" mt-5 desktop:mt-10 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
        >
          <img
            src={cvAlumni}
            class="object-contain h-auto w-96 -600 hover:scale-105 duration-75"
          />
        </div>
      </div>
    </>
  );
}
