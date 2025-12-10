import { User, CreateUserDTO } from "../types/user";

let users: User[] = [];
let nextId = 1;

export const getAllUsers = (): User[] => {
  return users;
};

export const createUser = (data: CreateUserDTO): User => {
  const newUser: User = {
    id: nextId++,
    ...data,
  };

  users.push(newUser);
  return newUser;
};