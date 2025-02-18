import { createContext, useContext } from "react";

export const UserContext = createContext(null);

export function useUserContext() {
  const user = useContext(UserContext);

  return user;
}