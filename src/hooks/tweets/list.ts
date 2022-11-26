import type Tweet from "@/models/Tweet";
import { AccountContext } from "@/components/AccountProvider";
import { useCallback, useEffect, useState, useContext } from "react";

export function useListTweets() {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { contract } = useContext(AccountContext);

  const fetchTweets = useCallback(async () => {
    // TODO Fetch tweets and set tweets variable
    try {
      // Start loading
      setLoading(true);

      // Reset error
      setError("");

      // Fecth tweets
      const tweetList = await contract?.tweets(0);
      console.log("list", tweetList);

      //setTweets(tweetList);
    } catch (error) {
      // Set error
      setError((error as Error).message);
      console.error(error);
    } finally {
      // We are done!
      setLoading(false);
    }
  }, [contract]);

  useEffect(() => {
    // Initial fetch
    fetchTweets();

    // TODO On new tweet, fetch again
    /* smartContract.on('NewTweet', () => {
      fetchTweets();
    }); */
  }, [fetchTweets]);

  return { error, loading, tweets, fetchTweets };
}
