import React from "react";
import { Button } from "./Buttons";

interface Props {
  buttons: Button[];
}

const Navbar = (props: Props) => {
  return (
    <div className="w-[300px] h-[90vh] bg-slate-600 justify-start items-start">
      {props.buttons.map((item) => (
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
