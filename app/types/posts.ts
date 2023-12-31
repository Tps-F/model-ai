import { type Database } from "../types/database";

type PostEntity = Database["public"]["Tables"]["models"]["Row"];
type UserEntity = Database["public"]["Tables"]["users"]["Row"];

export type Post = PostEntity & {
  user: UserEntity;
};
