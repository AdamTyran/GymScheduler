import React from "react";
import { TiThMenu } from "react-icons/ti";

interface Props {
  toggleSidebar(): void;
}

const Banner = ({ toggleSidebar }: Props) => {
  return (
    <div className="h-10 w-screen bg-gray-800 text-white flex items-center">
      <button className="hover:bg-gray-700" onClick={toggleSidebar}>
        <TiThMenu className="w-10 h-10" />
      </button>
    </div>
  );
};

export default Banner;
