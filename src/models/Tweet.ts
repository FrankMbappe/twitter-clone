export default interface Tweet {
  id: string;
  author: string;
  timestamp: number;
  tweet: string;
  likes?: number;
}
