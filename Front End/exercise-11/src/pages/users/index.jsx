import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../app/feature/users/userSlicer";
import { useEffect } from "react";

export default function UsersPage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users.data);
  const status = useSelector((state) => state.users.status);
  const errors = useSelector((state) => state.users.error);
  console.log("status", status);
  console.log("data", data);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <Box maxWidth={"800px"} margin={"auto"} mt={"100px"}>
      <TableContainer border={"1px solid #64CCC5"} borderRadius={"10px"}>
        <Table variant='striped' colorScheme='teal'>
          <TableCaption>User list</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Password</Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr> */}
            {status === "succeeded" &&
              data.map((item) => (
                <Tr key={item.id}>
                  <Td>{item.name}</Td>
                  <Td>{item.email}</Td>
                  <Td>{item.password}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
