import { Button } from "./SidebarButtons";
import { Link } from "react-router-dom";

interface Props {
  buttons: Button[];
  open: boolean;
}

const Sidebar = ({ buttons, open }: Props) => {
  return (
    <div
      className={`${
        open ? "hidden" : ""
      } flex flex-col z-40 w-64 bg-gray-800 border-r border-solid border-white`}
    >
      {buttons.map((item) => (
        <div
          key={item.id}
          className="px-3 overflow-y-auto space-y-2 font-medium pb-5 [&:first-child]:pt-3"
        >
          <Link
            className="flex items-center p-2 text-white hover:bg-gray-700 hover:rounded-lg"
            to={item.path}
          >
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
