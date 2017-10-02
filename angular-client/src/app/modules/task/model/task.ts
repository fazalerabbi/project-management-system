import { User } from '../../users/model/user';

export class Task {
  _id: string;
  tracker: string;
  project_id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  start_date: string;
  end_date: string;
  assignee: string;
  parent_id: string;
  estimate_hour: string;
  percent_done: string;
  watchers: Array<User> = new Array<User>();
}
