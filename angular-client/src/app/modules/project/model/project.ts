import { User } from '../../users/model/user';

export class Project {
  _id: string;
  name: string;
  description: string;
  users: Array<User> = new Array<User>();
}
