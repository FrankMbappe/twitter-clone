import { AccountContext } from "@/components/AccountProvider";
import { useCallback, useState, useContext } from "react";

export function useDeleteTweet() {
  const { contract, userAccount } = useContext(AccountContext);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const deleteTweet = useCallback(
    async (id: string) => {
      try {
        // Start loading
        setLoading(true);

        // Reset error
        setError("");

        // Delete tweet
        await contract?.methods.deleteTweet(id).send({ from: userAccount });
      } catch (error) {
        // Set error
        setError((error as Error).message);
        console.error(error);
      } finally {
        // We are done!
        setLoading(false);
      }
    },
    [contract, userAccount]
  );

  return { error, loading, deleteTweet };
}
