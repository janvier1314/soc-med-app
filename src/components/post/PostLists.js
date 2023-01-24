import { Box } from "@chakra-ui/react";
import Post from "./index";

export default function PostLists({ posts }) {
  return (
    <Box px="4">
      {posts?.length === 0
        ? "no posts"
        : posts?.map((post) => <Post key={post.id} post={post} />)}
    </Box>
  );
}
