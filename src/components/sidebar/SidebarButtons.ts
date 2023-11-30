export interface Button {
  id: number;
  name: string;
  path: string;
}

const buttons: Button[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Calendar",
    path: "/calendar",
  },
  {
    id: 3,
    name: "About",
    path: "/about",
  },
];

export default buttons;
