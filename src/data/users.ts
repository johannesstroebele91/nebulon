export interface User {
  id: number;
  name: string;
  age: number;
}

export const users: User[] = [
  {
    id: 1,
    name: "John Brown",
    age: 32,
  },
  {
    id: 2,
    name: "Jim Green",
    age: 42,
  },
  {
    id: 3,
    name: "Joe Black",
    age: 32,
  },
];
