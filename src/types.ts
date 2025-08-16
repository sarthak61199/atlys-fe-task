export type Post = {
  id: number;
  author: string;
  timeAgo: string;
  content: string;
  image: string;
  emoji: string;
};

export type AuthMode = "sign-in" | "sign-up";

export interface FormData {
  emailOrUsername: string;
  password: string;
  repeatPassword?: string;
}
