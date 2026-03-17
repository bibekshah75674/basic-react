import React from "react";
import {
  Title,
  Container,
  Paper,
  Tabs,
  TextInput,
  PasswordInput,
  Button,
} from "@mantine/core";
import { useState } from "react";
import { useForm } from "@mantine/form";
import axios from "axios";

export default function SignInForm() {
  const [activeTab, setActiveTab] = useState("login");

  // Login Form
  const loginForm = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 6 ? "Password must be at least 6 characters" : null,
    },
  });

  // Register Form
  const registerForm = useForm({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validate: {
      fullName: (value) => (value.length < 2 ? "Name too short" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 6 ? "Password must be at least 6 characters" : null,
    },
  });


//   register user
  const registerUser = async (values) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/auth/register",
        values,
      );
      console.log(res.data);
      alert("User registered successfully.");
      registerForm.reset();
    } catch (error) {
    alert("User with this email already exists.Log in instead.")
      console.log(error);
    }
  };

//   login user
const loginUser = async (values) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/auth/login",
        values,
      );
      console.log(res.data); 

      //store token to local storage
      localStorage.setItem("token",res.data.token);

      alert("User Logged In Successfully.");
      loginForm.reset();
    } catch (error) {
      console.log(error);
      alert("Unregistered Email or Wrong Password.Try again.")
    }
  };


  return (
    <>
      <Container size={420} my={40} >
        <Title order={1} align="center">
          Welcome
        </Title>

        <Paper shadow="xs" mt={30} withBorder p="xl">
          <Tabs value={activeTab} onChange={setActiveTab}>
            <Tabs.List grow>
              <Tabs.Tab value="login">Login</Tabs.Tab>
              <Tabs.Tab value="register">Sign Up</Tabs.Tab>
            </Tabs.List>

            {/* LOGIN */}
            <Tabs.Panel value="login" pt="md">
              <form
                onSubmit={loginForm.onSubmit(loginUser)}
              >
                <TextInput
                  label="Email"
                  placeholder="your@email.com"
                  {...loginForm.getInputProps("email")}
                />

                <PasswordInput
                  label="Password"
                  mt="md"
                  {...loginForm.getInputProps("password")}
                />

                <Button fullWidth mt="xl" type="submit">
                  Login
                </Button>
              </form>
            </Tabs.Panel>

            {/* REGISTER */}
            <Tabs.Panel value="register" pt="md">
              <form onSubmit={registerForm.onSubmit(registerUser)}>
                <TextInput
                  label="Name"
                  placeholder="Your name"
                  {...registerForm.getInputProps("fullName")}
                />

                <TextInput
                  label="Email"
                  mt="md"
                  {...registerForm.getInputProps("email")}
                />

                <PasswordInput
                  label="Password"
                  mt="md"
                  {...registerForm.getInputProps("password")}
                />

                <Button fullWidth mt="xl" type="submit">
                  Sign Up
                </Button>
              </form>
            </Tabs.Panel>
          </Tabs>
        </Paper>
      </Container>
    </>
  );
}
