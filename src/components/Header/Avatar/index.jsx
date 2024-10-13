import { AvatarContainer, AvatarRoot, DropdownContainer } from "./styles.jsx";
import { FaUserCircle, FaEdit, FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Avatar() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function handleLogout() {
    navigate("/");
  }

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
            <li onClick={() => console.log("Editar")}>
              Editar
              <FaEdit size={16} />
            </li>
            <li onClick={handleLogout}>
              Sair
              <FaSignOutAlt size={16} />
            </li>
          </ul>
        </DropdownContainer>
      )}
    </AvatarContainer>
  );
}
