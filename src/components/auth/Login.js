import {
  Box,
  Center,
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Link,
  Text,
} from "@chakra-ui/react";
import { REGISTER } from "lib/routes";
import { Link as RouterLink } from "react-router-dom";

export default function Login() {
  return (
    <Center w="100%" h="100vh">
      <Box mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="lg">
        <Heading mb="4" size="lg" textAlign="center">
          Log In
        </Heading>

        <form onSubmit={() => {}}>
          <FormControl isInvalid={true} py="2">
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="user@email.com" />
            <FormErrorMessage>Please enter a valid email</FormErrorMessage>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="password" />
            <FormErrorMessage>Incorrect password</FormErrorMessage>
          </FormControl>
          <Button
            mt="4"
            type="submit"
            colorScheme="orange"
            size="md"
            w="full"
            isLoading={true}
            loadingText="Logging In"
          >
            Log In
          </Button>
        </form>
        <Text fontSize="xlg" align="center" mt="4">
          Don't have an account?{" "}
          <Link
            to={REGISTER}
            color="orange.500"
            fontWeight="medium"
            textDecor="underline"
            _hover={{ background: "orange.100" }}
            as={RouterLink}
          >
            Register
          </Link>{" "}
          instead!
        </Text>
      </Box>
    </Center>
  );
}
