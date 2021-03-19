import { User } from "../model/User";

export interface ICreateUserDTO {
  name: string;
  email: string;
}

export interface IUsersRepository {
  create({ name, email }: ICreateUserDTO): User;
  findById(id: string): User | undefined;
  findByEmail(email: string): User | undefined;
  turnAdmin(user: User): User;
  list(): User[];
}
