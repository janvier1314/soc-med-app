import { useToast } from "@chakra-ui/react";
import { uuidv4 } from "@firebase/util";
import { setDoc } from "firebase/firestore";
import { db } from "lib/firebase";
import { useState } from "react";

export function useAddComment() {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast;

  async function addComment(comment) {
    setLoading(true);
    const id = uuidv4();
    const docRef = doc(db, "comments", id);
    await setDoc(docRef, { ...comment, id });

    toast({
      title: "Comment added.",
      status: "success",
      isClosable: true,
      position: "top",
      duration: 5000,
    });

    setLoading(false);
  }

  return { addComment, isLoading };
}
