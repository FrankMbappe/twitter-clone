import Tweet from "@/models/Tweet";
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
      setLoading(true);
      setError("");

      // const tweetList: Tweet[] = await contract?.tweets(0);
      const tweetList = await contract?.tweets(0);

      console.log("list", tweetList);
    } catch (error) {
      console.error(error);
      setError((error as Error).message);
    } finally {
      // We are done!
      setLoading(false);
    }
  }, [contract]);

  useEffect(() => {
    // Initial fetch
    // smartContract.on('NewTweet', () => {
    //   fetchTweetes();
    // })

    fetchTweets();
  }, [contract]);

  return { error, loading, tweets, fetchTweets };
}
