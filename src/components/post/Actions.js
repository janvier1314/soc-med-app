import { Flex, IconButton } from "@chakra-ui/react";
import { useAuth } from "hooks/auth";
import { useToggleLike } from "hooks/posts";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function Actions({ post }) {
  const { id, likes } = post;
  const { user, isLoading: userLoading } = useAuth();

  const isLiked = likes.includes(user?.id);

  const config = {
    id,
    isLiked,
    uid: user?.id,
  };
  const { toggleLike, isLoading: likeLoading } = useToggleLike(config);

  return (
    <Flex p="2">
      <Flex alignItems="center">
        <IconButton
          onClick={toggleLike}
          isLoading={likeLoading || userLoading}
          size="md"
          colorScheme="red"
          variant="ghost"
          icon={isLiked ? <FaHeart /> : <FaRegHeart />}
          isRound
          color={isLiked ? "red.500" : "gray.500"}
        />
        {likes.length}
      </Flex>
    </Flex>
  );
}
