import { AvatarContainer, AvatarRoot, DropdownContainer } from "./styles.jsx";
import { FaUserCircle, FaEdit, FaSignOutAlt } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext.jsx";
import { userLogged } from "../../../services/userServices.js";
import Cookies from "js-cookie";

export function Avatar() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  async function findUserLogged() {
    try {
      const response = await userLogged();
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleLogout() {
    Cookies.remove("token");
    setUser(undefined);
    navigate("/");
  }

  useEffect(() => {
    if (Cookies.get("token")) findUserLogged();
  }, []);


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <AvatarContainer>
      <AvatarRoot onClick={toggleDropdown}>
        <FaUserCircle size={32} color="#ff6200" />
      </AvatarRoot>
      {user ? <span>{user.name}</span> : "a"}

      {isDropdownOpen && (
        <DropdownContainer>
          <ul>
            {/* <li onClick={() => console.log("Editar")}>
              Profile
              <FaEdit size={16} />
            </li> */}
            <li onClick={handleLogout}>
              Logout
              <FaSignOutAlt size={16} />
            </li>
          </ul>
        </DropdownContainer>
      )}
    </AvatarContainer>
  );
}
