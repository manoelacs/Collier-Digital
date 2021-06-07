import api, { TOKEN_KEY } from "./api";

export interface ISignIn {
  username: string;
  password: string;
}

export const signIn = async (signInData: ISignIn) => {
  const { username, password } = signInData;
  const response = await api.post("login", { username, password });

  sessionStorage.setItem(TOKEN_KEY, response?.data?.accessToken);
};

export const signOut = async () => {
  sessionStorage.removeItem(TOKEN_KEY);
};