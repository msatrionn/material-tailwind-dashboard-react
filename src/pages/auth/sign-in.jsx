import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import AuthService from "@/services/auth.service";
import { useEffect, useRef, useState } from "react";
import ToastDanger from "@/components/Toast/toastDanger";

export function SignIn() {
  let navigate = useNavigate();

  const [modal, setModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameValidate, setUsernameValidate] = useState(true);
  const [passwordValidate, setPasswordValidate] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  if (localStorage.getItem("user") != null) {
    navigate("/dashboard/home");
  }
  const onChangeUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setUsernameValidate(username);
    setPasswordValidate(password);
    if (usernameValidate != "" || passwordValidate != "") {
      setLoading(true);

      AuthService.login(username, password).then(
        () => {
          navigate("/profile");
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          console.log(resMessage);
          // setModal(true);
          alert("login gagal");

          setLoading(false);
          setMessage(resMessage);
        }
      );
    }
  };
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      {loading ?? <div>loading.....</div>}
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <ToastDanger modals={modal} messages={message} />

      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              type="text"
              label="Username"
              size="lg"
              onChange={(e) => onChangeUsername(e)}
            />
            {usernameValidate == "" ? (
              <div className="rounded bg-pink-400 p-2 text-white">
                username harus di isi
              </div>
            ) : (
              ""
            )}
            <Input
              type="password"
              label="Password"
              size="lg"
              onChange={(e) => onChangePassword(e)}
            />
            {passwordValidate == "" ? (
              <div className="rounded bg-pink-400 p-2 text-white">
                password harus di isi
              </div>
            ) : (
              ""
            )}
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              fullWidth
              onClick={(e) => handleLogin(e)}
            >
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link to="/auth/sign-up">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignIn;
