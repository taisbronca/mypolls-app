import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import Input from "../../components/Input/index.jsx";
import { signup } from "../../services/userServices.js";
import { Button, Container, ContainerForm, ErrorMessage } from "./styles.jsx";
import ReactLoading from "react-loading";
import Swal from "sweetalert2";

const signupSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must have at least 6 characters" }),
});

export default function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  async function handleSignUp(data) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await signup(data);
      Cookies.set("token", response.data, { expires: 1 });

      Swal.fire({
        icon: "success",
        title: "Account created",
        text: "Your account has been successfully created!",
      });

      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "User already exists",
          text: "An account with this email already exists. Please try logging in.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Sign Up failed",
          text: "Please check your details and try again.",
        });
      }
    }
  }

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
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          <Input
            placeholder="E-mail"
            type="text"
            {...register("email")}
            className={errors.email ? "error" : ""}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          <Input
            placeholder="Password"
            type="password"
            {...register("password")}
            className={errors.password ? "error" : ""}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <ReactLoading
                  type="spin"
                  color="#FFFFFF"
                  width={25}
                  height={25}
                />
              </div>
            ) : (
              "Create Account"
            )}
          </Button>
        </form>
        <span>
          Already have an account? <Link to="/">Log In!</Link>
        </span>
      </ContainerForm>
    </Container>
  );
}
