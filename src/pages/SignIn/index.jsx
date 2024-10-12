import { Link } from "react-router-dom";
import { Button, Container, Input, ContainerForm } from "./styles.js";

export default function SignIn() {
  return (
    <Container>
      <ContainerForm>
        <p>Boas vindas ao My Polls!</p>
        <h1>Faça o login com sua conta</h1>

        <form>
          <Input placeholder="E-mail" type="text" />
          <Input placeholder="Password" type="password" />

          <Button type="submit">Login</Button>
        </form>
        <span>Não tem cadastro? <Link to="/sign-up">Clique aqui!</Link></span>
      </ContainerForm>
    </Container>
  );
}
