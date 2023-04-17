import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import "../../../css/login.css";

const Login = () => {
  const [isEmailError, setEmailError] = useState(false);
  const [isPasswordError, setPasswordError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log(email, email.match(validRegex));
    if (!email || email.match(validRegex)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const passwordHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
    if (!password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const onSubmitHandler = () => {
    if (!isEmailError && !isPasswordError) {
      console.log("insdie onsubmit");
      console.log(email, password);
      // Validate username and password
      return;
    }
    console.error("Still errors in the page");
  };

  return (
    <Flex className="align-login-page-card">
      <Card width="450px" height="300px">
        <CardHeader>
          <Center>
            <Heading size="md">Welcome to Shopping Cart</Heading>
          </Center>
        </CardHeader>
        <CardBody>
          <FormControl onSubmit={onSubmitHandler} isInvalid={true}>
            <FormLabel>Email{isEmailError}</FormLabel>
            <Input
              isInvalid={isEmailError}
              type="email"
              value={email}
              placeholder="Enter email address"
              onChange={emailHandler}
            />
            {isEmailError ? (
              <FormErrorMessage>Invalid Email Address.</FormErrorMessage>
            ) : null}
            <FormLabel>Password</FormLabel>
            <Input
              isInvalid={isPasswordError}
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={passwordHandler}
            />
            {isPasswordError && (
              <FormErrorMessage>Password is required.</FormErrorMessage>
            )}
            <Center>
              <ButtonGroup gap="4">
                <Button
                  mt={4}
                  colorScheme="teal"
                  isLoading={false}
                  type="submit"
                  onClick={onSubmitHandler}
                >
                  Login
                </Button>
                <Button mt={4} colorScheme="gray" isLoading={false}>
                  Clear
                </Button>
              </ButtonGroup>
            </Center>
          </FormControl>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default Login;
