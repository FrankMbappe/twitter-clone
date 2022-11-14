import React, { createContext, useCallback, useEffect, useState } from "react";
import Web3 from "web3";

export const AccountContext = createContext<{
  userAccount: string;
  connectToMetaMask: () => Promise<void>;
  isUserConnecting: boolean;
  isUserConnected: boolean;
  userConnectError: string;
}>({
  userAccount: "",
  connectToMetaMask: async () => {
    // Do nothing
  },
  isUserConnecting: false,
  isUserConnected: false,
  userConnectError: "",
});

const AccountProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [isUserConnecting, setIsUserConnecting] = useState(false);
  const [userConnectError, setUserConnectError] = useState("");
  const [userAccount, setUserAccount] = useState("");

  const connectToMetaMask = useCallback(async () => {
    try {
      // User is connecting
      setIsUserConnecting(true);

      // Reset userconnecterror
      setUserConnectError("");

      // Ensure ethereum is defined
      if (!window.ethereum) throw new Error("Ethereum is not defined");

      // Connect to MetaMask
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.requestAccounts();

      // Check if there are accounts
      if (accounts.length === 0) throw new Error("No account found");

      // Set user account
      setUserAccount(accounts[0]);
    } catch (error) {
      setUserConnectError((error as Error).message);
    } finally {
      // We are done!
      setIsUserConnecting(false);
    }
  }, []);

  useEffect(() => {
    // When account changes, set user account
    window.ethereum.on("accountsChanged", function (accounts: string[]) {
      setUserAccount(accounts[0]);
    });
  }, []);

  return (
    <AccountContext.Provider
      value={{
        userAccount,
        isUserConnected: !!userAccount,
        connectToMetaMask,
        isUserConnecting,
        userConnectError,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
