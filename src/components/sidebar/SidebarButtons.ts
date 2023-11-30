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
    name: "Today",
    path: "/today",
  },
  {
    id: 3,
    name: "Calendar",
    path: "/calendar",
  },

  {
    id: 4,
    name: "About",
    path: "/about",
  },
];

export default buttons;
