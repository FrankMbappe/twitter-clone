import { useCallback, useState } from "react";

export default function useUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [userAddress, setUserAddress] = useState("");

  const connectToMetaMask = useCallback(async () => {
    // TODO Get & set user address
  }, []);

  return {
    userAddress,
    isUserConnected: !!userAddress,
    connectToMetaMask,
    loading,
    error,
  };
}
