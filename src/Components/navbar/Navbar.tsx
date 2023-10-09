import React from "react";
import buttons from "./buttons";

const Navbar = () => {
  return (
    <div className="w-[300px] h-[90vh] bg-slate-600 justify-start items-start">
      {buttons.map((item) => (
        <div key={item.id}>
          <span>
            <button>{item.name}</button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
