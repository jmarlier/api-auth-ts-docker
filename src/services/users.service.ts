import { User, CreateUserDTO, UpdateUserDTO } from "../types/user";

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

// 🔹 GET /users/:id
export const getUserById = (id: number): User | undefined => {
  return users.find((user) => user.id === id);
};

// 🔹 PUT /users/:id
export const updateUser = (id: number, data: UpdateUserDTO): User | null => {
  const user = users.find((user) => user.id === id);
  if (!user) {
    return null;
  }

  // On ne met à jour que ce qui est fourni
  if (data.name !== undefined) {
    user.name = data.name;
  }
  if (data.email !== undefined) {
    user.email = data.email;
  }

  return user;
};

// 🔹 DELETE /users/:id
export const deleteUser = (id: number): boolean => {
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) {
    return false;
  }

  users.splice(index, 1);
  return true;
};