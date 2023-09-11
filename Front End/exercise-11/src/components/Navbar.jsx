import { Box, HStack, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Box
        height={"50px"}
        width={"100%"}
        position={"fixed"}
        top={"0"}
        color={"#053B50"}
      >
        <HStack height={"100%"} gap={20} backgroundColor={"#64CCC5"}>
          <Spacer />
          <Link to='/users'>
            <Text>Users</Text>
          </Link>
          <Link to='/register'>
            <Text>Register</Text>
          </Link>
          <Link to='/twitter'>
            <Text>Twitter</Text>
          </Link>
          <Spacer />
        </HStack>
      </Box>
    </>
  );
}
