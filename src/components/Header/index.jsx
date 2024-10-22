import { HeaderContainer, Logo } from "./styles";
import logo from "../../assets/polling.png";
import { Avatar } from "./Avatar";

export function Header() {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="logo mypolls" />
      <p>My Polls</p>
      <Avatar />
    </HeaderContainer>
  );
}

export default Header;
