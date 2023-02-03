import { Box, Button, Flex, Input } from "@chakra-ui/react";
import Avatar from "components/profile/Avatar";
import { useAuth } from "hooks/auth";

export default function NewComment() {
  const { user, isLoading } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  function handleAddComment(data) {
    addComment({
      text,
    });
    reset();
  }

  if (isLoading) return "Loading...";

  return (
    <Box maxW="600px" mx="auto" py="6">
      <Flex padding="4">
        <Avatar user={user} size="sm" />
        <Box flex="1" ml="4">
          <form onSubmit={handleSubmit(handleAddComment)}>
            <Box>
              <Input
                size="sm"
                variant="flushed"
                placeholder="Write comment..."
                autoComplete="off"
                {...register("text", { required: true })}
              />
            </Box>
            <Flex pt="2">
              <Button
                // isLoading={}
                type="submit"
                colorScheme="blackAlpha"
                size="xs"
                ml="auto"
              >
                Add Comment
              </Button>
            </Flex>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}
