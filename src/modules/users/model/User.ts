import { v4 as uuidV4 } from "uuid";

export type UserType = {
  id: string
  name: string
  admin: boolean
  email: string
  created_at: Date
  updated_at: Date
}

class User implements UserType{
  id = uuidV4();
  name: string;
  admin = false;
  email: string;
  created_at: Date;
  updated_at: Date;
}

export { User };
