import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import Input from "../../components/Input/index.jsx";
import { signup } from "../../services/userServices.js";
import { Button, Container, ContainerForm } from "./styles.jsx";

const signupSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must have at least 3 characters" })
    .optional(),
  email: z.string().email({ message: "Invalid email address" }).optional(),
  password: z
    .string()
    .min(6, { message: "Password must have at least 6 characters" })
    .optional(),
});

export default function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  async function handleSignUp(data) {
    try {
      const response = await signup(data);
      Cookies.set("token", response.data, { expires: 1 });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  console.log(handleSignUp)

  return (
    <Container>
      <ContainerForm>
        <h2>Create your account!</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <Input
            placeholder="Name"
            type="text"
            {...register("name")}
            className={errors.name ? "error" : ""}
          />

          <Input
            placeholder="E-mail"
            type="text"
            {...register("email")}
            className={errors.email ? "error" : ""}
          />

          <Input
            placeholder="Password"
            type="password"
            {...register("password")}
            className={errors.password ? "error" : ""}
          />

          <Button type="submit">Create Account</Button>
        </form>
        <span>
          Already have an account? <Link to="/">Log In!</Link>
        </span>
      </ContainerForm>
    </Container>
  );
}
