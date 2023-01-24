import { Box, Button, Heading, HStack, Textarea } from "@chakra-ui/react";
import { useAuth } from "hooks/auth";
import { useAddPost } from "hooks/posts";
import { useForm } from "react-hook-form";
import reactTextareaAutosize from "react-textarea-autosize";

export default function Dashboard(props) {
  const { register, handleSubmit, reset } = useForm();
  const { addPost, isLoading: addingPost } = useAddPost();
  const { user, isLoading: authLoading } = useAuth();

  function handleAddPost(data) {
    addPost({
      uid: user.id,
      text: data.text,
    });
    reset();
  }

  return (
    <Box maxW="600px" mx="auto" py="10">
      <form onSubmit={handleSubmit(handleAddPost)}>
        <HStack justify="space-between">
          <Heading size="lg">New Post</Heading>
          <Button
            colorScheme="blackAlpha"
            type="submit"
            isLoading={authLoading || addingPost}
            loadingText="Loading"
          >
            Post
          </Button>
        </HStack>
        <Textarea
          as={reactTextareaAutosize}
          focusBorderColor="blackAlpha"
          resize="none"
          mt="5"
          placeholder="Create a new post!"
          minRows={3}
          {...register("text", { required: true })}
        />
      </form>
    </Box>
  );
}
