export interface Button {
  id: number;
  name: string;
  path: string;
}

const buttons: Button[] = [
  {
    id: 1,
    name: "Exercises",
    path: "/exercises",
  },
  {
    id: 2,
    name: "Calendar",
    path: "/calendar",
  },
  {
    id: 3,
    name: "Add Exercise",
    path: "/addexercise",
  },
  {
    id: 4,
    name: "About",
    path: "/about",
  },
];

export default buttons;
