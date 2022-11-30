import type Tweet from "./Tweet";

export default interface TweetWithLikes {
  tweet: Omit<Tweet, "likedBy">;
  likedBy: Tweet["likedBy"];
}
