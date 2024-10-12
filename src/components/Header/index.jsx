import { HeaderContainer, Logo } from "./styles";
import logo from "../../assets/beuni-logo.png";
import { Avatar } from "./Avatar";

export function Header() {
  return (
    <>
      <HeaderContainer>
        <Logo src={logo} alt="logo beuni" />
        <p>My Polls</p>
        <Avatar />
      </HeaderContainer>
    </>
  );
}

export default Header;
