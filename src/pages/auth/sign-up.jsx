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
import { useRef, useState } from "react";
import ToastDanger from "@/components/Toast/toastDanger";

export function SignUp() {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [usernameValidate, setUsernameValidate] = useState(true);
  const [passwordValidate, setPasswordValidate] = useState(true);
  const [emailValidate, setEmailValidate] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState(false);

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setUsernameValidate(username);
    setPasswordValidate(password);
    setEmailValidate(password);
    if (
      usernameValidate.length > 0 &&
      passwordValidate.length > 0 &&
      emailValidate.length > 0
    ) {
      setLoading(true);
      setModal(true);
      const roles = {
        roles: ["user"],
      };

      AuthService.register(username, email, password, roles)
        .then((resp) => {
          console.log(resp);
          setLoading(true);
          navigate("/profile");
          window.location.reload();
        })
        .catch((err) => {
          setLoading(false);
          setMessage(err.response.data.message);
        });
    }
  };
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <ToastDanger modals={modal} messages={message} />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign Up
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
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
              type="email"
              label="Email"
              size="lg"
              onChange={(e) => onChangeEmail(e)}
            />
            {emailValidate == "" ? (
              <div className="rounded bg-pink-400 p-2 text-white">
                email harus di isi
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
              <Checkbox label="I agree the Terms and Conditions" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              fullWidth
              onClick={(e) => handleRegister(e)}
            >
              Sign Up
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/auth/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign in
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignUp;
