export interface User {
    id: number;
    name: string;
    email: string;
  }
  
  export type CreateUserDTO = Omit<User, "id">;