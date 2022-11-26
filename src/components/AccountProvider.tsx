import React, { createContext, useCallback, useEffect, useState } from "react";
import contract, { web3 } from "@/contract";

type AccountContextType = {
  userAccount: string;
  isUserConnecting: boolean;
  isUserConnected: boolean;
  userConnectError: string;
  connectToMetaMask: () => Promise<void>;
  contract?: typeof contract;
  web3: typeof web3;
};

/* Creating a context object holding account info. */
export const AccountContext = createContext<AccountContextType>({
  userAccount: "",
  isUserConnecting: false,
  isUserConnected: false,
  userConnectError: "",
  connectToMetaMask: async () => {
    // Do nothing
  },
  web3,
});

/**
 * The AccountProvider is a React component that provides the AccountContext to its children.
 * @param children Components that will be able to consume provided data.
 */
const AccountProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [isUserConnecting, setIsUserConnecting] = useState(false);
  const [userConnectError, setUserConnectError] = useState("");
  const [userAccount, setUserAccount] = useState("");

  /**
   * Connects to the MetaMask instance of browser, and sets user account value.
   */
  const connectToMetaMask = useCallback(async () => {
    try {
      // User is connecting
      setIsUserConnecting(true);

      // Reset userconnecterror
      setUserConnectError("");

      // Ensure ethereum is defined
      if (!window.ethereum) throw new Error("Ethereum is not defined");

      // Connect to MetaMask
      const accounts = await web3.eth.requestAccounts();

      // Set user account
      setUserAccount(accounts[0]);
    } catch (error) {
      // Set error
      setUserConnectError((error as Error).message);
      console.error(error);
    } finally {
      // We are done!
      setIsUserConnecting(false);
    }
  }, []);

  useEffect(() => {
    if (!window.ethereum) return;

    // When account changes, set user account
    window.ethereum.on("accountsChanged", (accounts: string[]) => {
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
        contract,
        web3,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
