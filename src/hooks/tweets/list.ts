import type Tweet from "@/models/Tweet";
import { AccountContext } from "@/components/AccountProvider";
import { useCallback, useEffect, useState, useContext, useMemo } from "react";
import orderBy from "lodash/orderBy";
import type TweetWithLikes from "@/models/TweetWithLikes";

export function useListTweets() {
  const { contract, web3, userAccount } = useContext(AccountContext);

  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const sortedTweets = useMemo(
    () => orderBy(tweets, (t) => t.timestamp, "desc"),
    [tweets]
  );

  /**
   * Retrieve tweets and set tweets state variable
   */
  const fetchTweets = useCallback(async () => {
    try {
      // Start loading
      setLoading(true);

      // Reset error
      setError("");

      // Fetch tweets and likes
      const tweetsWithLikes = (await contract?.methods
        .getTweetsWithLikes()
        .call()) as TweetWithLikes[];

      // Merge tweets and likes
      setTweets(
        tweetsWithLikes.map((t) => ({ ...t.tweet, likedBy: t.likedBy }))
      );
    } catch (error) {
      // Set error
      setError((error as Error).message);
      console.error(error);
    } finally {
      // We are done!
      setLoading(false);
    }
  }, [contract]);

  // When app loads
  useEffect(() => {
    // Fetch tweets
    fetchTweets();

    // On new block header, fetch again
    web3.eth.subscribe("newBlockHeaders", (error: unknown) => {
      if (error) return;
      fetchTweets();
    });

    return () => {
      web3.eth.clearSubscriptions((_, success) => {
        if (success) console.log("All subscriptions cleared");
      });
    };
  }, [contract?.methods, fetchTweets, userAccount, web3.eth]);

  return { error, loading, tweets: sortedTweets, fetchTweets };
}
