import { useCallback, useEffect, useState } from "react";
import Web3 from "web3";

export default function useUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userAddress, setUserAddress] = useState("");

  const connectToMetaMask = useCallback(async () => {
    // Reset error
    setError("");

    // Ensure ethereum is defined
    if (!window.ethereum) return setError("Ethereum is not defined");

    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.requestAccounts();

    if (accounts.length === 0) return setError("No account found");

    setUserAddress(accounts[0]);
  }, []);

  useEffect(() => {
    // Tip: We can use an observer
    window.ethereum.on("accountsChanged", function (accounts: string[]) {
      setUserAddress(accounts[0]);
    });
  }, []);

  return {
    userAddress,
    isUserConnected: !!userAddress,
    connectToMetaMask,
    loading,
    error,
  };
}
