/* eslint-disable react/no-unescaped-entities */
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import Input from "../../components/Input/index.jsx";
import { signin } from "../../services/userServices.js";
import { Button, Container, ContainerForm } from "./styles.jsx";
import ReactLoading from "react-loading";
import Swal from "sweetalert2";

const signinSchema = z.object({
  email: z.string().email({ message: "Invalid Email" }).toLowerCase(),
  password: z
    .string()
    .min(6, { message: "Password must have at least 6 characters" }),
});

export default function SignIn() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(signinSchema),
  });

  async function handleSignIn(data) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await signin(data);
      Cookies.set("token", response.data, { expires: 1 });

      navigate("/home");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Login failed",
        text: "Please check your email and password and try again.",
      });
    }
  }

  return (
    <Container>
      <ContainerForm>
        <p>Welcome to My Polls!</p>
        <h1>Log in to your account</h1>

        <form onSubmit={handleSubmit(handleSignIn)}>
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
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
              <ReactLoading
                type="spin"
                color="#FFFFFF"
                width={25}
                height={25}
              />
              </div>
            ) : (
              "Login"
            )}
          </Button>
        </form>
        <span>
          Don't have an account? <Link to="/signup">Sign Up!</Link>
        </span>
      </ContainerForm>
    </Container>
  );
}
