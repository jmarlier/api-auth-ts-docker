export interface User {
    id: number;
    name: string;
    email: string;
  }
  
export type CreateUserDTO = Omit<User, "id">;
  
// Pour la mise à jour : name et/ou email, optionnels
export type UpdateUserDTO = Partial<CreateUserDTO>;