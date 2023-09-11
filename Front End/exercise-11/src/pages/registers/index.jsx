import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmail,
  setName,
  setPassword,
  submitRegister,
} from "../../app/feature/register/registerSlicer";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import axios from "axios";

export default function RegistersPage() {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.register.response);
  const counter = useSelector((state) => state.register.counter);
  const toast = useToast();
  const register = useSelector((state) => state.register);

  const [isSend, setIsSend] = useState(false);
  console.log(isSend);
  useEffect(() => {
    console.log("isSend", isSend);
    async function fetchData() {
      console.log("masuk");
      const response = await axios.post("http://localhost:3000/users", {
        ...register.data,
      });
      return response;
    }
    if (isSend) {
      try {
        fetchData()
          .then((res) => {
            console.log("res", res);
            toast({
              title: "sukses",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
            setIsSend(false);
            window.location.href = "/users";
          })
          .catch((err) => {
            console.log(err);
            setIsSend(false);
          })
          .finally(() => {
            setIsSend(false);
          });
      } catch (err) {
        setIsSend(false);
        console.log(err);
      }
    }
  }, [isSend]);

  console.log(register);
  useEffect(() => {
    if (counter === 0) return;
    toast({
      title: "sukses",
      status: response?.status === 201 ? "success" : "error",
      duration: 3000,
      isClosable: true,
    });
  }, [counter]);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[0-9])/.test(values.password)) {
      errors.password = "Password must contain a number";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      dispatch(setName(values.name));
      dispatch(setEmail(values.email));
      dispatch(setPassword(values.password));
      setIsSend(true);
    },
  });
  return (
    <Box margin={"auto"} mt={"100px"} maxWidth={"400px"}>
      <FormControl>
        <form onSubmit={formik.handleSubmit}>
          <FormLabel fontSize={"25pt"}>Register Page</FormLabel>
          <FormLabel>Name</FormLabel>
          <Input
            id='name'
            type='text'
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <FormHelperText color={"red.400"} margin={"10px 0px 10px 0px"}>
            {formik.errors.name ?? ""}
          </FormHelperText>
          <FormLabel>Email</FormLabel>
          <Input
            id='email'
            type='email'
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <FormHelperText color={"red.400"} margin={"10px 0px 10px 0px"}>
            {formik.errors.email ?? ""}
          </FormHelperText>
          <FormLabel>Password</FormLabel>
          <Input
            id='password'
            type='password'
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <FormHelperText color={"red.400"} margin={"10px 0px 10px 0px"}>
            {formik.errors.password ?? ""}
          </FormHelperText>
          <Button
            colorScheme='teal'
            size='lg'
            type='submit'
            margin={"auto"}
            onSubmit={formik.handleChange}
          >
            Register
          </Button>
        </form>
      </FormControl>
    </Box>
  );
}
