import { Link } from "react-router-dom";
import { Button, Container, Input, ContainerForm } from "./styles.jsx";

export default function SignUp() {
  return (
    <Container>
      <ContainerForm>
        <h2>Cadastre-se</h2>
        <form>
          <Input placeholder="Name" type="text" />
          <Input placeholder="E-mail" type="text" />
          <Input placeholder="Password" type="password" />
          <Button type="submit">Cadastrar</Button>
        </form>
        <span>
          Já tem cadastro? <Link to="/">Faça seu Login!</Link>
        </span>
      </ContainerForm>
    </Container>
  );
}
