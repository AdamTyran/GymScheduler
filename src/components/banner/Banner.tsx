import React from "react";
import { TiThMenu } from "react-icons/ti";

interface Props {
  toggleSidebar(): void;
}

const Banner = ({ toggleSidebar }: Props) => {
  return (
    <div className="min-h-[5vh] bg-gray-800 text-white flex items-center">
      <button className="hover:bg-gray-700" onClick={toggleSidebar}>
        <TiThMenu className="w-[4vh] h-[4vh]" />
      </button>
    </div>
  );
};

export default Banner;
