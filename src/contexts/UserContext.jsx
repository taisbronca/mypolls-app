/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { userLogged } from "../services/userServices";
import Cookies from "js-cookie";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const validateUserLogged = async () => {
    const token = Cookies.get("token");
    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const response = await userLogged();
      setUser(response.data || null);
    } catch (error) {
      console.log("Erro ao buscar usuário logado:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // useEffect para buscar o usuário ao montar o componente
  useEffect(() => {
    validateUserLogged();
  }, []);


  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
}