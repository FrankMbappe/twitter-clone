import { useCallback, useState } from "react";

export function useDeleteTweet() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const deleteTweet = useCallback(async (id: string) => {
    // TODO Delete tweet
  }, []);

  return { error, loading, deleteTweet };
}
