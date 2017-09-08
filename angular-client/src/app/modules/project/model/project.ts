import { User } from '../../users/model/user';

export class Project {
  id: string;
  name: string;
  description: string;
  users: Array<User> = new Array<User>();
}
