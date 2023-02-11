import { Divider, Flex, HStack, Stack, Text } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Stack spacing="5">
      <Flex p={["4", "6"]} pos="relative" align="center">
        Insert Avatar here (size 2xl)
        <Stack ml="10">
          @username here
          <HStack spacing="10">
            <Text color="gray.700" fontSize={["sm", "lg"]}>
              Posts: 10
            </Text>
            <Text color="gray.700" fontSize={["sm", "lg"]}>
              Likes: todo!
            </Text>
            <Text color="gray.700" fontSize={["sm", "lg"]}>
              Joined: Jan 5, 2023
            </Text>
          </HStack>
        </Stack>
      </Flex>
      <Divider />
      <Text>Posts here</Text>
    </Stack>
  );
}
