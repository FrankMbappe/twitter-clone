export default interface Tweet {
  id: string;
  author: string;
  timestamp: number;
  text: string;
  isDeleted: boolean;
}
