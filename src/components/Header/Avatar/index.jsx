import { AvatarContainer, AvatarRoot, DropdownContainer } from "./styles.jsx";
import { FaUserCircle, FaEdit, FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";

export function Avatar() {
  // const { user } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <AvatarContainer>
      <AvatarRoot onClick={toggleDropdown}>
        <FaUserCircle size={32} color="#ff6200" />
      </AvatarRoot>
      <span> Tais{/* {getFirstAndLastName(user?.name)} */}</span>

      {isDropdownOpen && (
        <DropdownContainer>
          <ul>
            <li onClick={() => console.log("Editar clicado")}>
              Editar
              <FaEdit size={16}  />
            </li>
            <li onClick={() => console.log("Sair clicado")}>
              Sair
              <FaSignOutAlt size={16}  />
            </li>
          </ul>
        </DropdownContainer>
      )}
    </AvatarContainer>
  );
}
