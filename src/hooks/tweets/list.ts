import Tweet from "@/models/Tweet";
import { useCallback, useEffect, useState } from "react";

export function useListTweets() {
  const [tweets, setTweets] = useState<Tweet[]>([
    {
      id: "C67A47E3-1815-1E0B-E519-1685D7C56859",
      author: "Berk Mcbride",
      createdAt: "2022-03-27 06:53:58",
      text: "eleifend vitae, erat. Vivamus nisi.",
    },
    {
      id: "3D216E61-4BB1-9727-C211-6179CD5B2901",
      author: "Paki Mccormick",
      createdAt: "2023-02-07 17:50:20",
      text: "sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac",
    },
    {
      id: "731D3BE9-3D4B-EB39-ECCE-675D7AC1B1AF",
      author: "Gil Johnston",
      createdAt: "2023-09-04 01:39:34",
      text: "mauris eu elit. Nulla",
    },
    {
      id: "4E3BD96D-B5A3-296B-E3BB-3C77E28F4595",
      author: "Chastity Leblanc",
      createdAt: "2023-09-25 03:37:01",
      text: "eget massa. Suspendisse",
    },
    {
      id: "B2534C58-5317-C62C-8A75-8C956F4BDB44",
      author: "Meredith Roth",
      createdAt: "2021-12-05 12:18:21",
      text: "ipsum dolor sit",
    },
    {
      id: "B192BFF2-B852-D242-E383-6C07446B1588",
      author: "Alexis Floyd",
      createdAt: "2023-02-07 17:10:22",
      text: "interdum. Curabitur dictum.",
    },
    {
      id: "9F2BC4F3-E9A4-B2B5-A61E-B22DE8E75685",
      author: "Merritt Marshall",
      createdAt: "2022-12-25 00:15:47",
      text: "risus. Donec egestas. Aliquam nec enim. Nunc ut",
    },
    {
      id: "2F6776E7-9AB9-85FC-5263-898E622EE281",
      author: "Micah Ryan",
      createdAt: "2023-06-12 18:02:08",
      text: "gravida mauris ut mi. Duis risus odio,",
    },
    {
      id: "31D6CB84-4041-16A4-2ACE-2AEC19CD95D3",
      author: "Fritz Stark",
      createdAt: "2022-07-20 19:37:54",
      text: "massa rutrum magna. Cras",
    },
    {
      id: "78D9758A-7CAD-981E-DAE4-3C62838BA648",
      author: "Cody Russell",
      createdAt: "2022-10-20 15:24:10",
      text: "tempus eu, ligula. Aenean euismod mauris eu elit. Nulla",
    },
    {
      id: "B192BFF2-B852-D242-E383-6C07446B1588",
      author: "Leila Gill",
      createdAt: "2023-02-07 17:10:22",
      text: "ipsum. Donec sollicitudin adipiscing ligula. Aenean",
    },
    {
      id: "9F2BC4F3-E9A4-B2B5-A61E-B22DE8E75685",
      author: "Wing Olson",
      createdAt: "2022-12-25 00:15:47",
      text: "dictum cursus. Nunc mauris elit, dictum eu, eleifend",
    },
    {
      id: "2F6776E7-9AB9-85FC-5263-898E622EE281",
      author: "Vance Benson",
      createdAt: "2023-06-12 18:02:08",
      text: "Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui.",
    },
    {
      id: "31D6CB84-4041-16A4-2ACE-2AEC19CD95D3",
      author: "Brock Blair",
      createdAt: "2022-07-20 19:37:54",
      text: "Quisque tincidunt pede ac urna. Ut tincidunt",
    },
    {
      id: "78D9758A-7CAD-981E-DAE4-3C62838BA648",
      author: "Tanek Britt",
      createdAt: "2022-10-20 15:24:10",
      text: "libero. Integer in magna. Phasellus dolor",
    },
  ]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const fetchTweets = useCallback(async () => {
    // TODO Fetch tweets and set tweets variable
  }, []);

  useEffect(() => {
    // Initial fetch
    fetchTweets();
  }, []);

  return { error, loading, tweets, fetchTweets };
}
